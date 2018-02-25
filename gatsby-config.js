const config = require('./data/config');

module.exports = {
    siteMetadata: {
        title: 'niiyeboah.com',
        author: 'Nii Yeboah',
        description: 'A Blog written and developed by ＮＩＩ ＹＥＢＯＡＨ',
        siteUrl: 'http://niiyeboah.com'
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants'
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: config.googleAnalyticsID
            }
        },
        `gatsby-plugin-feed`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        },
        `gatsby-plugin-sitemap`
    ]
};
