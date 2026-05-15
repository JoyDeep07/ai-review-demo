import React, { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      });

  }, []);

  return (
    <div>
      <h1>User List</h1>

      {users.map((user, index) => (
        <div key={index}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default App;