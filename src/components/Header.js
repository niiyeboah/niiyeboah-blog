import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/components/icon.min.css';
import 'typeface-fira-sans';

import { rhythm } from '../utils/typography';

class NiiYeboahDotCom extends React.Component {
    render() {
        return (
            <span className="header-title">
                <span>{'<'}</span>
                {'niiyeboah'}
                <span>{'.'}</span>
                {'com'}
                <span>{'>'}</span>
            </span>
        );
    }
}

class Header extends React.Component {
    state = {};
    render() {
        const { setHeaderHeight } = this.props;
        return (
            <section className="header-container">
                <div
                    className="header"
                    style={{
                        maxWidth: rhythm(24),
                        padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`
                    }}
                >
                    <h3>
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
                <div
                    id="logo"
                    style={{
                        margin: `${rhythm(0.6)} ${rhythm(3 / 4)} 0 0`
                    }}
                />
            </section>
        );
    }
}

export default Header;
