import { useState } from 'react';
import s from './ContactForm.module.css';
function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <br />
        <input
          className={s.input}
          name="name"
          value={name}
          type="text"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Number
        <br />
        <input
          className={s.input}
          name="number"
          type="tel"
          value={number}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className={s.button} type="submit">
        Add to contact
      </button>
    </form>
  );
}

export default ContactForm;
