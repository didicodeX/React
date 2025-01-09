import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2>Home</h2>
      <ul>{users && users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  );
};

export default HomePage;
