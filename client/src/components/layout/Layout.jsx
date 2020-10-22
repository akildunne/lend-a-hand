import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      {props.children}
      <Footer />
    </div>
  )
}