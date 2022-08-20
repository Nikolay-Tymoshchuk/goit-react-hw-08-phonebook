import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useSignupMutation } from 'services/auth';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Pulsar } from '@uiball/loaders';

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useDispatch();

  const password = useRef({});
  password.current = watch('password', '');
  const navigate = useNavigate();

  const onSubmit = async ({ name, email, password }) => {
    try {
      const {
        data: { user, token },
      } = await signup({ name, email, password });
      await dispatch(signIn({ user, token }));
      reset();
      navigate('/contacts');
    } catch {
      toast.error('Something went wrong. Maybe this email is already in use');
    }
  };

  return (
    <form onSubmit={e => e.preventDefault()} autoComplete="off">
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
        {errors.name && <p className="error">{errors.name.message}</p>}
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
        {errors.email && <p className="error">{errors.email.message}</p>}
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
              value: /^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              message:
                'Password must contain at least one digit, one lowercase and one uppercase letter',
            },
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </label>
      <label>
        Confirm password*
        <input
          type="password"
          {...register('password_confirm', {
            required: 'This field is required',
            validate: value =>
              value === password.current || 'The passwords do not match',
          })}
        />
        {errors.password_confirm && (
          <p className="error">{errors.password_confirm.message}</p>
        )}
      </label>
      {isLoading && <Pulsar color="#5c6386" />}
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        <span>Submit</span>
        <i></i>
      </button>
    </form>
  );
}
