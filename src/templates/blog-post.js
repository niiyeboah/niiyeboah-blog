import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Bio from '../components/Bio';
import { rhythm, scale } from '../utils/typography';
import ReactDisqusThread from 'react-disqus-thread';
import ReactDisqusCounter from 'react-disqus-counter';

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    this.props.setBanner(null);
  }

  render() {
    const location = this.props.location.pathname;
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl');
    const { previous, next } = this.props.pathContext;
    return (
      <div
        id="blog-post-container"
        style={this.props.transition && this.props.transition.style}
      >
        <Helmet>
          <title>{`${post.frontmatter.title} | ${siteTitle}`}</title>
          <meta
            property="og:title"
            content={`${post.frontmatter.title} | ${siteTitle}`}
          />
          <meta property="og:description" content={post.excerpt} />
          <link rel="canonical" href={siteUrl + location} />
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-0.5)
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
        <ReactDisqusCounter url={siteUrl + location} shortname="niiyeboah" />
        <ReactDisqusThread
          shortname="niiyeboah"
          identifier={location}
          title={post.frontmatter.title}
          url={siteUrl + location}
        />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MM-DD-YYYY")
      }
    }
  }
`;
