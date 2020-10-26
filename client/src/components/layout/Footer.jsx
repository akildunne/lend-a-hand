import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2e348c;
  border-radius: 15px 15px 0 0;
  height: 68px;
  width: 100%;
  position: absolute;
`;

const HomeButton = styled.div``;

const CreateButton = styled.div``;

const CalendarButton = styled.div``;

export default function Footer() {
  return (
    <FooterContainer>
      <HomeButton>
        <Link to="/" style={{ color: "#FFFFFF", fontSize: "25px" }}>
          <i className="fas fa-home"></i>
        </Link>
      </HomeButton>
      <CreateButton>
        <Link to="/create" style={{ color: "#F4B24E", fontSize: "40px" }}>
          <i className="fas fa-plus-circle"></i>
        </Link>
      </CreateButton>
      <CalendarButton>
        <Link to="/calendar" style={{ color: "#FFFFFF", fontSize: "25px" }}>
          <i className="far fa-calendar-alt"></i>
        </Link>
      </CalendarButton>
    </FooterContainer>
  );
}
