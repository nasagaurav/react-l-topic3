import React, { useState, useEffect } from 'react';

function User(props) {
  console.log(props);
  let { item } = props;
  let { id, name, username, email } = item;
  return (
    <div>
      {id} {name} {username} {email}
    </div>
  );
}

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [a, seta] = useState([]);
  const boot = () => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => seta(d));
  };
  useEffect(boot, []);
  return (
    <div>
      <h1>All users {a.length} </h1>
      {a.map((item) => (
        <User item={item} />
      ))}
    </div>
  );
}
