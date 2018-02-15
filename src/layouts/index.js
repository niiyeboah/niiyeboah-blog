import React from 'react';
import { Sidebar, Icon, Dimmer, Responsive } from 'semantic-ui-react';
import 'semantic-ui-css/components/sidebar.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/dimmer.min.css';

import { rhythm } from '../utils/typography';
import Header from '../components/Header';
import SideBarContent from '../components/SideBarContent';

let rootPath = `/`;
if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`;
}

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.setPusherHeight = this.setPusherHeight.bind(this);
        this.state = {};
    }
    toggleVisibility() {
        const { menuVisible, pusherHeight, headerHeight } = this.state;
        this.setState({
            menuVisible: !menuVisible
        });
        this.setPusherHeight(headerHeight, !menuVisible);
        console.log('PH:', pusherHeight);
    }
    setHeaderHeight(h) {
        this.setState({ headerHeight: h });
    }
    setPusherHeight(headerHeight, menuVisible) {
        if (typeof document !== 'undefined') {
            let pusherHeight = 'auto';
            let windowHeight = document.documentElement.clientHeight;
            if (menuVisible) {
                console.log('PH_args:', windowHeight, menuVisible);
                pusherHeight = windowHeight - headerHeight + 'px';
            }
            this.setState({
                pusherHeight: pusherHeight
            });
            console.log('PH_result:', pusherHeight);
        }
    }
    getVisible() {
        return this.state.menuVisible;
    }
    getSideBarWidth(w) {
        if (w <= 480) return 'wide';
        else return 'very wide';
    }
    handleOnUpdate(e, { width }) {
        this.setPusherHeight(this.state.headerHeight, this.state.menuVisible);
        this.setState({
            sideBarWidth: this.getSideBarWidth(width),
            width: width
        });
    }
    componentDidMount() {
        let menuVisible = window.location.pathname === rootPath;
        this.state = {
            menuVisible: menuVisible,
            sideBarWidth: this.getSideBarWidth(
                document.documentElement.clientWidth
            )
        };
    }
    render() {
        const { children } = this.props;
        const { menuVisible, sideBarWidth, pusherHeight } = this.state;
        console.log(this.state);
        let sideBarPusher = (
            <Sidebar.Pusher>
                <Dimmer.Dimmable as={'div'} blurring dimmed={menuVisible}>
                    <Dimmer
                        active={menuVisible}
                        onClick={this.toggleVisibility}
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                    <div
                        style={{
                            margin: '0 auto',
                            maxWidth: rhythm(24),
                            padding: `${rhythm(1)} ${rhythm(3 / 4)}`
                        }}
                    >
                        {children()}
                    </div>
                </Dimmer.Dimmable>
            </Sidebar.Pusher>
        );
        return (
            <Responsive
                as={'div'}
                onUpdate={this.handleOnUpdate.bind(this)}
                style={{
                    maxWidth: 'auto'
                }}
            >
                <Header
                    setPusherHeight={this.setPusherHeight}
                    setHeaderHeight={this.setHeaderHeight.bind(this)}
                    getVisible={this.getVisible.bind(this)}
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
                            borderRight: '10px solid #222',
                            boxShadow: '10px 0 20px rgba(34, 36, 38, .15)',
                            backgroundColor: '#333',
                            overflow: 'hidden'
                        }}
                    >
                        <SideBarContent />
                    </Sidebar>
                    <Sidebar.Pusher
                        style={{
                            height: pusherHeight
                        }}
                    >
                        <Dimmer.Dimmable
                            as={'div'}
                            blurring
                            dimmed={menuVisible}
                        >
                            <Dimmer
                                active={menuVisible}
                                onClick={this.toggleVisibility}
                                style={{
                                    cursor: 'pointer'
                                }}
                            />
                            <div
                                style={{
                                    margin: '0 auto',
                                    maxWidth: rhythm(24),
                                    padding: `${rhythm(1)} ${rhythm(3 / 4)}`
                                }}
                            >
                                {children()}
                            </div>
                        </Dimmer.Dimmable>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        );
    }
}

export default Template;
