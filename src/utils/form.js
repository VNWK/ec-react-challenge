export const validateForm = (data) => {
  const errors = []
  const d = new Date()
  const currYear = d.getFullYear().toString().substring(2, 4)
  const currMonth = d.getMonth() + 1

  for (const [key, val] of Object.entries(data)) {
    let error = false

    if (!val || val.length === 0) error = true

    if (key === 'card') {
      if (isNaN(val)) error = true

      if (val.length < 16 || val.length > 16) error = true
    }

    if (key === 'exp') {
      if (val.length > 5 || val.length < 5) error = true

      if (val.indexOf('/') === -1) error = true

      else {

        const [month, year] = val.split('/')

        if (month > 12 || month < 1) error = true
        if (year < currYear) error = true
        if (year == currYear && month < currMonth) error = true

      }
    }

    if (key === 'cvc') {
      if (isNaN(val)) error = true
      if (val.length > 3 || val.length < 3) error = true
    }

    if (error)
      errors.push(key)
  }

  return errors
}