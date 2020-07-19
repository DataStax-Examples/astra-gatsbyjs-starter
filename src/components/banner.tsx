import { Link } from 'gatsby';
import * as PropTypes from 'prop-types';
import * as React from 'react';

const Banner = ({ copy, linkText, href }) => (
  <div className={'announcement'}>
    <p>
      {copy} <a href={href}>{linkText}</a>.
    </p>
  </div>
)

Banner.propTypes = {
  siteTitle: PropTypes.string,
}

Banner.defaultProps = {
  siteTitle: ``,
}

export default Banner;
