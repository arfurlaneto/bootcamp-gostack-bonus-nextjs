import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Container from '~/components/Container';

import withAnalytics from '~/hocs/withAnalytics';

const Home = () => (
  <Container>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/logo.svg" alt="Logo" />
    <h1>Server-rendered ReactJS App</h1>
    <Link href="/users"><a>Rocketseat&apos;s GitHub Member List</a></Link>
  </Container>
);

export default withAnalytics()(Home);
