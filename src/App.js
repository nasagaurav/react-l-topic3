import React, { useState, useEffect } from 'react';
export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const [a, seta] = useState([]);

  const boot = () => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => seta(d))
      .catch((e) => seta([]));
  };

  useEffect(boot, []);
  return (
    <div>
      <h1>all users {a.length}</h1>

      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>website</th>
          <th>address-street</th>
        </tr>
        {a.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{item.address.street}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
