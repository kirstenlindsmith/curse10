import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, Projects, Contact, Images} from './components'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/art" render={() => <Images pageType="art" />} />
        <Route path="/graphics" render={() => <Images pageType="graphics" />} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  )
}

export default withRouter(Routes)
