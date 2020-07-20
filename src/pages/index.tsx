import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Table } from 'evergreen-ui'

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
    <Table style={{marginTop: 50}}>
      <Table.Head>
        <Table.TextHeaderCell>
          Name
        </Table.TextHeaderCell>
        <Table.TextHeaderCell>
          Actor Name
        </Table.TextHeaderCell>
        <Table.TextHeaderCell>
          House Name
        </Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {data.astra.characters.values.map(character => (
          <Table.Row key={character.name}>
            <Table.TextCell>{character.name}</Table.TextCell>
            <Table.TextCell>{character.actorname}</Table.TextCell>
            <Table.TextCell>{character.housename}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Layout>
)

export default IndexPage;

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
`;
