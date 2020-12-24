import PropTypes from 'prop-types';
import s from './ContactList.module.css';
const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ name, id, number }) => (
      <li key={id}>
        {name}: {number}
        <button className={s.button} onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
