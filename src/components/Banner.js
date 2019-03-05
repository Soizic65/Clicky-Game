import React from 'react';

const style = {
  bgDark: {
    backgroundColor: `rgb(0,0,100)`
  }
}

const Banner = props => (
  <article style={style.bgDark} className="mw7 center ph3 ph5-ns tc br2 pv3 bg-black-90 mb5 animated fadeIn">
    <h2 className="fw2 f4 lh-copy mt0 mb3 white animated fadeIn slower">
    Click on an image to earn points!
    <hr></hr>
    Make sure to not click on any image more than one time!
    </h2> 
  </article>
);
export default Banner;