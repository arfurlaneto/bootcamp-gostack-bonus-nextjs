import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Container from '~/components/Container';

import withAnalytics from '../src/hocs/withAnalytics';

const Detail = ({ user }) => (
  <Container>
    <h1>{user.login}</h1>
    <img className="avatar" src={user.avatar_url} width="200" alt="Avatar" />
    <Link href="/users">
      <a>Voltar</a>
    </Link>
  </Container>
);

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`,
  );

  return { user: response.data };
};

export default withAnalytics()(Detail);
