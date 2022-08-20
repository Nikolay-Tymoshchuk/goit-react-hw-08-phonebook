import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAddContactMutation } from 'services/contacts';
import { useFilteredContacts } from 'hooks/useFilteredContacts';
import 'react-toastify/dist/ReactToastify.css';
import styles from './index.module.scss';
import { Pulsar } from '@uiball/loaders';
import { useState } from 'react';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoadData, setIsLoadData] = useState(false);
  const { filteredContacts: contacts } = useFilteredContacts();

  const [addContact] = useAddContactMutation();

  const onSubmit = async ({ name, number }) => {
    try {
      setIsLoadData(true);
      const response = await contacts?.find(
        item => item?.name.toLowerCase() === name.toLowerCase()
      );
      if (response) {
        toast.error(`Contact ${name} is already exist`);
        return;
      }
      await addContact({ name, number });
      toast.success(`Contact ${name} has been added`);
      reset();
    } catch (error) {
      toast.error('Oops! Something went wrong');
      console.log('error :>> ', error);
    } finally {
      setIsLoadData(false);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={e => e.preventDefault()}
      autoComplete="off"
    >
      <label>
        Name
        <input
          {...register('name', {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message:
                'Name may contain only letters, apostrophe, dash and spaces',
            },
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </label>
      <label>
        Number
        <input
          {...register('number', {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
              message:
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            },
          })}
        />
        {errors.number && <p className="error">{errors.number.message}</p>}
      </label>
      {isLoadData && <Pulsar color="#5c6386" />}
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        disabled={isLoadData}
      >
        <span>Add contact</span>
        <i></i>
      </button>
    </form>
  );
}

export default ContactForm;
