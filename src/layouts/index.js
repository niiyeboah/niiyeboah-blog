import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import { rhythm, scale } from '../utils/typography';
import AnimatedLogo from '../utils/n-logo.js';
import Header from '../components/Header';
import OverlayMenu from '../components/OverlayMenu';
import SamaiBackground from '../components/SamaiBackground';
import LazyLoadBanner from '../components/LazyLoadBanner';
import StaticLogo from '../assets/images/logo.png';
import '../assets/css/index.css';

const contentPadding = 42;
const bannerHeight = 400;

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.setBanner = this.setBanner.bind(this);
    this.state = {
      menuVisible: null,
      year: new Date().getFullYear()
    };
  }
  toggleMenu() {
    const { menuVisible } = this.state;
    this.setState({
      menuVisible: menuVisible ? null : 'menu-visible'
    });
  }
  setBanner(data) {
    this.setState({ banner: data });
  }
  componentDidMount() {
    new AnimatedLogo('logo', 20).animate();
  }
  componentDidUpdate() {
    const className = 'image-link';
    Array.prototype.forEach.call(document.querySelectorAll('a > img'), el => {
      if (el.parentElement.className.indexOf(className) < 0) {
        el.parentElement.className += ` ${className}`;
      }
    });
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteAuthor = get(this, 'props.data.site.siteMetadata.author');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl');
    const { children } = this.props;
    const { menuVisible, banner, year } = this.state;
    return (
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{siteTitle}</title>
          <link rel="canonical" href={siteUrl} />
          <meta name="description" content={siteDescription} />
          <meta property="og:title" content={'ｎｉｉｙｅｂｏａｈ．ｃｏｍ'} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
          <meta property="og:image:width" content="650" />
          <meta property="og:image:height" content="650" />
          <meta name="msapplication-TileColor" content="#222222" />
          <meta name="theme-color" content="#222222" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222" />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
          />
        </Helmet>
        <Header />
        <div
          style={{
            padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
            background: '#444'
          }}
        >
          <h3 style={{ margin: 0 }}>Header Background</h3>
        </div>
        <section className="menu">
          <div
            onClick={this.toggleMenu}
            className="bars-icon toggle-menu"
            style={{
              padding: `${rhythm(0.3)}` + ' 25px 25px ' + `${rhythm(0.6)}`,
              ...scale(0.5)
            }}
          >
            <i className="fas fa-bars" />
          </div>
          <SamaiBackground className={`overlay overlay-hugeinc ${menuVisible}`}>
            <div
              onClick={this.toggleMenu}
              className="close-icon toggle-menu"
              style={{
                padding: `${rhythm(0.35)}` + ' 25px 25px ' + `${rhythm(0.6)}`,
                ...scale(0.5)
              }}
            >
              <i className="fas fa-times" />
            </div>
            <nav
              style={{
                maxWidth: rhythm(24)
              }}
            >
              <OverlayMenu onClick={this.toggleMenu} />
            </nav>
            <img src={StaticLogo} style={{ margin: rhythm(0.6) }} />
          </SamaiBackground>
        </section>
        <div className="content-area">
          <LazyLoadBanner data={banner} height={bannerHeight} />
          <section
            style={{
              margin: '0 auto',
              maxWidth: rhythm(24),
              padding:
                `${contentPadding}px ` +
                `${rhythm(3 / 4)} ` +
                `${contentPadding * 2}px`,
              position: 'relative'
            }}
          >
            {children({
              ...this.props,
              layout: false,
              setBanner: this.setBanner
            })}
          </section>
        </div>
        <footer>
          <div className="copyright">
            <span>{`© ${year} ${siteAuthor}`}</span>
          </div>
        </footer>
      </main>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
      }
    }
  }
`;
