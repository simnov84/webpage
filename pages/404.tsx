import type { NextPage } from 'next'
import Router from 'next/router';
import { useEffect } from 'react';

const Error: NextPage = () => {
  useEffect(() => {
    Router.replace('/');
  }, []);

  return null;
}

export default Error;