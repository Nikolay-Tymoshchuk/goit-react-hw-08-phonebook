import { useState } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import styles from './index.module.scss';
import { useGetContactsQuery, useAddContactMutation } from 'services/contacts';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useGetContactsQuery().data;
  console.log('contacts :>> ', contacts);
  const [addContact] = useAddContactMutation();

  const nameInputIdGenerate = nanoid();
  const phoneInputIdGenerate = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value.toString());
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      toast.error(`Contact ${name} is already exist`);
      return;
    }
    addContact({ name, number: phone });
    toast.success(`Contact ${name} has been added`);
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={nameInputIdGenerate}>
        Name:
      </label>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        id={nameInputIdGenerate}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={styles.label} htmlFor={phoneInputIdGenerate}>
        Number:
      </label>
      <input
        className={styles.input}
        type="text"
        name="phone"
        value={phone}
        onChange={handleChange}
        id={phoneInputIdGenerate}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.button} type="submit">
        <span>add contact</span>
        <i></i>
      </button>
    </form>
  );
}

export default ContactForm;
