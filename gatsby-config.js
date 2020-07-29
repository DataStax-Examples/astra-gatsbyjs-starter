require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

if (!process.env.ASTRA_DB_ID) {
  throw new Error('Missing required environment variable, ASTRA_DB_ID');
}

if (!process.env.ASTRA_DB_REGION) {
  throw new Error('Missing required environment variable, ASTRA_DB_REGION');
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Astra Starter`,
    description: `Gatsby/Astra example application`,
    author: `Alex Leventer`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Astra`,
        fieldName: `astra`,
        url: `https://${process.env.ASTRA_DB_ID}-${process.env.ASTRA_DB_REGION}.apps.astra.datastax.com/api/graphql`,
        headers: async () => {
          return {
            'X-Cassandra-Token': await getAstraToken(),
          };
        }
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `muli`,
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ]
}
