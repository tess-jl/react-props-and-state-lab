import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, val0, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11 }) => (

  <form onSubmit={onSubmit}>
    <input type="text" value={val0} placeholder="adjective" />
    <input type="text" value={val1} placeholder="noun" />
    <input type="text" value={val2} placeholder="verb, past tense" />
    <input type="text" value={val3} placeholder="adverb" />
    <input type="text" value={val4} placeholder="adjective" />
    <input type="text" value={val5} placeholder="noun" />
    <input type="text" value={val6} placeholder="noun" />
    <input type="text" value={val7} placeholder="adjective" />
    <input type="text" value={val8} placeholder="verb" />
    <input type="text" value={val9} placeholder="adverb" />
    <input type="text" value={val10}placeholder="verb, past tense" />
    <input type="text" value={val11} placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
