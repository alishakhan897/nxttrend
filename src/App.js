import {Route, Switch} from 'react-router-dom'
import LoginPage from './components/LoginForm'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
  </Switch>
)

export default App
