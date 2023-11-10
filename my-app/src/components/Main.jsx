import React, { useEffect, useState } from 'react';
import "./Main.css";

import { useNavigate } from "react-router-dom";


function Main() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="card-container">
        {data.map((user) => (
          <div key={user.id} className="card" onClick={() => navigate(`/detail/${user.id}`)}>
            <div style={{ fontWeight: 'bold' }}>{user.name}</div>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
