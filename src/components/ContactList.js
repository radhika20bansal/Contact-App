import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

function ContactList({contacts, onRemoveContact}) {
    const style = {
        mainDiv:{
            width: '100%',
            padding: '2rem'
        },
        headingDiv:{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '1rem'
        }
    }

    const renderContactList = contacts.map(contact =>{
        return(
            <ContactCard key={contact.id} contact={contact} onRemoveContact={onRemoveContact} />
        )
    })
  return (
    <div className='ui celled list' style={style.mainDiv}>
        <div style={style.headingDiv}>
            <h2>Contact List</h2>
            <Link to='/add'>
                <button className='ui button blue' >Add Contact</button>
            </Link>
        </div>
        {renderContactList}
    </div>
  )
}

export default ContactList