import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPDF, { Page, Document, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// import { MyDocument } from './components/MyDocument';
import { SampleDoc } from './SampleDoc'

function App() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  return (
    <PDFViewer>
      <SampleDoc />
    </PDFViewer>
  );
}



export default App;
