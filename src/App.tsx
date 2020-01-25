import React from 'react'
import './App.css'
import { Form } from './Form'
import { FormData } from './models/FormData'

const App: React.FC = () => {
  const generateReport = (data: FormData) => {
    console.log('generateReport data', data)
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
