import React, { useState } from "react";

const About = () => {
  const [user, setUser] = useState({
    name: "didi",
    age: 18,
  });

  const [userList, setUserList] = useState([]);

  function handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "age") value = +value;
    setUser({
      ...user,
      [name]: value,
    });
  }

  // function handleInputAge(e){
  //   const value = +e.target.value;
  //   setUser({
  //     ...user,
  //     age: value,
  //   })
  // }

  function handleClick(e) {
    e.preventDefault();
    const newUserList = [...userList, { ...user }];
    setUserList(newUserList);
  }
  
  function handleDeleteUser(i) {
    console.log(i);
    const newUserList = userList.filter((user, index) => index != i);
    setUserList(newUserList);
  }

  return (
    <div>
      <form action="" className="form">
        <input
          type="text"
          onInput={handleInput}
          name="name"
          placeholder="name"
        />
        <input
          type="number"
          onInput={handleInput}
          name="age"
          placeholder="age"
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
      <ul>
        {userList.map((user, i) => (
          <li key={i}>
            <span>{user.name}</span>
            <button onClick={() => handleDeleteUser(i)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
