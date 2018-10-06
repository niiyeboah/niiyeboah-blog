import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import { rhythm } from '../utils/typography';
import Avatar from '../assets/images/me.jpg';

class About extends React.Component {
  componentDidMount() {
    this.props.setBanner(null);
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl');
    const location = this.props.location.pathname;
    return (
      <div style={this.props.transition && this.props.transition.style}>
        <Helmet>
          <title>{`About | ${siteTitle}`}</title>
          <link rel="canonical" href={siteUrl + location} />
        </Helmet>
        <img
          src={Avatar}
          className="cirle-image"
          style={{
            margin: `${rhythm(0.5)} auto ${rhythm(2)}`,
            border: '2px solid #396',
            padding: '5px'
          }}
        />
        <h5>Hi, I'm Nii Yeboah.</h5>
        <p>
          I'm a Front-End Developer at <a href="https://vaadin.com">Vaadin</a>,
          located in Turku, Finland. I also have previous experience working as
          a full stack engineer. If you would like to discuss a project 
          feel free to send me an email:
          <br />
        </p>
        <p>
          <a href="mailto:contact@niiyeboah.com">contact@niiyeboah.com</a>.
        </p>
        <hr />
        <p>
          Besides programming and technology, my other interests are{' '}
          <a href="https://goo.gl/2f5LE3">music production</a>, video games
          (especially competitive gaming and eSports), and{' '}
          <a href="https://goo.gl/WRr2bJ">generative art</a>.
        </p>
      </div>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;
