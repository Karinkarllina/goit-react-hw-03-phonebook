import React, { Component } from 'react';
import contacts from './contacts.json'
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css'


export class App extends Component {

state = {
  contacts: contacts,
  filter: '',
  }
  

componentDidUpdate(prevProps, prevState) {
      if (this.state.contacts !== prevState.contacts) {
         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }      
   };

   componentDidMount() {
      const storedContacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(storedContacts);
      console.log(parsedContacts);
      this.setState({contacts:parsedContacts })
   }


  addContact = ({ name, number }) => {
    
    const { contacts } = this.state;

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

      const filterName = contacts.filter(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()).length;
    
      if(filterName) {
        return alert(`${newContact.name} is already in contacts`)
      } else {
            this.setState((prevState) => ({
            contacts: [newContact, ...prevState.contacts],
            }));
        }
  }



    changeFilter = event => {
    this.setState({ filter: event.currentTarget.value.toLowerCase() });
  };



    deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };



  render() {
    const visibleContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      <div className={css.phonebookWrap}>
        <h1 className={css.maineTitle}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>
        <h2 className={css.sectionTitle}>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={visibleContact}
          onDelete={this.deleteContact}
          />
      </div>
    );
  };
}


