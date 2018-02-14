import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'

fairyGateTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    backgroundImage: 'none',
  },
})

const typography = new Typography(fairyGateTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
