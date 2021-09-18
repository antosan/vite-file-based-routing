import React from 'react';
import { useParams } from 'react-router-dom';

export default function Dynamic() {
  const { 0: all } = useParams<Record<number, string>>();

  return <h2>Dynamic: {all}</h2>;
}
