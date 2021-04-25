import React from 'react';
import './App.css';
import ContactForm from './Components/Form/ContactForm';
import Container from './Components/Container/Container';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import Loader from './Components/Loader/Loader';
import { connect } from 'react-redux';
import { getLoading, getError } from './redux/phone-selectors';

function App({ isLoading, error }) {
  return (
    <Container title="Phonebook">
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {!error && <ContactList />}
      {error && <h3>{error}</h3>}
      {isLoading && <Loader />}
    </Container>
  );
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  error: getError(state),
});

export default connect(mapStateToProps)(App);
