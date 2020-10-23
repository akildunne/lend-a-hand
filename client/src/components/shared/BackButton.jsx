import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  text-decoration: none;
  color: #000000;
  font-size: 25px;
  margin: 0;

  :hover {
    transform: scale(1.1);
  }
`;

const BackButton = (props) => {
  return (
    <Button onClick={props.onClick}><i className="fas fa-arrow-alt-circle-left"></i></Button>
  )
}

export default BackButton; 