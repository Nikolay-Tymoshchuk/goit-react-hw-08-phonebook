import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, InnerContainer } from './SharedLayout.styled';
import { Pulsar } from '@uiball/loaders';
import Navigation from '../navigation/Navigation';

const SharedLayout = () => {
  return (
    <Container>
      <InnerContainer>
        <Header>
          <Navigation />
        </Header>
        <Suspense fallback={<Pulsar color="#ff4500" />}>
          <Outlet />
        </Suspense>
      </InnerContainer>
    </Container>
  );
};

export default SharedLayout;
