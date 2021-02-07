import { useContext } from 'react'

import Checkmark from '../../layout/Checkmark'
import ConfirmacionComponent from '../../components/Confirmacion'
import BaseLayout from '../../layout/BaseLayout'

import { FormContext } from '../../contexts/form'
import { AppContext } from '../../contexts/app'

const Confirmacion = (props) => {
  const { form } = useContext(FormContext)
  const { planSelected, planList } = useContext(AppContext)

  return (
    <BaseLayout uri={props.location.pathname}>
      <Checkmark />
      <ConfirmacionComponent form={form} planSelected={planSelected} planList={planList} />
    </BaseLayout>

  )
}

export default Confirmacion