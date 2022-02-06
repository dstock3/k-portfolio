import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const PageViewer = (props) => {
  const [numPages, setNumPages] = useState(null);

  const onDocSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}

export default PageViewer