import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <HeaderContent>
        <img src={logoImg} alt="gobarber" />

        <Profile>
          <img
            src="https://avatars3.githubusercontent.com/u/22669861?s=460&u=67e97bd921bec8ac654f1d9b8ab3f9a16e59bdb3&v=4"
            alt="Denis"
          />
          <div>
            <span>Bem vindo</span>
            <strong>Denis Ladeira</strong>
          </div>
        </Profile>

        <button type="button">
          <FiPower />
        </button>
      </HeaderContent>
    </Header>
  </Container>
);

export default Dashboard;
