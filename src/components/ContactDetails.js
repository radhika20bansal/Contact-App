import React from "react";
import user from "../images/user.png";
import { useParams, Link } from "react-router-dom";

function ContactDetails({ contacts }) {
  const contactId = useParams().id;
  const contactInfo = contacts.find((contact) => contact.id === contactId);

  const style = {
    mainDiv: {
      marginTop: "2rem",
    },
    card: {
      padding: "2rem 2rem 1rem",
    },
    button: {
      width: "13rem",
      margin: "2rem auto",
    },
  };
  return (
    <div className="main" style={style.mainDiv}>
      <div className="ui card centered" style={style.card}>
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <h2>{contactInfo.name}</h2>
          <p>{contactInfo.email}</p>
        </div>
      </div>
      <div style={style.button}>
        <Link to={"/"}>
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;
