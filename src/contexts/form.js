import { useHistory } from 'react-router-dom'

import { createContext, useState } from 'react'
import { validateForm } from '../utils/form'


export const FormContext = createContext({
  form: {
    name: '',
    card: '',
    exp: '',
    cvc: ''
  },
  errors: [],
  setForm: () => { },
  submitForm: () => { }
})

const FormContextProvider = props => {
  const [form, setForm] = useState({
    name: '',
    card: '',
    exp: '',
    cvc: ''
  })
  const [errors, setErrors] = useState([])

  const submitForm = () => {
    const errors = validateForm(form)

    setErrors(errors)
    return errors.length === 0
  }

  return (
    <FormContext.Provider value={{ form, setForm, submitForm, errors }}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormContextProvider