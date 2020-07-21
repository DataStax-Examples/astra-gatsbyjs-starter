import * as React from 'react';
import Banner from './banner';

const Header = () => (
  <div>
    <Banner linkText={'Create an account now'} href={'https://astra.datastax.com/register'} copy={'Get Started with Astra and Gatsby!'} />
    <div className={'hero'} >
      <h2>Getting Started with Astra + Gatsby.js</h2>
      <p>
      </p>
    </div>
  </div>
)

export default Header;
