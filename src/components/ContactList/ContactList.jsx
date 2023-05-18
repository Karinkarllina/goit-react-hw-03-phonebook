import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
    return (
    <ul className={css.contactList}>
        {contacts.map(({ name, number, id }) => {
            return (
              <li key={id} className={css.contactsItem}>
                <div className={css.contactItemWrap}>
                <p className={css.contactName}>{name}:
                  <span className={css.contactNumber}>{number}</span>
                  </p>
                    <button type='button' className={css.addContactBtn} onClick={() => onDelete(id)}>Delete</button>
                </div>
              </li>
            )
          })}
       
        
</ul>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};