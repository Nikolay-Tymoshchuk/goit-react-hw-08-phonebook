import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import styles from './index.module.scss';

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = async ({ name, email, password }) => {
    console.log(name, email, password);
    reset();
  };

  // const onSubmit = data => {
  //   console.log(data);
  //   reset();
  // };

  return (
    <form
      className={styles.form}
      onSubmit={e => e.preventDefault()}
      autoComplete="off"
    >
      <label>
        Name*
        <input
          {...register('name', {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value: /^([a-zA-Z]{2,}\s?[a-zA-Z]{1,})/,
              message: 'Name should contain only Latin letters and space',
            },
          })}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </label>

      <label>
        Email*
        <input
          {...register('email', {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value:
                /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
              message: 'Please enter valid email',
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </label>

      <label>
        Password*
        <input
          type="password"
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            maxLength: {
              value: 12,
              message: 'Password must be at most 12 characters',
            },
            pattern: {
              value: /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).*$/,
              message:
                'Password must contain at least one digit, one lowercase and one uppercase letter',
            },
          })}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </label>
      <label>
        Confirm password*
        <input
          type="password"
          {...register('password_confirm', {
            required: 'This field is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            maxLength: {
              value: 12,
              message: 'Password must be at most 12 characters',
            },
            pattern: {
              value: /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).*$/,
              message:
                'Password must contain at least one digit, one lowercase and one uppercase letter',
            },
            validate: value =>
              value === password.current || 'The passwords do not match',
          })}
        />
        {errors.password_confirm && (
          <p className={styles.error}>{errors.password_confirm.message}</p>
        )}
      </label>

      <button type="submit" onClick={handleSubmit(onSubmit)}>
        Submit
      </button>
    </form>
  );
}
