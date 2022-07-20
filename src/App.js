import React from 'react';
export default function App() {
  const url = 'https://api.github.com/users';
  return (
    <div>
      <h1>all users</h1>

      <div className="flex">
        <div>
          <h3>item.login</h3>
          <img width="100" height="100" src="item.avatar_url" />
          <a href="item.html_url">view repositry</a>
        </div>
      </div>
    </div>
  );
}
