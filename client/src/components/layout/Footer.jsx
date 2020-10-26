import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const FooterContainer = styled.div`
  
  `;

const HomeButton = styled.div`

`;
  
const CreateButton = styled.div`

`;

const CalendarButton = styled.div`

`;

export default function Footer() {
  return (
    <FooterContainer>
      <HomeButton>
      <Link to="/">
        <i className="fas fa-home"></i>
        </Link>
        </HomeButton>
      <CreateButton>
      <Link to="/create">
        <i className="fas fa-plus-circle"></i>
      </Link>
      </CreateButton>
      <CalendarButton>
      <Link to="/calendar">
      <i className="far fa-calendar-alt"></i>
      </Link>
      </CalendarButton>
    </FooterContainer>
  );
}
