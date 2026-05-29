import { spawn } from 'node:child_process'

const port = 4173
const baseUrl = `http://127.0.0.1:${port}`

const checks = [
	{
		path: '/',
		title: 'Samuel Cobas Portfolio',
		description: 'Product-minded frontend developer portfolio with selected projects, background, and resume.'
	},
	{
		path: '/about',
		title: 'About | Samuel Cobas Portfolio',
		description: 'Background, core stack, QA direction, and the path Samuel Cobas took into frontend-focused product engineering.'
	},
	{
		path: '/project',
		title: 'Projects | Samuel Cobas Portfolio',
		description: 'Selected frontend, XR, and product-delivery projects built by Samuel Cobas.'
	},
	{
		path: '/resume',
		title: 'Resume | Samuel Cobas Portfolio',
		description: 'Resume overview and downloadable CV for Samuel Cobas, covering experience, stack, and next-step responsibilities.'
	}
]

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

	console.log('Smoke route checks passed.')
} finally {
	stopPreview()
}
