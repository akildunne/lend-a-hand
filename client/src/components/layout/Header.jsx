import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background: url(https://i.imgur.com/90Vq5qU.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 249px;
  width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  
`

const TitleComponent = styled.h1`
  display: flex;
  justify-content: center;
  align-content: flex-start;
`;

const Signin = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-start;
  padding: 15px 0 15px 0;
`;

const LogoutButton = styled.button`
  display: flex;
  justify-content: flex-end;
  margin: 0 25px 15px 0;
`;

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <HeaderContainer>
      <HeaderContent>
      {currentUser ? (
        <>
          {/* <p>{currentUser.username}</p> */}
          <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
        </>
      ) : (
        <Signin
        >
            <Link to="/login"
            style={{
            color: "#2E348C",
          }}>SIGN IN</Link>
        </Signin>
      )}
      <TitleComponent
        style={{
          fontFamily: "brandon-grotesque, sans-serif",
          color: "#2E348C",
          fontWeight: "900",
          fontStyle: "normal",
        }}
      >
          LEND A HAND
      </TitleComponent>
      </HeaderContent>
    </HeaderContainer>
  );
}
