import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWithUser{
    getTodos{
      completed
    }
  }
`;
// const query = gql`
//   query GetTodosWithUser{
//     getTodos{
//       id
//       title
//       completed
//       user{
//         name
//       }
//     }
//   }
// `;

function App() {
  const { data, loading } = useQuery(query);
  if (loading) return <h1>Loading...</h1>;
  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
