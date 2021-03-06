import React from 'react';
import styled from 'styled-components';
import Search from './components/Search';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3367&q=80);
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Search></Search>
    </AppContainer>
  );
}

export default App;
