import React from 'react';
import Link from 'gatsby-link';

import { scale } from '../utils/typography';
import Avatar from '../assets/images/bojo.square.jpg';

class SideBarContent extends React.Component {
    render() {
        const { onClick } = this.props;
        const liStyle = { ...scale(1) };
        const iconStyle = { ...scale(0.5) };
        const navLinkData = [
            {
                path: '/',
                text: 'Home',
                icon: 'fas fa-home'
            },
            {
                path: '/about/',
                text: 'About',
                icon: 'fas fa-info-circle'
            }
        ];
        const navListItems = navLinkData.map((data, i) => (
            <li key={i} style={liStyle}>
                <span style={iconStyle}>
                    <i className={data.icon} />
                </span>
                <span>
                    <Link to={data.path} className="link" onClick={onClick}>
                        {data.text}
                    </Link>
                </span>
            </li>
        ));
        const contactLinkData = [
            {
                url: 'https://www.linkedin.com/in/niiyeboah/',
                text: 'LinkedIn',
                icon: 'fab fa-linkedin'
            },
            {
                url: 'https://github.com/niiyeboah/',
                text: 'GitHub',
                icon: 'fab fa-github'
            },
            {
                url: 'https://stackoverflow.com/users/story/3542713',
                text: 'Stack Overflow',
                icon: 'fab fa-stack-overflow'
            },
            {
                url: 'mailto:contact@niiyeboah.com',
                text: 'Email',
                icon: 'fas fa-at'
            }
        ];
        const contactListItems = contactLinkData.map((data, i) => (
            <li key={i} style={liStyle}>
                <span style={iconStyle}>
                    <i className={data.icon} />
                </span>
                <span>
                    <a href={data.url} className="link">
                        {data.text}
                    </a>
                </span>
            </li>
        ));
        return (
            <div>
                <ul>{navListItems}</ul>
                <ul>{contactListItems}</ul>
            </div>
        );
    }
}

export default SideBarContent;
