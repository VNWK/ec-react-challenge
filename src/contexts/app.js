import { createContext, useEffect, useState } from 'react'
import plans from '../constants/plans'

export const AppContext = createContext({
  planSelected: 'standard',
  form: {
    name: '',
    card: '',
    exp: '',
    cvc: '',
  },
  planList: {},
  setPlanSelected: () => { },
  initPlanList: () => { },
})

const AppContextProvider = props => {
  const [planSelected, setPlanSelected] = useState('standard')
  const [planList, setPlanList] = useState({})
  const [form, setForm] = useState({})

  useEffect(() => {
    console.log('initializing  plans')
    setPlanList(plans)
  }, [])

  return (
    <AppContext.Provider value={{ planSelected, setPlanSelected, planList, form }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider