import React from 'react';
import Samai from 'samai';

class SamaiBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        if (typeof document !== undefined) {
            const samai = new Samai({
                width: 600,
                fabric_enabled: true,
                dark_colors: ['#444', '#072'],
                light_colors: ['#3A6', '#777', '#AAA'],
                n: 42
            });
            samai.getPNG().then(src => {
                this.setState({
                    styles: {
                        backgroundImage: `url('${src}')`,
                        backgroundSize: `${samai.width}px`
                    }
                });
            });
        }
    }
    render() {
        const { children, className } = this.props;
        const { styles } = this.state;
        return (
            <div className={className}>
                <div className="samai" style={styles} />
                <div className="banner-image gradient" />
                {children}
            </div>
        );
    }
}

export default SamaiBackground;
