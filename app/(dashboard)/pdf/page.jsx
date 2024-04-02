'use client';
import React from 'react'
import HtmlToPdf from '../../helpers/htmlToPdf';
import dynamic from "next/dynamic";

// import PDFDownloadLink from '@react-pdf/renderer';
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod. PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);


export default function pdfRender({title, heading, content}) {

  console.log(title, heading, content)
  return (
    // <PDFDownloadLink document={<HtmlToPdf />} fileName="somename.pdf">
    //     {({loading, error }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
    // </PDFDownloadLink>
    <PDFViewer style={{width: "100%", height: "100vh"}}>
      <HtmlToPdf  title={title} heading={heading} content={content}/>
    </PDFViewer> 
  )
}
