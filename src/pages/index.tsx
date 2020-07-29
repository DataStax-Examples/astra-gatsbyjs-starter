import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { CodeBlock, dracula } from 'react-code-blocks';

const IndexPage: React.FC<PageProps<any>> = ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <h3>Fields Example Query</h3>
    <h4>Example Query:</h4>
    <CodeBlock
      text={`query getCharacters {
      astra {
          characters {
              values {
                  actorname
                  housename
                  name
              }
          }
      }
  }`}
      language={'graphql'}
      showLineNumbers={false}
      theme={dracula}
    />
    <h4>Results:</h4>
    <CodeBlock
      text={JSON.stringify(data, null, 2)}
      language={'json'}
      showLineNumbers={false}
      theme={dracula}
    />

  </Layout>
)

export default IndexPage;

export const query = graphql`
  query getCharacters {
      astra {
          characters {
              values {
                  actorname
                  housename
                  name
              }
          }
      }
  }
`;
