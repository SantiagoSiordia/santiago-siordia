import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Particle } from "../Particle";
import { useTranslation } from "react-i18next";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdf = require("../../Assets/santiago-gonzalez-siordia.pdf").default;

const resumeLink =
  "https://raw.githubusercontent.com/santiagosiordia/santiago-siordia/master/src/Assets/santiago-gonzalez-siordia.pdf";

export const ResumeNew = () => {
  const [width, setWidth] = useState(1200);
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume-header" style={{ justifyContent: "center", position: "relative" }}>
          <h1>Resume</h1>
        </Row>
        <p>{t("resume.currentPage", { pageNumber: currentPage, totalPages: 2 })}</p>

        {/* Previous page button and next page button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={() => {
              if (currentPage === 1) {
                setCurrentPage(2);
              } else {
                setCurrentPage(1);
              }
            }}
          >
            {t(currentPage === 1 ? "resume.nextPage" : "resume.previousPage")}
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} >
            <Page pageNumber={currentPage} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;{t("resume.download")}
          </Button>
        </Row>
      </Container>
    </div>
  );
};
