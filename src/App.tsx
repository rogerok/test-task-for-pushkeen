import React from "react";
import Container from "./components/container/Container";
import Header from "./components/header/Header";

const App = () => (
  <>
    <Header />
    <Container>
      <div
        className="App"
        style={{
          color: "black",
          fontFamily: "Open Sans",
        }}
      >
        Hi there
      </div>
    </Container>
  </>
);

export default App;
