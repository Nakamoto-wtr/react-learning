import React from "react";

function UserList() {
  const users = ["James", "Nora", "Matthew", "Joe", "Susan"];
  function deleteUserWithName(name) {}

  return (
    <ul>
      {users.map((name) => (
        <li>
          <button className="button" onClick={() => deleteUserWithName(name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
