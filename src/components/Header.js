import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import HamburgerMenu from 'react-hamburger-menu';
import { Responsive } from 'semantic-ui-react';
import 'typeface-fira-sans';

import { rhythm } from '../utils/typography';

let rootPath = `/`;
if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`;
}

class NiiYeboahDotCom extends React.Component {
    render() {
        const boldGreen = {
            color: '#396',
            fontWeight: 'bold'
        };
        return (
            <span style={{ fontFamily: 'fira-sans, monospace' }}>
                <span style={boldGreen}>{'<'}</span>
                niiyeboah
                <span style={boldGreen}>.</span>
                com
                <span style={boldGreen}>{'>'}</span>
            </span>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    toggleMethodWrapper(getVisible, toggleVisibility) {
        return () => {
            toggleVisibility();
            this.setState({
                menuVisible: !getVisible()
            });
        };
    }
    responsiveUpdateWrapper(setHeaderHeight) {
        return () => {
            setHeaderHeight(ReactDOM.findDOMNode(this).clientHeight);
        };
    }
    componentDidMount() {
        let headerHeight = ReactDOM.findDOMNode(this).clientHeight;
        let menuVisible = window.location.pathname === rootPath;
        this.props.setHeaderHeight(headerHeight);
        this.props.setPusherHeight(headerHeight, menuVisible);
        this.state = { menuVisible };
        console.log('H_mounted', menuVisible, headerHeight);
    }
    render() {
        const { toggleVisibility, getVisible, setHeaderHeight } = this.props;
        const { menuVisible } = this.state;
        return (
            <Responsive
                as={'div'}
                onUpdate={this.responsiveUpdateWrapper(setHeaderHeight)}
            >
                <Headroom
                    style={{
                        backgroundColor: '#222',
                        boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
                        transition: 'width 1s ease-in-out'
                    }}
                >
                    <div
                        style={{
                            display: 'inline-block',
                            padding: `${rhythm(2 / 3)} ${rhythm(3 / 4)}`,
                            position: 'absolute',
                            cursor: 'pointer'
                        }}
                        onClick={this.toggleMethodWrapper(
                            getVisible,
                            toggleVisibility
                        )}
                    >
                        <HamburgerMenu
                            isOpen={menuVisible}
                            width={20}
                            height={20}
                            strokeWidth={3}
                            rotate={0}
                            color="white"
                            animationDuration={0.5}
                        />
                    </div>
                    <div
                        style={{
                            margin: '0 auto',
                            maxWidth: rhythm(24),
                            padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
                            textAlign: 'center'
                        }}
                    >
                        <h3
                            style={{
                                margin: 0,
                                color: 'rgb(252, 253, 254)',
                                display: 'inline-block'
                            }}
                        >
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
                                <NiiYeboahDotCom />
                            </Link>
                        </h3>
                    </div>
                </Headroom>
            </Responsive>
        );
    }
}

export default Header;
