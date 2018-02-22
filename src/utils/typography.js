import Typography from 'typography';
import fairyGateTheme from 'typography-theme-fairy-gates';

const green = '#396';

fairyGateTheme.overrideThemeStyles = () => ({
    body: {
        fontFamily: `'Quattrocento Sans', verdana, sans-serif`
    },
    blockquote: {
        borderColor: green
    },
    a: {
        color: green,
        backgroundImage:
            'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px,' +
            `${green} 1px, #396 2px, rgba(0, 0, 0, 0) 2px)`
    },
    'a.gatsby-resp-image-link': {
        backgroundImage: 'none'
    }
});

const typography = new Typography(fairyGateTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;
