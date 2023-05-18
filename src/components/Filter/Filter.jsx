import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({ value, onChange }) => {
    return (

     <form className= {css.formFilter}>
        <label className={css.formFilterLabel}>
            Find contacts by name:
            <input className={css.formFilterInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              value={value}
              onChange={onChange}
            />
          </label>
        </form>        
    )

}



Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};