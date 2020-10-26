import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  text-decoration: none;
  color: #2E348C;
  font-size: 20px;
  margin: 0;

  :hover {
    transform: scale(1.1);
  }
`;

const BackButton = (props) => {
  return (
    <Button onClick={props.onClick}><i className="fas fa-chevron-left"></i></Button>
  )
}

export default BackButton; 