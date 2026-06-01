import { spawn } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)))
const port = 4173
const baseUrl = `http://127.0.0.1:${port}`

const locales = ['en', 'ca', 'es']

const routePageKeys = {
	'/': 'home',
	'/about': 'about',
	'/project': 'projects',
	'/resume': 'resume'
}

function loadMessages(locale) {
	const raw = readFileSync(join(rootDir, 'app', 'messages', `${locale}.json`), 'utf-8')
	return JSON.parse(raw)
}

function buildChecks() {
	const checks = []
	for (const locale of locales) {
		const messages = loadMessages(locale)
		const { siteTitle } = messages.metadata
		const langParam = locale === 'en' ? '' : `?lang=${locale}`
		for (const [path, key] of Object.entries(routePageKeys)) {
			const page = messages.metadata.pages[key]
			const title = page.title === siteTitle ? page.title : `${page.title} | ${siteTitle}`
			checks.push({ path: `${path}${langParam}`, title, description: page.description })
		}
	}
	return checks
}

const checks = buildChecks()

function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

async function waitForServer(url) {
	for (let attempt = 0; attempt < 50; attempt += 1) {
		try {
			const response = await fetch(url)
			if (response.ok) {
				return
			}
		} catch {
			// Ignore connection failures while the preview server is still booting.
		}

		await wait(250)
	}

	throw new Error(`Preview server did not become ready at ${url}`)
}

function assertIncludes(haystack, needle, label) {
	if (!haystack.includes(needle)) {
		throw new Error(`Expected ${label} to include: ${needle}`)
	}
}

const preview = spawn('pnpm', ['exec', 'vite', 'preview', '--host', '127.0.0.1', '--port', String(port)], {
	stdio: 'inherit',
	shell: process.platform === 'win32'
})

const stopPreview = () => {
	if (!preview.killed) {
		preview.kill('SIGTERM')
	}
}

process.on('exit', stopPreview)
process.on('SIGINT', () => {
	stopPreview()
	process.exit(130)
})
process.on('SIGTERM', () => {
	stopPreview()
	process.exit(143)
})

try {
	await waitForServer(baseUrl)

	for (const check of checks) {
		const response = await fetch(`${baseUrl}${check.path}`)
		if (!response.ok) {
			throw new Error(`Expected ${check.path} to return 200, received ${response.status}`)
		}

		const html = await response.text()
		assertIncludes(html, `<title>${check.title}</title>`, `${check.path} title`)
		assertIncludes(html, `content="${check.description}"`, `${check.path} description`)
	}

	console.log(`Smoke route checks passed (${checks.length} checks across ${locales.length} locales).`)
} finally {
	stopPreview()
}
