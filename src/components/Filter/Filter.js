import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    Find contact by name
    <br />
    <input
      type="text"
      name="name"
      value={value}
      onChange={({ currentTarget }) => onChange(currentTarget.value)}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
