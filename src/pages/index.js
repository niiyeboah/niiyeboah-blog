import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import Bojo from './bojo.large.jpg';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
    componentDidMount() {
        const {
            setPusherHeight,
            setContentHeight,
            setTopParallax,
            location
        } = this.props;
        const contentHeight = ReactDOM.findDOMNode(this).clientHeight;
        setContentHeight(contentHeight);
        setTopParallax(Bojo);
        setPusherHeight(
            document.querySelector('#header').clientHeight,
            location.pathname === '/',
            contentHeight
        );
    }
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const posts = get(this, 'props.data.allMarkdownRemark.edges');
        return (
            <div style={this.props.transition && this.props.transition.style}>
                <Helmet title={siteTitle} />
                <Bio />
                {posts.map(({ node }) => {
                    const title =
                        get(node, 'frontmatter.title') || node.fields.slug;
                    return (
                        <div key={node.fields.slug}>
                            <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                                <Link
                                    style={{ boxShadow: 'none' }}
                                    to={node.fields.slug}
                                >
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: node.excerpt
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "DD MMMM, YYYY")
                        title
                    }
                }
            }
        }
    }
`;
