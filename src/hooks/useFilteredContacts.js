import { useGetContactsQuery } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const useFilteredContacts = () => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const filteredContacts = useMemo(() => {
    return (
      contacts?.filter(contact => {
        console.log('name :>> ', contact.name);
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      }) ?? []
    );
  }, [filter, contacts]);

  return { filteredContacts, contacts };
};
