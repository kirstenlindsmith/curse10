import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, Projects} from './components'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
    </Switch>
  )
}

export default withRouter(Routes)
