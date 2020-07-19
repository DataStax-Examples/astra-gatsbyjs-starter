# Astra/Gatsby.js Starter

## 🚀 How to get started:
1. Create an [Astra account](https://astra.datastax.com/register), database, and keyspace.
2. Add some sample data to your Astra database using the Astra CQL console:

```sql
    USE test; // Assuming your keyspace is named test

    CREATE TABLE IF NOT EXISTS characters (
       id int,
       name text PRIMARY KEY,
       actorName text,
       houseName text,
       royal boolean
    );

    INSERT INTO characters (id, name, actorName, houseName, royal) VALUES (1, 'Jon Snow', 'Kit Harington', 'Stark', true);
    INSERT INTO characters (id, name, actorName, houseName, royal) VALUES (2, 'Daenerys Targaryen', 'Emilia Clarke', 'Targaryen', true);
    INSERT INTO characters (id, name, actorName, houseName, royal) VALUES (3, 'Tyrion Lannister', 'Peter Dinklage', 'Lannister', false);
    INSERT INTO characters (id, name, actorName, houseName, royal) VALUES (4, 'Arya Stark', 'Maisie Williams', 'Stark', false);
```
3. Clone this repository: `https://github.com/alexleventer/astra-gatsbyjs-starter.git`.
4. Create a `.env.development` file with your Astra credentials (see the [`.sample.env.development`](.sample.env.development) example).
5. Install node dependencies: `yarn install` or `npm install`.
6. Run your app: `gatsby develop`.
7. View your app at `localhost:8000`.
