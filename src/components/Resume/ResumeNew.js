import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/curriculum_Vitae_Samuel_Cobas.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [containerWidth, setContainerWidth] = useState(null); // State to hold the width of our PDF container
  const containerRef = useRef(null); // Ref for our PDF container div
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

  useEffect(() => {
    // Function to update containerWidth on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update windowWidth
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    // Set initial width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Run once on mount to set initial width

  // Determine the scale or width for the Page component
  // Using `width` prop on <Page /> is often more predictable with responsive containers
  const getPdfWidth = () => {
    if (containerWidth) {
      // Adjusted percentage for better fit on mobile (e.g., 95% of container width)
      return windowWidth > 786 ? containerWidth * 0.9 : containerWidth * 0.95;
    }
    return 100;
  };
  // Determine the container height based on window width
  const getContainerHeight = () => {
    // For larger screens, a more fixed height might be appropriate
    if (windowWidth > 786) {
      return "128vh"; // Example: 80% of viewport height
    } else if (windowWidth < 321) {
      // For smaller screens, allow it to take more space but still contain potential overflow
      // This height should be *just enough* to contain the scaled PDF without excess
      // You might need to fine-tune this value. Start with a value like '120vh'
      // and adjust down until the gap is gone but still scrolls if needed.
      return "53vh"; // Example: A value that's often close to a single page's height on mobile
      // Or consider a minHeight and then auto
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* --- PDF Viewer Container --- */}
        <Row className="resume">
          <div
            ref={containerRef} // Attach the ref here
            style={{
              width: "100%", // Take full width of its Row
              maxWidth: "900px", // Optional: Set a max-width for larger screens
              height: getContainerHeight(), // Dynamic height
              margin: "0 auto", // Center the container horizontally
              border: "none", // Optional: for visual debugging
              overflowY: "auto", // CRUCIAL: Enables internal scrolling if content overflows
              overflowX: "hidden",
              display: "flex", // To help center the PDF content
              justifyContent: "center", // Center horizontally within the container
              alignItems: "flex-start", // Align to top within the container
            }}
          >
            {containerWidth && ( // Only render Document once containerWidth is known
              <Document
                file={pdf}
                className="d-flex justify-content-center" // This className will apply to the PDF canvas wrapper
              >
                <Page
                  pageNumber={1}
                  // Use the width prop instead of scale for better responsiveness
                  // `react-pdf` will automatically calculate height to maintain aspect ratio
                  width={getPdfWidth()}
                  renderAnnotationLayer={true}
                  renderTextLayer={true} // Add this line for text selection/search
                />
              </Document>
            )}
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
