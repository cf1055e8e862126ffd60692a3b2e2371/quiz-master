import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ManagePage from './views/pages/manage-page'
import QuizPage from './views/pages/quiz-page'
import NotFoundPage from './views/pages/not-found-page'

const AppRouterComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/manage"
        component={ManagePage}
      />
      <Route
        exact
        path="/quiz"
        component={QuizPage}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouterComponent
