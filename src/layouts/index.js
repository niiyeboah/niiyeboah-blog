import React from 'react';
import Link from 'gatsby-link';
import { Container } from 'react-responsive-grid';
import Headroom from 'react-headroom';
import HamburgerMenu from 'react-hamburger-menu';
import { Sidebar, Button, Icon, Responsive } from 'semantic-ui-react';
import 'semantic-ui-css/components/sidebar.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'typeface-fira-sans';

import { rhythm, scale } from '../utils/typography';

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
            <span style={{ fontFamily: 'fira-sans,  monospace' }}>
                <span style={boldGreen}>{'<'}</span>
                <span>niiyeboah</span>
                <span style={boldGreen}>.</span>
                <span>com</span>
                <span style={boldGreen}>{'>'}</span>
            </span>
        );
    }
}

class Template extends React.Component {
    state = { visible: location.pathname === rootPath };
    toggleVisibility = () => this.setState({ visible: !this.state.visible });
    getWidth = () => {
        if (document.documentElement.clientWidth <= 960) return '';
        else return 'very wide';
    };
    handleOnUpdate = () => {
        this.setState({
            sideBarWidth: this.getWidth()
        });
    };
    render() {
        const noUnderline = { backgroundImage: 'none', textShadow: 'none' };
        const { location, children } = this.props;
        const { visible } = this.state;
        let header = (
            <Headroom
                onPin={() => console.log('pinned')}
                onUnpin={() => console.log('unpinned')}
                style={{
                    background: '#222',
                    boxShadow: '1px 1px 1px rgba(0,0,0,0.25)'
                }}
            >
                <div
                    style={{
                        display: 'inline-block',
                        padding: `${rhythm(0.65)} 0 0 ${rhythm(3 / 4)}`,
                        position: 'absolute',
                        cursor: 'pointer'
                    }}
                >
                    <HamburgerMenu
                        isOpen={this.state.visible}
                        menuClicked={this.toggleVisibility.bind(this)}
                        width={20}
                        height={20}
                        strokeWidth={2}
                        rotate={0}
                        color="white"
                        animationDuration={0.5}
                    />
                </div>
                <Container
                    style={{
                        maxWidth: 'auto',
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
                        <NiiYeboahDotCom />
                    </h3>
                </Container>
            </Headroom>
        );
        return (
            <Responsive
                as={Container}
                onUpdate={this.handleOnUpdate}
                style={{ maxWidth: 'auto' }}
            >
                {header}
                <Sidebar.Pushable as={Container} style={{ maxWidth: 'auto' }}>
                    <Sidebar
                        as={Container}
                        width={this.state.sideBarWidth || this.getWidth()}
                        animation="push"
                        visible={visible}
                        icon="labeled"
                    />
                    <Sidebar.Pusher>
                        <Container
                            style={{
                                maxWidth: rhythm(24),
                                padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                                transition: 'transform 500ms linear',
                                transform: this.state.visible
                                    ? 'translate(-35%, 0)'
                                    : 'translate(0, 0)'
                            }}
                        >
                            {children()}
                        </Container>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        );
    }
}

export default Template;
