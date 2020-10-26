import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onSubmit, onChange }) => (
  <>
    <label htmlFor="search">Search</label>
    <input
      id="search"
      type="search"
      name="search"
      value={search}
      onChange={onChange}
    />
    <button onClick={onSubmit} data-testid="button">Search</button>
  </>
);
Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
export default Search;
