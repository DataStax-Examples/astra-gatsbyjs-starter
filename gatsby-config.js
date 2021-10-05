require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "astra-gatsbyjs-starter",
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Astra`,
        fieldName: `astra`,
        url: `https://${process.env.ASTRA_DB_ID}-${process.env.ASTRA_DB_REGION}.apps.astra.datastax.com/api/graphql-schema`,
        headers: async () => {
          return {
            "X-Cassandra-Token": process.env.ASTRA_DB_APPLICATION_TOKEN,
          };
        },
      },
    },
  ],
};
