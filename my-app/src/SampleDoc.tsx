import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import Header from './components/Header';
import { Resume } from './types';
import Body from './components/Body';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E9EAEC'
  },
  sectionsContainer: {
    flexWrap: 'nowrap',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 100
  }
});

type ResumeProps = Resume;

Font.register({
  family: 'Roboto',
  src: `${__dirname}/fonts/fonts/Roboto/Roboto-Regular.ttf`,
});

Font.register({
  family: 'Roboto Light',
  src: `https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap`,
});
Font.register({
  family: 'Lato',
  src: `${__dirname}/fonts/fonts/Lato/Lato-Italic.ttf`,
});

Font.register({
  family: 'Roboto Bold',
  src: `${__dirname}/fonts/fonts/Roboto/Roboto-Bold.ttf`,
});

// Create Document Component
export const SampleDoc = (props: ResumeProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sectionsContainer}>
        <Header {...props}></Header>
        <Body {...props}></Body>
      </View>

    </Page>
  </Document>
);