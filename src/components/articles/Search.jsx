import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ keyword, onChange, onSubmit }) => (
  <form data-testid="form id"onSubmit ={onSubmit}>
    <input 
      onChange={onChange} 
      value={keyword}
    />            
    <button>Search Keyword</button>
  </form>
);

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired
};
export default Search;


