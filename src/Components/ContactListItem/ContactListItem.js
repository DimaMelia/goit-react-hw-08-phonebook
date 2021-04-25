import s from './ContactListItem.module.css';

function ContactListItem({ id, name, number, onDelete }) {
  return (
    <li>
      {name}: {number}
      <button className={s.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
