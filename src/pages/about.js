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
          I'm a software developer and freelancer located in Accra, Ghana. I
          mainly focus on front end development but I also have experience
          working as a full stack engineer. If you would like to discuss a
          project or job opening feel free to send me an email.<br />
        </p>
        <p>
          <a href="mailto:contact@niiyeboah.com">contact@niiyeboah.com</a>.
        </p>
        <hr />
        <p>
          Besides programming and technology, my other interests are{' '}
          <a href="https://goo.gl/2f5LE3">music production</a> and video games
          (especially competitive gaming and eSports). I have a few other random
          hobbies like recycling paper by using it for origami and practicing
          dance moves when nobody is watching. One of my long term goals is to
          own a self sustainable off-the-grid smart home.
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
