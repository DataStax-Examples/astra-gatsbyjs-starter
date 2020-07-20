import * as React from 'react';

const Banner = ({ copy, linkText, href }) => (
  <div className={'announcement'}>
    <p>
      {copy} <a href={href}>{linkText}</a>.
    </p>
  </div>
)

export default Banner;
