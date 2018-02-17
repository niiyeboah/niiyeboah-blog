import React from 'react';
import Link from 'gatsby-link';
import { Icon, Grid, Image, List } from 'semantic-ui-react';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/grid.min.css';
import 'semantic-ui-css/components/image.min.css';
import 'semantic-ui-css/components/list.min.css';

import Avatar from './bojo.large.jpg';
import { rhythm, scale } from '../utils/typography';

class SideBarContent extends React.Component {
    render() {
        const { toggleVisibility } = this.props;
        const iconStyles = { color: '#396' };
        const listItemStyle = { marginBottom: rhythm(0.5) };
        const linkStyle = {
            textShadow: 'none',
            color: '#FFF'
        };
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
                <List.Icon name={data.icon} style={iconStyles} />
                <List.Content>
                    <Link
                        to={data.path}
                        style={linkStyle}
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
                <List.Icon name={data.icon} style={iconStyles} />
                <List.Content>
                    <a href={data.url} style={linkStyle}>
                        {data.text}
                    </a>
                </List.Content>
            </List.Item>
        ));
        return (
            <Grid
                style={{
                    padding: `${rhythm(1.5)} 20px`,
                    color: '#FFF',
                    ...scale(-0.2)
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
                        />
                        <div
                            style={{
                                textAlign: 'center',
                                color: '#FFF',
                                padding: `${rhythm(0.25)} 0`,
                                border: 'solid #042',
                                borderWidth: '1px 0',
                                marginBottom: '5px',
                                ...scale(-0.15)
                            }}
                        >
                            Software Developer
                            <span
                                style={{
                                    color: '#396',
                                    fontWeight: 'bold'
                                }}
                            >
                                {' // '}
                            </span>
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
