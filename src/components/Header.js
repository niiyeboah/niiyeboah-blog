import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';
import TitleLogo from '../assets/images/niiyeboah.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { setHeaderHeight } = this.props;
    return (
      <header className="header-container">
        <div className="header" style={{ maxWidth: rhythm(24) }}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              backgroundImage: 'none',
              textShadow: 'none'
            }}
            to={'/'}
          >
            <img className="title-logo" src={TitleLogo} />
          </Link>
        </div>
        <div
          id="logo"
          style={{
            margin: `${rhythm(0.55)} ${rhythm(3 / 4)} 0 0`
          }}
        />
      </header>
    );
  }
}

export default Header;
