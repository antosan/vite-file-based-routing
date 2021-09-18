import React, { ComponentType, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

const PRESERVED = import.meta.globEager('/src/pages/(_app|404).tsx');
const ROUTES = import.meta.globEager('/src/pages/**/[a-z[]*.tsx');

const preserved = Object.keys(PRESERVED).reduce<{ [key: string]: ComponentType }>((preserved, file) => {
  const key = file.replace(/\/src\/pages\/|\.tsx$/g, '');
  const component: ComponentType = PRESERVED[file].default;

  return { ...preserved, [key]: component };
}, {});

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');
  const component: ComponentType = ROUTES[route].default;

  return { path, component };
});

export default function Routes() {
  const App = preserved?.['_app'] || Fragment;
  const NotFound = preserved?.['404'] || Fragment;

  return (
    <App>
      <Switch>
        {routes.map(({ path, component: Component = Fragment }) => (
          <Route key={path} path={path} component={Component} exact={true} />
        ))}
        <Route path="*" component={NotFound} />
      </Switch>
    </App>
  );
}
