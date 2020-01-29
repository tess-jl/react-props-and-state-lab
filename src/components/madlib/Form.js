import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, val0, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11 }) => (

  <form onSubmit={onSubmit}>
    <input type="text" name='word0' value={val0} placeholder="adjective" />
    <input type="text" name='word1' value={val1} placeholder="noun" />
    <input type="text" name='word2' value={val2} placeholder="verb, past tense" />
    <input type="text" name='word3' value={val3} placeholder="adverb" />
    <input type="text" name='word4' value={val4} placeholder="adjective" />
    <input type="text" name='word5' value={val5} placeholder="noun" />
    <input type="text" name='word6' value={val6} placeholder="noun" />
    <input type="text" name='word7' value={val7} placeholder="adjective" />
    <input type="text" name='word8' value={val8} placeholder="verb" />
    <input type="text" name='word9' value={val9} placeholder="adverb" />
    <input type="text" name='word10' value={val10}placeholder="verb, past tense" />
    <input type="text" name='word11' value={val11} placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  val0: PropTypes.string.isRequired,
  val1: PropTypes.string.isRequired,
  val2: PropTypes.string.isRequired,
  val3: PropTypes.string.isRequired,
  val4: PropTypes.string.isRequired,
  val5: PropTypes.string.isRequired,
  val6: PropTypes.string.isRequired,
  val7: PropTypes.string.isRequired,
  val8: PropTypes.string.isRequired,
  val9: PropTypes.string.isRequired,
  val10: PropTypes.string.isRequired,
  val11: PropTypes.string.isRequired,
};

export default Form;
