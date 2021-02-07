import { createContext, useEffect, useState } from 'react'
import plans from '../constants/plans'

export const AppContext = createContext({
  planSelected: 'standard',
  planList: {},
  setPlanSelected: () => { },
  initPlanList: () => { },
})

const AppContextProvider = props => {
  const [planSelected, setPlanSelected] = useState('standard')
  const [planList, setPlanList] = useState({})

  const initPlanList = () => {
    setPlanList(plans)
  }

  const switchPlan = () => {
    if (planSelected === 'standard')
      setPlanSelected('premium')
    else
      setPlanSelected('standard')
  }

  useEffect(() => {
    console.log('initializing  plans')
    initPlanList()
  }, [])

  return (
    <AppContext.Provider value={{ planSelected, switchPlan, planList }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider