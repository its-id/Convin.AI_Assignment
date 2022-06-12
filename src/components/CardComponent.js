import React from "react";
import axios from "axios";

//REDUX IMPORT
import { useDispatch, useSelector } from "react-redux";
import { selectedUser } from "../redux/actions/userActions";

import Button from "@mui/material/Button";
import Card from "./Card";

import styles from "../pages/Home.module.css";

const CardComponent = () => {
  const users = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();

  const handleUserClick = (id) => {
    const fetchUserDetails = async (id) => {
      const response = await axios
        .get(`https://reqres.in/api/users/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(selectedUser(response.data.data));
    };

    fetchUserDetails(id);
  };

  const renderList = users.map((user) => {
    return (
      <Button
        variant="contained"
        key={`user-${user.id}`}
        onClick={() => handleUserClick(user.id)}
        className={styles.button}
      >
        {user.id}
      </Button>
    );
  });

  return (
    <>
      <div className={styles.content}>
        <p>Press one of the buttons below: </p>
        <div className={styles.cardsContainer}>{renderList}</div>
        <Card />
      </div>
    </>
  );
};

export default CardComponent;
