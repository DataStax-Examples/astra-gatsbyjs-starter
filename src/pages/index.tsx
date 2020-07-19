import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

type Character = {
  actorname:string
  housename:string
  name:string
  id:number
  royal:boolean
}

type DataProps = {
  astra: {
    characters: {
      values: Character[]
    }
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{marginTop: 50}}>Characters:</h1>
    {data && data.astra && data.astra.characters && data.astra.characters.values.map((character, i) => <div key={i}>{character.name}</div>)}
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
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
`
