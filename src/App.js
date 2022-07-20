import React, { useState, useEffect } from 'react';
export default function App() {
  const url = 'https://api.github.com/users';
  const [a, seta] = useState([]);

  const boot = () => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => seta(d));
  };
  useEffect(boot, []);
  return (
    <div>
      <h1>all users {a.length}</h1>

      <div className="flex">
        {a.map((item) => (
          <div className="item">
            <h3>{item.login}</h3>
            <img width="100" height="100" src={item.avatar_url} />
            <br />
            <a target="_blank" href={item.html_url}>
              view repositry
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
