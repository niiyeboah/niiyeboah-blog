import React from 'react';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/components/image.min.css';

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
                <Image
                    src={Avatar}
                    size="tiny"
                    circular
                    style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        width: rhythm(2),
                        height: rhythm(2),
                        flexShrink: 0
                    }}
                />
                <p>
                    Written by <strong>Nii Yeboah</strong> who currently lives
                    in Accra working as a freelance web developer.{' '}
                    <a href="mailto:contact@niiyeboah.com">
                        contact@niiyeboah.com
                    </a>
                </p>
            </div>
        );
    }
}

export default Bio;
