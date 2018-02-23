import React from 'react';

import { rhythm, scale } from '../utils/typography';

class LazyLoadBanner extends React.Component {
    state = {};
    componentDidMount() {
        this.state = { loaded: false, imageClass: 'loading' };
    }
    componentDidUpdate() {
        if (this.props.data && !this.state.loaded) {
            const { image, ph } = this.props.data;
            try {
                let largeImage = new Image();
                largeImage.src = image;
                largeImage.onerror = () => {
                    throw new Error('failed to load image');
                };
                largeImage.onload = () => {
                    this.setState({
                        imageClass: 'success',
                        image: largeImage.src,
                        loaded: true
                    });
                };
            } catch (e) {
                console.log(e);
            }
        }
    }
    render() {
        const { imageClass, image } = this.state;
        const { data, height = 420 } = this.props;
        let lazyLoadBanner = null;
        if (data && data.text) {
            lazyLoadBanner = (
                <section
                    className="banner-container"
                    style={{
                        height: `${height}px`
                    }}
                >
                    <div
                        className={`${imageClass} banner-image placeholder`}
                        style={{
                            backgroundImage: `url('${data.ph}')`
                        }}
                    />
                    <div
                        className={`${imageClass} banner-image`}
                        style={{
                            backgroundImage: `url('${image}')`
                        }}
                    />
                    <div className={`banner-image gradient`} />
                    <div
                        className="banner"
                        style={{
                            maxWidth: rhythm(24),
                            padding: `0 ${rhythm(3 / 4)}`
                        }}
                    >
                        <blockquote className="quote" style={{ ...scale(0.3) }}>
                            {data.text}
                        </blockquote>
                        <p
                            className="quotee"
                            style={{ marginRight: rhythm(1) }}
                        >
                            {`- ${data.quotee}`}
                        </p>
                    </div>
                </section>
            );
        }
        return lazyLoadBanner;
    }
}

export default LazyLoadBanner;
