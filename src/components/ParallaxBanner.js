import React from 'react';
import { Parallax, Background } from 'react-parallax';

import { rhythm, scale } from '../utils/typography';

class ParallaxBanner extends React.Component {
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
                        imageClass: 'loading success',
                        image: largeImage.src,
                        loaded: true
                    });
                    window.setTimeout(() => {
                        this.setState({
                            imageClass: 'loading complete'
                        });
                    }, 100);
                };
            } catch (e) {
                console.log(e);
            }
        }
    }
    render() {
        let { imageClass, image } = this.state;
        const { data, height = 420 } = this.props;
        let parallaxBanner = null;
        if (data) {
            parallaxBanner = (
                <div>
                    <Parallax
                        bgImageAlt="Parallax Banner"
                        strength={height}
                        bgImage={image || data.ph}
                        bgClassName={'custom-image ' + imageClass}
                        style={{ height }}
                    >
                        <section
                            style={{
                                height: `${height}px`,
                                background:
                                    'radial-gradient(farthest-corner at 0 0, transparent 0%, #111 100%)'
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%,-50%)',
                                    width: '100%',
                                    maxWidth: rhythm(24),
                                    padding: `0 ${rhythm(3 / 4)}`
                                }}
                            >
                                <blockquote
                                    style={{
                                        ...scale(0.3),
                                        margin: 0,
                                        color: '#FFF'
                                    }}
                                >
                                    {data.text}
                                </blockquote>
                                <p
                                    style={{
                                        color: '#396',
                                        textAlign: 'right',
                                        //fontStyle: 'italic',
                                        marginRight: rhythm(1)
                                    }}
                                >
                                    {'- ' + data.quotee}
                                </p>
                            </div>
                        </section>
                    </Parallax>
                </div>
            );
        }
        return parallaxBanner;
    }
}

export default ParallaxBanner;
