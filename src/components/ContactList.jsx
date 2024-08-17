import React from 'react'
import Contacts from './Contacts';
import ContactItem from './ContactItem';
import styles from './Contactlist.module.css'

function ContactList({Contacts,deleteHandler}) {
  return (
    <div className={styles.container}>
<h3>ContactList</h3>
{Contacts.length ? (<ul className={styles.contacts}>
 {Contacts.map((contact)=>(
 <ContactItem 
 key={contact.id} 
 data={contact}
  deleteHandler={deleteHandler}
  />
 ))}
</ul>) : (<p className={styles.message}>No Contacts Yet!</p>) }

    </div>
  )
}

export default ContactList;