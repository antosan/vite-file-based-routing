import React from 'react';
import { useParams } from 'react-router-dom';

export default function Settings() {
  const { username } = useParams<{ username: string }>();

  return <h2>Settings: {username}</h2>;
}
