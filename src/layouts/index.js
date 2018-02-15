import React from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import HamburgerMenu from 'react-hamburger-menu';
import {
    Sidebar,
    Icon,
    Container,
    Dimmer,
    Grid,
    Image,
    List,
    Responsive
} from 'semantic-ui-react';
import 'semantic-ui-css/components/sidebar.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/container.min.css';
import 'semantic-ui-css/components/dimmer.min.css';
import 'semantic-ui-css/components/grid.min.css';
import 'semantic-ui-css/components/image.min.css';
import 'semantic-ui-css/components/list.min.css';
import 'typeface-fira-sans';

import Avatar from './bojo.large.jpg';
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
            <span style={{ fontFamily: 'fira-sans, monospace' }}>
                <span style={boldGreen}> {'<'}</span>
                niiyeboah
                <span style={boldGreen}>.</span>
                com
                <span style={boldGreen}>{'>'}</span>
            </span>
        );
    }
}

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    toggleVisibility = d => {
        let isVisible = !this.state.visible;
        if (isVisible) d.documentElement.style.overflow = 'hidden';
        else d.documentElement.style.overflow = 'auto';
        this.setState({
            visible: isVisible
        });
    };
    getSBW = w => {
        if (w <= 960) return 'wide';
        else return 'very wide';
    };
    handleOnUpdate = (e, { width }) => {
        this.setState({
            sideBarWidth: this.getSBW(width)
        });
    };
    componentDidMount() {
        this.setState({
            visible: window.location.pathname === rootPath
        });
        document.documentElement.style.overflow = this.state.visible
            ? 'hidden'
            : 'auto';
    }
    render() {
        const noUnderline = {
            backgroundImage: 'none',
            textShadow: 'none'
        };
        const { location, children } = this.props;
        const { visible } = this.state;
        let header = (
            <Headroom
                style={{
                    backgroundColor: '#222',
                    boxShadow: '1px 1px 1px rgba(0,0,0,0.25)'
                }}
            >
                <div
                    style={{
                        display: 'inline-block',
                        padding: `${rhythm(2 / 3)} 0 0 ${rhythm(3 / 4)}`,
                        position: 'absolute',
                        cursor: 'pointer'
                    }}
                >
                    <HamburgerMenu
                        isOpen={this.state.visible}
                        menuClicked={this.toggleVisibility(document).bind(this)}
                        width={20}
                        height={20}
                        strokeWidth={3}
                        rotate={0}
                        color="white"
                        animationDuration={0.5}
                    />{' '}
                </div>{' '}
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
                        <Link
                            style={{
                                boxShadow: 'none',
                                textDecoration: 'none',
                                color: 'inherit',
                                ...noUnderline
                            }}
                            to={'/'}
                        >
                            <NiiYeboahDotCom />
                        </Link>{' '}
                    </h3>{' '}
                </Container>{' '}
            </Headroom>
        );
        return (
            <Responsive
                as={'div'}
                onUpdate={this.handleOnUpdate}
                style={{
                    maxWidth: 'auto'
                }}
            >
                {header}{' '}
                <Sidebar.Pushable
                    as={'div'}
                    style={{
                        maxWidth: 'auto'
                    }}
                    fluid={true}
                >
                    <Sidebar
                        as={'div'}
                        width={this.state.sideBarWidth}
                        animation="push"
                        visible={visible}
                        style={{
                            borderRight: '10px solid #222',
                            boxShadow: '10px 0 20px rgba(34, 36, 38, .15)',
                            backgroundColor: '#333'
                        }}
                    >
                        <Grid
                            style={{
                                padding: `${rhythm(1.5)} 0`,
                                color: '#FFF',
                                ...scale(-0.4)
                            }}
                        >
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image
                                        src={Avatar}
                                        size="small"
                                        circular
                                        style={{
                                            margin: `0 auto ${rhythm(1)}`,
                                            padding: '5px',
                                            border: '2px solid #396'
                                        }}
                                    />{' '}
                                    <div
                                        style={{
                                            textAlign: 'center',
                                            color: 'white'
                                        }}
                                    >
                                        Software Developer{' '}
                                        <span
                                            style={{
                                                color: '#396',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            & nbsp; //&nbsp;
                                        </span>
                                        Technology Enthusiast{' '}
                                    </div>{' '}
                                </Grid.Column>{' '}
                            </Grid.Row>{' '}
                            <Grid.Row
                                style={{
                                    padding: `0 ${rhythm(1)}`
                                }}
                            >
                                <Grid.Column width={8}>
                                    <List
                                        style={{
                                            paddingLeft: rhythm(2.5)
                                        }}
                                    >
                                        <List.Item>
                                            <List.Icon name="home" />
                                            <List.Content>
                                                <Link
                                                    to={'/'}
                                                    style={{
                                                        textShadow: 'none',
                                                        color: '#FFF'
                                                    }}
                                                    onClick={
                                                        this.toggleVisibility
                                                    }
                                                >
                                                    Home{' '}
                                                </Link>{' '}
                                            </List.Content>{' '}
                                        </List.Item>{' '}
                                        <List.Item>
                                            <List.Icon name="info circle" />
                                            <List.Content>
                                                <a
                                                    href="https://github.com/niiyeboah/"
                                                    style={{
                                                        textShadow: 'none',
                                                        color: '#FFF'
                                                    }}
                                                >
                                                    About{' '}
                                                </a>{' '}
                                            </List.Content>{' '}
                                        </List.Item>{' '}
                                    </List>{' '}
                                </Grid.Column>{' '}
                                <Grid.Column width={8}>
                                    <List>
                                        <List.Item>
                                            <List.Icon name="linkedin" />
                                            <List.Content>
                                                <a
                                                    href="https://www.linkedin.com/in/niiyeboah/"
                                                    style={{
                                                        textShadow: 'none',
                                                        color: '#FFF'
                                                    }}
                                                >
                                                    LinkedIn{' '}
                                                </a>{' '}
                                            </List.Content>{' '}
                                        </List.Item>{' '}
                                        <List.Item>
                                            <List.Icon name="github" />
                                            <List.Content>
                                                <a
                                                    href="https://github.com/niiyeboah/"
                                                    style={{
                                                        textShadow: 'none',
                                                        color: '#FFF'
                                                    }}
                                                >
                                                    GitHub{' '}
                                                </a>{' '}
                                            </List.Content>{' '}
                                        </List.Item>{' '}
                                        <List.Item>
                                            <List.Icon name="stack overflow" />
                                            <List.Content>
                                                <a
                                                    href="https://www.linkedin.com/in/niiyeboah/"
                                                    style={{
                                                        textShadow: 'none',
                                                        color: '#FFF'
                                                    }}
                                                >
                                                    Stack Overflow{' '}
                                                </a>{' '}
                                            </List.Content>{' '}
                                        </List.Item>{' '}
                                        <List.Item
                                            style={{
                                                marginLeft: '-2px'
                                            }}
                                        >
                                            <List.Icon name="mail" />
                                            <List.Content>
                                                <a
                                                    href="mailto:contact@niiyeboah.com"
                                                    style={{
                                                        textShadow: 'none',
                                                        color: '#FFF'
                                                    }}
                                                >
                                                    Email{' '}
                                                </a>{' '}
                                            </List.Content>{' '}
                                        </List.Item>{' '}
                                    </List>{' '}
                                </Grid.Column>{' '}
                            </Grid.Row>{' '}
                        </Grid>{' '}
                    </Sidebar>{' '}
                    <Sidebar.Pusher>
                        <Dimmer.Dimmable as={'div'} blurring dimmed={visible}>
                            <Dimmer
                                active={visible}
                                onClick={this.toggleVisibility}
                                style={{
                                    cursor: 'pointer'
                                }}
                            />{' '}
                            <div
                                style={{
                                    margin: '0 auto',
                                    maxWidth: rhythm(24),
                                    padding: `${rhythm(1)} ${rhythm(3 / 4)}`
                                }}
                            >
                                {children()}{' '}
                            </div>{' '}
                        </Dimmer.Dimmable>{' '}
                    </Sidebar.Pusher>{' '}
                </Sidebar.Pushable>{' '}
            </Responsive>
        );
    }
}

export default Template;
