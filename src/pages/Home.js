import React, { useEffect, useState } from "react";

// REDUX IMPORT
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/actions/userActions";

// LOCAL COMPONENTS
import CardComponent from "../components/CardComponent";
import Loader from "../components/Loader";

import styles from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const users = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const response = await axios
      .get("https://reqres.in/api/users")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setUsers(response.data.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  console.log("users :", users);

  if (loading === true) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <h1>User Data Fetcher</h1>
      <CardComponent />
    </div>
  );
};

export default Home;
