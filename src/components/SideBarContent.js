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
        return (
            <Grid
                style={{
                    padding: `${rhythm(1.5)} 20px`,
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
                        />
                        <div
                            style={{
                                textAlign: 'center',
                                color: 'white'
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
                                        onClick={this.toggleVisibility}
                                    >
                                        Home
                                    </Link>
                                </List.Content>
                            </List.Item>
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
                                        About
                                    </a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
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
                                        LinkedIn
                                    </a>
                                </List.Content>
                            </List.Item>
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
                                        GitHub
                                    </a>
                                </List.Content>
                            </List.Item>
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
                                        Stack Overflow
                                    </a>
                                </List.Content>
                            </List.Item>
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
                                        Email
                                    </a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default SideBarContent;
