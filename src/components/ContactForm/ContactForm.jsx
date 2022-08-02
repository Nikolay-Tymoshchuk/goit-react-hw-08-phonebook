import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Field, Button } from './ContactForm.styled';

export function ContactForm({ onSubmit, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputIdGenerate = nanoid();
  const numberInputIdGenerate = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      toast.error(`Contact ${name} is already exist`);
      return;
    }
    onSubmit({ name, number, id: nanoid() });
    toast.success(`Contact ${name} has been added`);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={nameInputIdGenerate}>Name:</label>
      <Field
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        id={nameInputIdGenerate}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberInputIdGenerate}>Number:</label>
      <Field
        type="text"
        name="number"
        value={number}
        onChange={handleChange}
        id={numberInputIdGenerate}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">
        <span>add contact</span>
        <i></i>
      </Button>
    </Form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
