import React from 'react';
import { useParams } from 'react-router';

export default function Post() {
  const { id } = useParams<{ id: string }>();

  return <h2>Post: {id}</h2>;
}
