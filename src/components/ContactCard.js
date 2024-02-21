import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

function ContactCard({ contact, onRemoveContact }) {
  const style = {
    item: {
      display: "flex",
      alignContent: "center",
      position: "relative",
    },
    content: {
      padding: "1rem",
      display: "flex",
    },
    iconDiv:{
        display: 'flex',
        position: 'absolute',
        top: "1.5rem",
        right: "5rem",
        fontSize: '1.2rem'
    }
  };
  return (
    <div className="item" style={style.item}>
      <div className="content" style={style.content}>
        <img className="ui avatar image" src={user} alt="user" />
        <Link to={`/contact/${contact.id}`}>
          <div>
            <div className="header">{contact.name}</div>
            <div>{contact.email}</div>
          </div>
        </Link>
      </div>
      <div style={style.iconDiv}>
        <Link to={`/edit/${contact.id}`}>
            <i
            className="edit alternate outline icon"
            style={style.icon}
            ></i>
        </Link>
        <i
          className="trash alternate outline icon"
          style={{color: 'red', cursor: 'pointer'}}
          onClick={() => onRemoveContact(contact.id)}
        ></i>
      </div>
    </div>
  );
}

export default ContactCard;
