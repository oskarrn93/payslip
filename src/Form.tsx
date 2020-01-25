import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 95%;
  min-width: auto;
  margin: auto;
  padding: 20px;
`

const Details = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  & {
    align-items: center;
  }
`

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0 0;

  & > label {
    font-size: 15px;
    text-align: left;
    margin-bottom: 5px;
  }
`

const InputWithLabel = ({ label, children }: { [label: string]: any }) => {
  return (
    <FormItem>
      <label>{label}</label>
      {children}
    </FormItem>
  )
}

const Form: React.FC = () => {
  const [recipientName, setRecipientName] = useState('')
  const [recipientAdress, setRecipientAdress] = useState('')
  const [recipientPersonalIdentityNumber, setRecipientPersonalIdentityNumber] = useState('')
  const [recipientBankAccount, setRecipientBankAccount] = useState('')

  const [employerName, setEmployerName] = useState('')
  const [employerAdress, setEmployerAdress] = useState('')
  const [employerOrganisationNumber, setEmployerOrganisationNumber] = useState('')
  const [employerPhoneNumber, setEmployerPhoneNumber] = useState('')

  const [payrollPeriod, setPayrollPeriod] = useState('')
  const [paymentDate, setPaymentDate] = useState('')
  const [paymentDescription, setPaymentDescription] = useState('')
  const [salary, setSalary] = useState(0)
  const [taxDeducationPercantage, setTaxDeducationPercantage] = useState(0)

  console.log(taxDeducationPercantage)
  return (
    <Container>
      Fyll i uppgifterna nedan och klicka sedan på generera.
      <Details>
        <label>Löntagare</label>
        <FormContainer>
          <InputWithLabel label="Namn">
            <input type="text" value={recipientName} onChange={e => setRecipientName(e.target.value)} />
          </InputWithLabel>
          <InputWithLabel label="Adress">
            <input type="text" value={recipientAdress} onChange={e => setRecipientAdress(e.target.value)} />
          </InputWithLabel>
          <InputWithLabel label="Personnummer">
            <input
              type="text"
              value={recipientPersonalIdentityNumber}
              onChange={e => setRecipientPersonalIdentityNumber(e.target.value)}
            />
          </InputWithLabel>
          <InputWithLabel label="Bankkontonummer">
            <input type="text" value={recipientBankAccount} onChange={e => setRecipientBankAccount(e.target.value)} />
          </InputWithLabel>
        </FormContainer>
      </Details>
      <Details>
        <label>Arbetsgivare</label>
        <FormContainer>
          <InputWithLabel label="Namn">
            <input type="text" value={employerName} onChange={e => setEmployerName(e.target.value)} />
          </InputWithLabel>
          <InputWithLabel label="Adress">
            <input type="text" value={employerAdress} onChange={e => setEmployerAdress(e.target.value)} />
          </InputWithLabel>
          <InputWithLabel label="Organisationsnummer">
            <input
              type="text"
              value={employerOrganisationNumber}
              onChange={e => setEmployerOrganisationNumber(e.target.value)}
            />
          </InputWithLabel>
          <InputWithLabel label="Telefonnummer">
            <input type="tel" value={employerPhoneNumber} onChange={e => setEmployerPhoneNumber(e.target.value)} />
          </InputWithLabel>
        </FormContainer>
      </Details>
      <Details>
        <label>Detaljer</label>
        <FormContainer>
          <InputWithLabel label="Löneperiod">
            <input type="text" value={payrollPeriod} onChange={e => setPayrollPeriod(e.target.value)} />
          </InputWithLabel>
          <InputWithLabel label="Utbetalningsdag">
            <input type="text" value={paymentDate} onChange={e => setPaymentDate(e.target.value)} />
          </InputWithLabel>
          <InputWithLabel label="Beskrivning">
            <input type="text" value={paymentDescription} onChange={e => setPaymentDescription(e.target.value)} />
          </InputWithLabel>
          <InputWithLabel label="Skattepliktig lön">
            <input type="number" value={salary} onChange={e => setSalary(parseInt(e.target.value, 10))} />
          </InputWithLabel>
          <InputWithLabel label="Procentuellt skatteavdrag">
            <input
              type="number"
              value={taxDeducationPercantage}
              onChange={e => setTaxDeducationPercantage(parseInt(e.target.value, 10))}
              // value={new Intl.NumberFormat('sv-SE').format(40000)}
            />
          </InputWithLabel>
        </FormContainer>
      </Details>
    </Container>
  )
}

export default Form
