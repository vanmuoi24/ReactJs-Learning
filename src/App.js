import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [text, settext] = useState("Loading");
  const [users, settodos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://648478f7ee799e321626ba3d.mockapi.io/api/v1/users`)
        .then((data) => data.json())
        .then((post) => {
          settodos(post);
        });
      settext("");
    }, 5000);
  }, []);
  const handle = () => {
    fetch(`https://648478f7ee799e321626ba3d.mockapi.io/api/v1/product`)
      .then((res) => res.json())
      .then((data) => {
        settodos(data);
      });
  };
  return (
    <>
      <button onClick={handle}>update</button>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>age</td>
            <td>id</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>{text}</h1>
    </>
  );
}

export default App;
