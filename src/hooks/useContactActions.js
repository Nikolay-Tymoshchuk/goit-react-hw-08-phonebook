import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const useContactActions = (id, name) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeletePromised = async () => {
    try {
      const data = await deleteContact(id);
      const innerError = await data.error;
      if (!innerError) {
        return Promise.resolve();
      } else {
        console.log('error :>> ', innerError);
        return Promise.reject();
      }
    } catch (error) {
      return Promise.reject();
    }
  };

  const handleDelete = () => {
    toast.promise(handleDeletePromised(), {
      pending: {
        render() {
          return `Deleting contact ${name}...`;
        },
      },
      success: {
        render() {
          return `Contact ${name} was deleted👌`;
        },
        autoClose: 2000,
      },
      error: {
        render() {
          return `Something went wrong 😢. Try again later`;
        },
        autoClose: 2000,
      },
    });
  };
  return { handleDelete, isLoading };
};
