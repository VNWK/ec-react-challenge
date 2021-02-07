import { createContext, useState } from 'react'

export const FormContext = createContext({
  form: {
    name: '',
    card: '',
    exp: '',
    cvc: '',
  },
  errors: [],
  setForm: () => { },
  submitForm: () => { }
})

const FormContextProvider = props => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState([])

  const submitForm = () => {
    console.log('submitting form')
  }

  return (
    <FormContext.Provider value={{ form, setForm, submitForm }}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormContextProvider