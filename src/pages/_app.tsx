import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type MyAppProps = {
  children: ReactNode;
};

export default function MyApp({ children }: MyAppProps) {
  return (
    <div>
      <h1>App</h1>

      <Link to="/app">app</Link>

      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

      <Link to="/about">about</Link>

      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

      <Link to="/dashboard/settings/username">nested</Link>

      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

      <Link to="/posts/2">dynamic 1</Link>

      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

      <Link to="/foo/settings">dynamic 2</Link>

      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

      <Link to="/dynamic/2020/id/title">dynamic 3</Link>

      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

      <Link to="/random">404</Link>

      {children}
    </div>
  );
}
