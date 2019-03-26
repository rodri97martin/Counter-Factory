import React from 'react';
import { DrizzleProvider } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';

import drizzleOptions from './drizzleOptions';
import ContadorFactory from './ContadorFactory';

class App extends React.Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
      	<LoadingContainer>
          <ContadorFactory/>
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
