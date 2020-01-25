import React from 'react'
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'
import { FormData } from './models/FormData'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

export const PDFDocument: React.FC<{ data: FormData }> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{data.recipient.name}</Text>
      </View>
      <View style={styles.section}>
        <Text>{data.employer.name}</Text>
      </View>
    </Page>
  </Document>
)

export const generatePdf = async (document: any) => {
  const blob = await pdf(document).toBlob()
  console.log(blob)
  saveAs(blob, 'test')
}
