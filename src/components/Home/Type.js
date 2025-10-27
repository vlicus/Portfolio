import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "React & Next.js Enthusiast",
          "Software Engineer",
          "Full-Stack Explorer",
          "UI/UX Lover",
          "Tech Problem Solver",
          "Code Refactorer",
          "Web App Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
