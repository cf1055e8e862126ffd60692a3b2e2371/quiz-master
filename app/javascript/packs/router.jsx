import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ManagePage from './views/pages/manage-page'
import NotFoundPage from './views/pages/not-found-page'

const AppRouterComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/manage/index"
        component={ManagePage}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouterComponent
