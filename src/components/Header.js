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
            color: '#396'
            //fontWeight: 'bold'
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
    toggleMethodWrapper(toggleVisibility) {
        return () => {
            toggleVisibility();
        };
    }
    responsiveUpdateWrapper(setHeaderHeight) {
        return () => {
            setHeaderHeight(ReactDOM.findDOMNode(this).clientHeight);
        };
    }
    componentDidMount() {
        const { setHeaderHeight, setPusherHeight, contentHeight } = this.props;
        const headerHeight = ReactDOM.findDOMNode(this).clientHeight;
        const menuVisible = window.location.pathname === rootPath;
        setHeaderHeight(headerHeight);
        //setPusherHeight(headerHeight, menuVisible, contentHeight);
    }
    render() {
        const { toggleVisibility, getVisible, setHeaderHeight } = this.props;
        return (
            <Responsive
                as={'div'}
                onUpdate={this.responsiveUpdateWrapper(setHeaderHeight)}
            >
                <Headroom
                    id="header"
                    style={{
                        backgroundColor: '#222',
                        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2.5px 7.5px',
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
                        onClick={this.toggleMethodWrapper(toggleVisibility)}
                    >
                        <HamburgerMenu
                            isOpen={getVisible()}
                            width={20}
                            height={20}
                            strokeWidth={3}
                            rotate={0}
                            color="white"
                            animationDuration={0.5}
                        />
                    </div>
                    <div
                        className="header-container"
                        style={{
                            margin: '0 auto',
                            maxWidth: rhythm(24),
                            padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`
                            //textAlign: 'center'
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
