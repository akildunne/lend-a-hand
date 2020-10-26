import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background: url(https://i.imgur.com/Vj7pHZV.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 170px;
  width: 100%;
  padding-top: 15px;

  @media (max-width: 800px) {
    // height: 500px;
  }
  @media (max-width: 1300px) {
    // height: 400px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  height: 200px;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

const HeaderName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

const TitleComponent = styled.h1`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  margin: 0px;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

const LogoContainer = styled.div``;

const Logo = styled.img`
  height: 50px;
  width: 50px;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

const Signin = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-start;
  padding: 8px 0 5px 0;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

const LogoutButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-start;
  padding: 8px 0 5px 0;

  @media (max-width: 800px) {
    
  }
  @media (max-width: 1300px) {
    
  }
`;

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <HeaderContainer>
      <HeaderContent>
        {currentUser ? (
          <>
            <LogoutButton
              onClick={handleLogout}
              style={{
                color: "#2E348C",
                fontSize: "12px",
              }}
            >
              LOGOUT
            </LogoutButton>
          </>
        ) : (
          <Signin>
            <Link
              to="/login"
              style={{
                color: "#2E348C",
                fontSize: "12px",
              }}
            >
              SIGN IN
            </Link>
          </Signin>
        )}
        <HeaderName>
          <TitleComponent
            style={{
              fontFamily: "brandon-grotesque, sans-serif",
              color: "#2E348C",
              fontWeight: "900",
              fontStyle: "normal",
              fontSize: "37px",
            }}
          >
            LEND A HAND
          </TitleComponent>
          <LogoContainer>
            <Logo src="https://i.imgur.com/vjmR01y.png" alt="logo"></Logo>
          </LogoContainer>
        </HeaderName>
      </HeaderContent>
    </HeaderContainer>
  );
}
