import React from 'react';

import { rhythm } from '../utils/typography';
import Avatar from './rehab.square.jpg';

class Bio extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    marginBottom: rhythm(2.5)
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
                    in Accra working as a freelance web developer.{' => '}
                    <a href="mailto:contact@niiyeboah.com">
                        contact@niiyeboah.com
                    </a>
                </p>
            </div>
        );
    }
}

export default ImageBlurUp;
