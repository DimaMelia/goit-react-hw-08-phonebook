import { connect } from 'react-redux';
import s from './Filter.module.css';
import { findContacts } from '../../redux/phone-actions';
import { getFilter } from '../../redux/phone-selectors';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(findContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
