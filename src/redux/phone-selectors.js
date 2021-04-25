import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.phonebook.filter;

export const getContacts = state => state.phonebook.items;

export const getLoading = state => state.phonebook.loading;

export const getError = state => state.phonebook.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter),
    );
  },
);
