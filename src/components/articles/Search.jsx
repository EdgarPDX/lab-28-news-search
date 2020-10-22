import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ keyword, onChange, onSubmit }) => (
  <form onSubmit ={onSubmit}>
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
  keyword: PropTypes.func.isRequired
};
export default Search;


