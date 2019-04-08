import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home} from './components'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default withRouter(Routes)
