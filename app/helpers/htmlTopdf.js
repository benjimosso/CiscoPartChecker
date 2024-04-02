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
    padding: 1,
  },
  section: {
    margin: 5,
    borderBottom: "1px solid #000",
    // padding: 10,
    // flexGrow: 1,
  },

  test: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    fontSize: 12,
    // margin: 15,
    // border: "2px solid #000",
  },
  // viewer: {
  //   width: window.innerWidth, //the pdf viewer will take up all of the width and height
  //   height: window.innerHeight,
  // },
});

// Create Document Component
function HtmlToPdf({
  power,
  power2,
  fan,
  rackmount,
  ciscopn,
  description,
  weight,
  dims,
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{"List of Materials"}</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.test}>
            <Text>{"Cisco PN: "}</Text>
            <Text>{ciscopn}</Text>
          </View>
          <View style={styles.test}>
            <Text>{"Rackmount: "}</Text>
            <Text>{rackmount}</Text>
          </View>
          <View style={styles.test}>
            <Text>{"Power: "}</Text>
            <Text>{power}</Text>
          </View>
          <View style={styles.test}>
            <Text>{"Power2: "}</Text>
            <Text>{power2}</Text>
          </View>
          <View style={styles.test}>
            <Text>{"Fan: "}</Text>
            <Text>{fan}</Text>
          </View>
          {/* <View style={styles.test}>
            <Text>{"Description: "}</Text>
            <Text>{description}</Text>
          </View> */}
          <View style={styles.test}>
            <Text>{"Weight: "}</Text>
            <Text>{weight}</Text>
          </View>
          <View style={styles.test}>
            <Text>{"Dims: "}</Text>
            <Text>{dims}</Text>
          </View>
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
