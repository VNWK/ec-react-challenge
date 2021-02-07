import Checkmark from '../../layout/Checkmark'
import ConfirmacionComponent from '../../components/Confirmacion'
import BaseLayout from '../../layout/BaseLayout'

const Confirmacion = (props) => {
  return (
    <BaseLayout uri={props.location.pathname}>
      <Checkmark />
      <ConfirmacionComponent />
    </BaseLayout>

  )
}

export default Confirmacion