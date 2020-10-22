import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
     <h1>LEND A HAND <i className="fas fa-heart"></i> <i className="fas fa-hands"></i> </h1>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login</Link>
      }
      {/* <hr />
      {
        currentUser &&
        <>
          <Link to='/foods'>Foods</Link>
          <Link to='/flavors'>Flavors</Link>
        </>
      } */}
    </div>
  )
}