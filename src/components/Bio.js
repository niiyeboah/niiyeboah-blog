import React from 'react';

import { rhythm } from '../utils/typography';
import Avatar from '../assets/images/bojo.square.jpg';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex'
        }}
      >
        <img
          src={Avatar}
          className="cirle-image"
          style={{
            marginRight: rhythm(0.6),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            flexShrink: 0
          }}
        />
        <p>
          Written by <strong>Nii Yeboah</strong> who currently lives in Turku,
          Finland working at <a href="https://vaadin.com/">Vaadin</a> as a
          Front-End Developer.{' '}
          <a href="mailto:contact@niiyeboah.com">contact@niiyeboah.com</a>
        </p>
      </div>
    );
  }
}

export default Bio;
