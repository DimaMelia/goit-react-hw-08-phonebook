import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phone-operations';
import s from './Form.module.css';

function ContactForm({ onSubmit }) {
  const [contact, setContact] = useState({ name: '', number: '' });

  const onInputChange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const reset = () => setContact({ name: '', number: '' });

  const onAddContact = e => {
    e.preventDefault();
    if (contact.name === '' || contact.number === '') {
      alert('Enter name and number');
      return;
    }
    onSubmit(contact);
    reset();
  };

  return (
    <form className={s.form} onSubmit={onAddContact}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={contact.name}
          onChange={onInputChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="text"
          name="number"
          value={contact.number}
          onChange={onInputChange}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) => dispatch(addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
