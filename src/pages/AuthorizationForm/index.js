import { useForm } from 'react-hook-form';
import { useLoginMutation } from 'services/auth';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/authSlice';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { Pulsar } from '@uiball/loaders';
import { toast } from 'react-toastify';

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    try {
      const {
        data: { user, token },
      } = await login({ email, password });
      await dispatch(signIn({ user, token }));
      reset();
      navigate('/contacts');
    } catch (error) {
      toast.error(
        'Something went wrong. Maybe you entered wrong email or password'
      );
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={e => e.preventDefault()}
      autoComplete="off"
    >
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
              value: 7,
              message: 'Password must be at least 7 characters',
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
      {isLoading && <Pulsar color="#5c6386" />}
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        disabled={isLoading}
      >
        <span>Submit</span>
        <i></i>
      </button>
    </form>
  );
}
