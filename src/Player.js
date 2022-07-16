import React from 'react';
import './Player.css';
import Siderbar from './Siderbar';
import Body from './Body';
import Footer from './Footer';

export default function Player({ spotify }) {
  return (
    <div>
      <div className="player__body">
        <Siderbar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}
