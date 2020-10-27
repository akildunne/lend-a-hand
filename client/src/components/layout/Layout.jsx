import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const BodyDiv = styled.div`
  background-color: #9ADCF7;
`

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div
      className="App"
      style={{ fontFamily: "brandon-grotesque, sans-serif" }}
    >
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <BodyDiv>{props.children}</BodyDiv>
      <Footer />
    </div>
  );
}
