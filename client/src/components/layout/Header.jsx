import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  // font-family: brandon-grotesque, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 35px;
`;

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
     <Title>LEND A HAND</Title>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login</Link>
      }
    </div>
  )
}