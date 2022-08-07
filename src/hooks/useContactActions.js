// import { toast } from 'react-toastify';
// import { useDeleteContactMutation } from 'redux/contactsSlice';

// export const useContactActions = (id, name) => {
//   const [deleteContact, { isLoading }] = useDeleteContactMutation();

//   const handleDeleteContact = () =>
//     deleteContact(id).then(data => console.log(data.status));
//   const handleDelete = id => {
//     toast.promise(handleDeleteContact, {
//       autoClose: 1000,
//       pending: {
//         render() {
//           return `Deleting contact ${name}...`;
//         },
//       },
//       success: {
//         render() {
//           return `Contact ${name} was deleted👌`;
//         },
//         autoClose: 2000,
//       },
//       error: {
//         render() {
//           return {
//             render: 'Something went wrong, try again later',
//             type: toast.TYPE.ERROR,
//             autoClose: 4000,
//           };
//         },
//       },
//     });
//   };
//   return { handleDelete, isLoading };
// };
