import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Suscripcion from '../screens/Suscripcion/Suscripcion'
import Datos from '../screens/Datos/Datos'
import Confirmacion from '../screens/Confirmacion/Confirmacion'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/suscripcion" component={Suscripcion} />
        <Route path="/datos" component={Datos} />
        <Route path="/confirmacion" component={Confirmacion} />
        <Redirect to="/suscripcion" />
      </Switch>
    </Router>);
}

export default App;
