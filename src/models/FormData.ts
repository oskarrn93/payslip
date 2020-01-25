export type FormData = {
  recipient: {
    name: string
    adress: string
    personalIdentityNumber: string
    bankAccount: string
  }
  employer: {
    name: string
    adress: string
    organisationNumber: string
    phoneNumber: string
  }
  payrollPeriod: string
  paymentDate: string
  paymentDescription: string
  salary: number
  taxDeducationPercantage: number
}
