"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import dynamic from "next/dynamic";

// const PDFDownloadLink = dynamic(
//   () => import("@react-pdf/renderer").then((mod) => mod. PDFDownloadLink),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   },
// );

// create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center", //center the content
    justifyContent: "center", //center the content
    backgroundColor: "white",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1,
  },

  test: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    
  },
  // viewer: {
  //   width: window.innerWidth, //the pdf viewer will take up all of the width and height
  //   height: window.innerHeight,
  // },
});

// Create Document Component
function HtmlToPdf({ power, power2, fan, rackmount, filename }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{"ESTO ES UN TEST"}</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.test}>
            <Text style={{border: "1px solid #000"}}>{"Power: "}</Text>
            <Text>{power}</Text>
          </View>
          <Text>{power2}</Text>
          <Text>{fan}</Text>
          <Text>{rackmount}</Text>
        </View>
      </Page>
    </Document>
    // <PDFDownloadLink document={<HtmlToPdf />} fileName="somename.pdf">
    //     {({loading, error }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
    // </PDFDownloadLink>
  );
}

export default HtmlToPdf;
// await ReactPDF.render(<htmlToPdf />, `${__dirname}/output.pdf`);
