import React from 'react';
import Link from 'gatsby-link';
import { Icon, Grid, Image, List } from 'semantic-ui-react';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/grid.min.css';
import 'semantic-ui-css/components/image.min.css';
import 'semantic-ui-css/components/list.min.css';

import { rhythm, scale } from '../utils/typography';
import Avatar from '../assets/images/bojo.square.jpg';

class SideBarContent extends React.Component {
    render() {
        const { toggleVisibility } = this.props;
        const listItemStyle = { marginBottom: rhythm(0.5) };
        const navLinkData = [
            {
                path: '/',
                text: 'Home',
                icon: 'home',
                onClick: toggleVisibility
            },
            {
                path: '/',
                text: 'About',
                icon: 'info circle'
            }
        ];
        const navListItems = navLinkData.map((data, i) => (
            <List.Item style={listItemStyle} key={i}>
                <List.Icon name={data.icon} className="icon" />
                <List.Content>
                    <Link
                        to={data.path}
                        className="link"
                        onClick={data.onClick}
                    >
                        {data.text}
                    </Link>
                </List.Content>
            </List.Item>
        ));
        const contactLinkData = [
            {
                url: 'https://www.linkedin.com/in/niiyeboah/',
                text: 'LinkedIn',
                icon: 'linkedin'
            },
            {
                url: 'https://github.com/niiyeboah/',
                text: 'GitHub',
                icon: 'github'
            },
            {
                url: 'https://stackoverflow.com/users/story/3542713',
                text: 'Stack Overflow',
                icon: 'stack overflow'
            },
            {
                url: 'mailto:contact@niiyeboah.com',
                text: 'Email',
                icon: 'mail',
                styles: {
                    marginLeft: '-2px'
                }
            }
        ];
        const contactListItems = contactLinkData.map((data, i) => (
            <List.Item style={{ ...listItemStyle, ...data.styles }} key={i}>
                <List.Icon name={data.icon} className="icon" />
                <List.Content>
                    <a href={data.url} className="link">
                        {data.text}
                    </a>
                </List.Content>
            </List.Item>
        ));
        return (
            <Grid
                className="sidebar-content"
                style={{
                    padding: `${rhythm(1.5)} 20px`,
                    ...scale(-0.2)
                }}
            >
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image
                            src={Avatar}
                            size="small"
                            circular
                            style={{ margin: `0 auto ${rhythm(1)}` }}
                        />
                        <div
                            className="summary"
                            style={{
                                padding: `${rhythm(0.25)} 0`,
                                ...scale(-0.15)
                            }}
                        >
                            Software Developer
                            <span className="doubleSlash">{' // '}</span>
                            Technology Enthusiast
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row
                    style={{
                        padding: `0 ${rhythm(1)}`
                    }}
                >
                    <Grid.Column width={8}>
                        <List
                            style={{
                                paddingLeft: rhythm(1.5)
                            }}
                        >
                            {navListItems}
                        </List>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <List>{contactListItems}</List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default SideBarContent;
