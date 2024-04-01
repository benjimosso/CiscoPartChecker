import React from 'react';
import { Page, Text, View, Document, StyleSheet, ReactPDF } from '@react-pdf/renderer';

const htmlToPdf = ({ title, heading, content }) => {
    console.log(title, heading, content)
    console.log('htmlToPdf')
    const styles = StyleSheet.create({
        page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 10,
        },
        section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        },
    });
    
    return (
        <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
            <Text>{title}</Text>
            <Text>{heading}</Text>
            <Text>{content}</Text>
            </View>
        </Page>
        </Document>
    );
};


export default htmlToPdf;