import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {Home} from './Home'
import {NotFound} from './NotFound'
import {Resume} from './Resume' 
import {Contact} from './Contact'
import {Blog} from './Blog'
import {Header} from './Header'
import {Footer} from './Footer'

export const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} /> 
        <Route path='*' component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </div>
)
