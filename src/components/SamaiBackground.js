import React from 'react';
import Samai from 'samai';

class SamaiBackground extends React.Component {
    state = {};
    componentDidMount() {
        if (typeof document !== undefined) {
            const samai = new Samai({
                width: 600,
                fabric_enabled: true,
                dark_colors: ['#222', '#072'],
                light_colors: ['#3A6', '#444', '#777']
            });
            samai.getPNG().then(src => {
                this.setState({
                    styles: {
                        backgroundImage: "url('" + src + "')",
                        backgroundSize: samai.width + 'px',
                        position: 'absolute',
                        filter: 'brightness(30%)',
                        ...{ top: 0, right: 0, bottom: 0, left: 0 }
                    }
                });
            });
        }
    }
    render() {
        const { children } = this.props;
        const { styles } = this.state;
        return (
            <div>
                <div style={styles} />
                {children}
            </div>
        );
    }
}

export default SamaiBackground;
