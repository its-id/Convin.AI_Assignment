import React from "react";
import styles from "./Card.module.css";
import { useSelector } from "react-redux";

const Card = () => {
  const user = useSelector((state) => state.user);
  const { first_name, last_name, avatar, email } = user;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.userInfo}>
        <h3 className={styles.userName}>
          {first_name === undefined ? "Name" : first_name + " " + last_name}
        </h3>
        <p>{email === undefined ? "User Info" : email}</p>
      </div>
      <div className={styles.userImage}>
        {
          avatar === undefined ? <div className={styles.imageContainer}>User Image</div>: <img src={avatar} alt="avatar" />
        }
        
      </div>
    </div>
  );
};

export default Card;
