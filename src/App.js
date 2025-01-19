import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './GlobalComponents/Banner/Banner';
import MsgText from './GlobalComponents/MsgText/MsgText';
import NavigationMenu from './GlobalComponents/NavigationMenu/NavigationMenu';
import TopButton from './GlobalComponents/TopButton/TopButton';

function App() {
  return (
    <>
      <div className="Container">
        <div className="child">
          <div className="row">
            <div className="col-12">
              <Banner />
            </div>
            <div className="col-12">
              <MsgText />
            </div>
            <div className="col-12">
              <NavigationMenu />
            </div>
          </div>
        </div>
        <TopButton />
      </div>
    </>
  );
}

export default App;
