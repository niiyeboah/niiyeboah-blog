import React from 'react';
import { Sidebar, Icon, Dimmer, Responsive } from 'semantic-ui-react';
import 'semantic-ui-css/components/sidebar.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/dimmer.min.css';

import { rhythm } from '../utils/typography';
import Header from '../components/Header';
import SideBarContent from '../components/SideBarContent';
import SamaiBackground from '../components/SamaiBackground';
import LazyLoadBanner from '../components/LazyLoadBanner';
import '../assets/css/index.css';

const contentPadding = 42;
const bannerHeight = 420;

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.screenWidthUpdate = this.screenWidthUpdate.bind(this);
        // SETTERS
        this.setContentHeight = this.setContentHeight.bind(this);
        this.setPusherHeight = this.setPusherHeight.bind(this);
        this.setHeaderHeight = this.setHeaderHeight.bind(this);
        this.setBanner = this.setBanner.bind(this);
        // GETTERS
        this.getVisible = this.getVisible.bind(this);
        this.getHeaderHeight = this.getHeaderHeight.bind(this);
    }
    toggleVisibility() {
        const {
            menuVisible,
            pusherHeight,
            headerHeight,
            contentHeight
        } = this.state;
        this.setState({ menuVisible: !menuVisible });
        this.setPusherHeight(headerHeight, !menuVisible, contentHeight);
    }
    setHeaderHeight(h) {
        this.setState({ headerHeight: h });
    }
    setContentHeight(h, b) {
        this.setState({ contentHeight: this.calculateHeight(h, b) });
    }
    setBanner(data) {
        this.setState({ banner: data });
    }
    setPusherHeight(headerHeight, menuVisible, contentHeight) {
        if (typeof document !== 'undefined') {
            const windowHeight = document.documentElement.clientHeight;
            let pusherHeight = 'auto';
            if (menuVisible || contentHeight <= windowHeight) {
                pusherHeight = windowHeight - headerHeight + 'px';
            }
            this.setState({ pusherHeight: pusherHeight });
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
    screenWidthUpdate(e, { width }) {
        const { headerHeight, menuVisible, contentHeight } = this.state;
        this.setPusherHeight(headerHeight, menuVisible, contentHeight);
        this.setState({ sideBarWidth: this.getSideBarWidth(width) });
    }
    calculateHeight(h, b) {
        const bh = b ? bannerHeight : 0;
        console.log({ b, bannerHeight, bh });
        return h + 2 * contentPadding + bh;
    }
    componentDidMount() {
        const menuVisible = false;
        const contentHeight = this.contentArea.clientHeight - contentPadding;
        const windowWidth = document.documentElement.clientWidth;
        const headerHeight = document.querySelector('#header').clientHeight;
        this.state = {
            menuVisible: menuVisible,
            sideBarWidth: this.getSideBarWidth(windowWidth),
            year: new Date().getFullYear()
        };
        this.setContentHeight(contentHeight, true);
        this.setPusherHeight(
            headerHeight,
            menuVisible,
            this.calculateHeight(contentHeight, true)
        );
        console.log(
            'CH: ' + this.calculateHeight(contentHeight, false),
            contentHeight
        );
    }
    componentDidUpdate() {
        //const contentHeight = this.contentArea.clientHeight - contentPadding;
        //this.setContentHeight(contentHeight);
        console.log(this.state.contentHeight);
    }
    render() {
        const { children } = this.props;
        const {
            menuVisible,
            sideBarWidth,
            pusherHeight,
            headerHeight,
            banner,
            year
        } = this.state;
        return (
            <Responsive
                as={'div'}
                onUpdate={this.screenWidthUpdate.bind(this)}
                style={{ maxWidth: 'auto' }}
            >
                <Header
                    getVisible={this.getVisible}
                    setHeaderHeight={this.setHeaderHeight}
                    toggleVisibility={this.toggleVisibility}
                />
                <Sidebar.Pushable as={'div'} style={{ maxWidth: 'auto' }}>
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
                                <LazyLoadBanner
                                    data={banner}
                                    height={bannerHeight}
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
                                        setBanner: this.setBanner,
                                        setContentHeight: this.setContentHeight
                                    })}
                                </section>
                                <footer>
                                    <div className="copyright" title="▪◾◼⬛">
                                        <i data-icon="n" className="icon" />
                                        <span>{` © ${year}`}</span>
                                    </div>
                                </footer>
                            </Dimmer.Dimmable>
                        </main>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        );
    }
}

export default Template;
