import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, Projects, Contact} from './components'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  )
}

export default withRouter(Routes)
