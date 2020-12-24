import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { routes } from './router'
import { header } from './router/header'
import Head from './components/Head'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/'}>
      <Head header={header.global} />
      <Switch>
        {routes().map((route) => {
          return (
            <Route
              exact={route.exact ?? false}
              path={route.path}
              key={route.path}
              render={() => (
                <Suspense fallback={<div>loading...</div>}>
                  <Head header={header[route.name]} />
                  <route.element />
                </Suspense>
              )}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default App
