import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import Bojo from '../assets/images/bojo.large.jpg';
import BojoPH from '../assets/images/bojo.large.ph.jpg';
import { rhythm } from '../utils/typography';
import Quotes from '../utils/quotes/developerGoals';

class BlogIndex extends React.Component {
  componentDidMount() {
    this.props.setBanner({
      image: Bojo,
      ph: BojoPH,
      text: Quotes[Math.floor(Math.random() * Quotes.length)],
      quotee: 'Developer Goals'
    });
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    console.log(this.props.transition);
    return (
      <div style={this.props.transition && this.props.transition.style}>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
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
            date(formatString: "MM-DD-YYYY")
            title
          }
        }
      }
    }
  }
`;
