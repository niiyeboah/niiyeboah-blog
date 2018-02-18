import React from 'react';
import { Parallax, Background } from 'react-parallax';

class ParallaxBanner extends React.Component {
    render() {
        const { background, height, children } = this.props;
        const h = height || 200;
        return (
            <div>
                <Parallax
                    bgImageAlt="Parallax Banner"
                    strength={h}
                    bgImage={background}
                >
                    {/* <Background>
                        <img src={background} alt="Parallax Banner" />
                    </Background> */}
                    <section style={{ height: `${h}px` }}>
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%,-50%)'
                            }}
                        >
                            {children}
                        </div>
                    </section>
                </Parallax>
            </div>
        );
    }
}

export default ParallaxBanner;
