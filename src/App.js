import React from "react";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";

import Router from "./routes/Router";

const AppContainer = styled.div`
  height: 100vh;
  min-height: 100%;
  background: #121212;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <div>
      <GlobalStyle />
        <AppContainer>
          <Router />
        </AppContainer>
    </div>
  );
}

export default App;
