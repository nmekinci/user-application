import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
// import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
// import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";


const url = "https://randomuser.me/api/";
// const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [userData, setUserData] = useState();
  const [mouseOver, setMouseOver] = useState();
  const [addDataUser, setAddDataUser] = useState([]);
  // let users = [];

  const getUser = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .then((err) => console.log(err));
    // console.log(userData);
  };
  const addUser = () => {
    const newUser = {
      id: userData?.email,
      name: userData?.name.first,
      email: userData?.email,
      cell: userData?.cell,
      age: userData?.dob?.age,
    };
    addDataUser.some((user) => user.id === newUser.id)
      ? alert("user is already exist in list")
      : setAddDataUser([...addDataUser, newUser]);

    //     let temp = <tr className="body-tr">
    //     <td className="th">{userData?.name?.first}</td>
    //     <td className="th">{userData?.email}</td>
    //     <td className="th">{userData?.cell}</td>
    //     <td className="th">{userData?.dob?.age}</td>
    //     </tr>
    //     users.push([...users, userData.email])

    // setAddDataUser([...addDataUser, temp])
    // // console.log(!addDataUser.includes(temp));
    // console.log(users);

    //  setAddDataUser(addDataUser.filter( (item) => item !== temp ? [...addDataUser, temp] : item)  )

    // addDataUser.includes(temp) ? setAddDataUser(addDataUser) : setAddDataUser([...addDataUser, temp])

    //   <tr className="body-tr">
    // <td className="th">{item.name}</td>
    // <td className="th">{item.email}</td>
    // <td className="th">{item.cell}</td>
    // <td className="th">{item.age}</td>
    // </tr>

    // users.push(addDataUser)

    // console.log(users);
  };
  
  

  useEffect(() => {
    getUser();
    outputOver();
    return () => {
      
    }
  }, []);

  const outputOver = () => {
    switch (mouseOver) {
      case "name":
        return `${userData?.name?.first} ${userData?.name?.last}`;
      case "email":
        return `${userData?.email}`;
      case "age":
        return `${userData?.dob?.age}`;
      case "street":
        return `${userData?.location?.street?.name}`;
      case "phone":
        return `${userData?.cell}`;
      case "password":
        return `${userData?.login?.password}`;
      default:
        return `${userData?.name?.first} ${userData?.name?.last}`;
    }
  };

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img
            src={userData?.picture?.large}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {mouseOver ? mouseOver : "name"} is</p>
          {/* <p className="user-value">{outputOver()} {userData?.name?.first} {userData?.name?.last}</p> */}
          <p className="user-value">{outputOver()} </p>
          <div className="values-list">
            <button
              className="icon"
              id="name"
              data-label="name"
              onMouseEnter={(e) => setMouseOver(e.target.id)}
            >
              <img src={womanSvg} alt="user" id="iconImg" />
            </button>
            <button
              className="icon"
              id="email"
              data-label="email"
              onMouseEnter={(e) => setMouseOver(e.target.id)}
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button
              className="icon"
              id="age"
              data-label="age"
              onMouseEnter={(e) => setMouseOver(e.target.id)}
            >
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button
              className="icon"
              id="street"
              data-label="street"
              onMouseEnter={(e) => setMouseOver(e.target.id)}
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button
              className="icon"
              id="phone"
              data-label="phone"
              onMouseEnter={(e) => setMouseOver(e.target.id)}
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button
              className="icon"
              id="password"
              data-label="password"
              onMouseEnter={(e) => setMouseOver(e.target.id)}
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={getUser}>
              new user
            </button>
            <button className="btn" type="button" onClick={addUser}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {/* {addDataUser} */}
              {addDataUser.map((item) => (
                <tr className="body-tr" key={item.id}>
                  <td className="th">{item.name}</td>
                  <td className="th">{item.email}</td>
                  <td className="th">{item.cell}</td>
                  <td className="th">{item.age}</td>
                </tr>
              ))}
              {/* <tr className="body-tr">{addUser()}</tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default App;
