import React, { useState } from 'react'
import './App.css'
import { Form } from './Form'
import { FormData } from './models/FormData'
import { PDFDocument, generatePdf } from './CreatePdf'

const App: React.FC = () => {
  // const [reportData, setReportData] = useState<FormData | null>(null)

  const generateReport = (data: FormData) => {
    // setReportData(data)

    const document = PDFDocument({ data })
    generatePdf(document)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form generateReport={generateReport} />
      </header>
    </div>
  )
}

export default App
