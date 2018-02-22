import React from 'react';
import get from 'lodash/get';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/components/icon.min.css';

import { rhythm, scale } from '../utils/typography';
import Header from '../components/Header';
import OverlayMenu from '../components/OverlayMenu';
import SamaiBackground from '../components/SamaiBackground';
import LazyLoadBanner from '../components/LazyLoadBanner';
import logo from '../assets/images/logo.png';
import '../assets/css/index.css';

const contentPadding = 42;
const bannerHeight = 420;

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.setBanner = this.setBanner.bind(this);
    }
    state = {
        menuVisible: null,
        year: new Date().getFullYear()
    };
    toggleMenu() {
        const { menuVisible } = this.state;
        this.setState({
            menuVisible: menuVisible ? null : 'menu-visible'
        });
    }
    setBanner(data) {
        this.setState({ banner: data });
    }
    componentDidUpdate() {
        const { menuVisible } = this.state;
        const root = document.documentElement;
        Array.prototype.forEach.call(
            document.querySelectorAll('a > img'),
            el => {
                el.parentElement.className += ' image-link';
            }
        );
        if (menuVisible) root.style.overflowY = 'hidden';
        else root.style.overflowY = 'scroll';
    }
    render() {
        const siteAuthor = get(this, 'props.data.site.siteMetadata.author');
        const { children } = this.props;
        const { menuVisible, banner, year } = this.state;
        return (
            <main>
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
                        className="bars-icon"
                        style={{
                            padding:
                                `${rhythm(0.25)}` +
                                ' 25px 25px ' +
                                `${rhythm(0.6)}`,
                            ...scale(0.5)
                        }}
                    >
                        <Icon name="bars" />
                    </div>
                    <SamaiBackground
                        className={`overlay overlay-hugeinc ${menuVisible}`}
                    >
                        <div
                            onClick={this.toggleMenu}
                            className="close-icon"
                            style={{
                                padding:
                                    `${rhythm(0.35)}` +
                                    ' 25px 25px ' +
                                    `${rhythm(0.6)}`,
                                ...scale(0.5)
                            }}
                        >
                            <Icon name="close" />
                        </div>
                        <nav
                            style={{
                                maxWidth: rhythm(24),
                                padding: `${contentPadding}px ${rhythm(3 / 4)}`
                            }}
                        >
                            <OverlayMenu onClick={this.toggleMenu} />
                        </nav>
                        <img src={logo} style={{ margin: rhythm(0.6) }} />
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
                    <footer>
                        <div className="copyright">
                            <span>{`${siteAuthor} © ${year}`}</span>
                        </div>
                    </footer>
                </div>
            </main>
        );
    }
}

export default Template;

export const pageQuery = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                author
            }
        }
    }
`;
