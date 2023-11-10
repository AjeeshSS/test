// Detail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    };

    fetchUserDetails();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <h2>User Detail for ID: {user.id}</h2>
      <div style={{ fontWeight: 'bold' }}>Name: {user.name}</div>
      <p>Email: {user.email}</p>

      <h3>Address</h3>
      <p>Street: {user.address.street}</p>
      <p>Suite: {user.address.suite}</p>
      <p>City: {user.address.city}</p>
      <p>Zipcode: {user.address.zipcode}</p>

      <h3>Phone: {user.phone}</h3>
      <p>Website: {user.website}</p>

      <h3>Company</h3>
      <p>Name: {user.company.name}</p>
      <p>Catch Phrase: {user.company.catchPhrase}</p>
    </div>
  );
}

export default Detail;
