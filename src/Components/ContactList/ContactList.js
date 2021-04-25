import { connect } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../../redux/phone-operations';
import { getVisibleContacts } from '../../redux/phone-selectors';

function ContactList({ contacts, onDelete, onfetchContacts }) {
  useEffect(() => {
    onfetchContacts();
  }, []);

  return (
    <ul>
      {contacts?.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
  onfetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
