import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';
import Container from '~/components/Container';

import withAnalytics from '../src/hocs/withAnalytics';

const User = ({ users }) => (
  <Container>
    <Head>
      <title>Usuários</title>
    </Head>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <span>{user.login}</span>
          <Link href={`/users/${user.login}`}>
            <a>Acessar Perfil</a>
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </Container>
);

User.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/rocketseat/members',
  );

  return { users: response.data };
};

export default withAnalytics()(User);
