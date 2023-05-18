import React, { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component { 

state = {
  name: '',
  number: '',
}

    
    getFormValue = event => {
        const { name, value } = event.currentTarget;

        this.setState({ [name]: value })  
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
  
    
    
render() {
    return (
        <form onSubmit={this.handleSubmit} className={css.formMaine}>
            <label className={css.formMaineLabel}>
                Name
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.getFormValue}
                className={css.inputMaine}
                />
            </label>
            <label className={css.formMaineLabel}>
                Number
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.getFormValue }
                className={css.inputMaine}
                />
            </label>
          <button type='submit'className={css.formAddBtn}> Add Contact </button>
        </form>
    )
}
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm