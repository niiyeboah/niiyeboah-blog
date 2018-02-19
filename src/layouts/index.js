import React from 'react';
import { Sidebar, Icon, Dimmer, Responsive } from 'semantic-ui-react';
import 'semantic-ui-css/components/sidebar.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/dimmer.min.css';

import { rhythm } from '../utils/typography';
import Header from '../components/Header';
import SideBarContent from '../components/SideBarContent';
import SamaiBackground from '../components/SamaiBackground';
import ParallaxBanner from '../components/ParallaxBanner';
import './index.css';

const contentPadding = 42;
const parallaxHeight = 420;
let rootPath = `/`;
if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`;
}

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.setPusherHeight = this.setPusherHeight.bind(this);
        this.setContentHeight = this.setContentHeight.bind(this);
        this.setHeaderHeight = this.setHeaderHeight.bind(this);
        this.setTopParallax = this.setTopParallax.bind(this);
        this.getHeaderHeight = this.getHeaderHeight.bind(this);
        this.getVisible = this.getVisible.bind(this);
        this.state = {};
    }
    toggleVisibility() {
        const {
            menuVisible,
            pusherHeight,
            headerHeight,
            contentHeight
        } = this.state;
        this.setState({
            menuVisible: !menuVisible
        });
        this.setPusherHeight(headerHeight, !menuVisible, contentHeight);
    }
    setHeaderHeight(h) {
        this.setState({ headerHeight: h });
    }
    setContentHeight(h) {
        this.setState({ contentHeight: this.calculateHeight(h) });
    }
    setTopParallax(bg) {
        this.setState({ topParallax: bg });
    }
    setPusherHeight(headerHeight, menuVisible, contentHeight) {
        if (typeof document !== 'undefined') {
            const windowHeight = document.documentElement.clientHeight;
            let pusherHeight = 'auto';
            if (menuVisible || contentHeight <= windowHeight) {
                pusherHeight = windowHeight - headerHeight + 'px';
            }
            this.setState({
                pusherHeight: pusherHeight
            });
        }
    }
    getHeaderHeight() {
        return this.state.headerHeight;
    }
    getVisible() {
        return this.state.menuVisible;
    }
    getSideBarWidth(w) {
        if (w <= 480) return 'wide';
        else return 'very wide';
    }
    handleOnUpdate(e, { width }) {
        const { headerHeight, menuVisible, contentHeight } = this.state;
        this.setPusherHeight(headerHeight, menuVisible, contentHeight);
        this.setState({
            sideBarWidth: this.getSideBarWidth(width)
        });
    }
    calculateHeight(h) {
        return h + 2 * contentPadding + parallaxHeight;
    }
    componentDidMount() {
        //const menuVisible = window.location.pathname === rootPath;
        const menuVisible = false;
        const contentHeight = this.contentArea.clientHeight;

        this.state = {
            menuVisible: menuVisible,
            sideBarWidth: this.getSideBarWidth(
                document.documentElement.clientWidth
            )
        };
        this.setContentHeight(contentHeight);
        this.setPusherHeight(
            document.querySelector('#header').clientHeight,
            menuVisible,
            this.calculateHeight(contentHeight)
        );
    }
    render() {
        const { children } = this.props;
        const {
            menuVisible,
            sideBarWidth,
            pusherHeight,
            headerHeight,
            topParallax
        } = this.state;
        return (
            <Responsive
                as={'div'}
                onUpdate={this.handleOnUpdate.bind(this)}
                style={{
                    maxWidth: 'auto'
                }}
            >
                <Header
                    getVisible={this.getVisible}
                    contentHeight={this.contentHeight}
                    setPusherHeight={this.setPusherHeight}
                    setHeaderHeight={this.setHeaderHeight}
                    toggleVisibility={this.toggleVisibility}
                />
                <Sidebar.Pushable
                    as={'div'}
                    style={{
                        maxWidth: 'auto'
                    }}
                >
                    <Sidebar
                        as={'div'}
                        width={sideBarWidth}
                        animation="push"
                        visible={menuVisible}
                        style={{
                            borderRight: '10px solid #111',
                            boxShadow: '10px 0 20px rgba(34, 36, 38, .15)',
                            overflow: 'hidden',
                            background: '#333'
                        }}
                    >
                        <SamaiBackground>
                            <SideBarContent
                                toggleVisibility={this.toggleVisibility}
                            />
                        </SamaiBackground>
                    </Sidebar>
                    <Sidebar.Pusher
                        style={{
                            height: pusherHeight
                        }}
                    >
                        <main
                            ref={main => {
                                this.contentArea = main;
                            }}
                        >
                            <Dimmer.Dimmable
                                as={'div'}
                                blurring
                                dimmed={menuVisible}
                                style={{
                                    height: pusherHeight
                                }}
                            >
                                <Dimmer
                                    active={menuVisible}
                                    onClick={this.toggleVisibility}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                />
                                <ParallaxBanner
                                    data={topParallax}
                                    height={parallaxHeight}
                                />
                                <section
                                    style={{
                                        margin: '0 auto',
                                        maxWidth: rhythm(24),
                                        padding:
                                            `${contentPadding}px ` +
                                            `${rhythm(3 / 4)}`
                                    }}
                                >
                                    {children({
                                        ...this.props,
                                        layout: false,
                                        setPusherHeight: this.setPusherHeight,
                                        setContentHeight: this.setContentHeight,
                                        setTopParallax: this.setTopParallax
                                    })}
                                </section>
                            </Dimmer.Dimmable>
                        </main>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        );
    }
}

export default Template;
