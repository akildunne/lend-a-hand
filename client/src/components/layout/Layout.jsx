import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="App" style={{ fontFamily: "brandon-grotesque, sans-serif"}}>
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      {props.children}
      <Footer />
    </div>
  )
}