import React, { useEffect, useState } from "react";
import "./App.css";
import { IUserDto, api } from "./api.generated";

function App() {
  const [users, setUsers] = useState<IUserDto[]>([]);

  useEffect(() => {
    api.userGet({}).then((data) => {
      setUsers(data.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.id}</div>;
      })}
    </div>
  );
}

export default App;
