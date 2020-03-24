import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, onChange, word0, word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11 }) => (

  <form onSubmit={onSubmit} onChange={onChange} className={styles.Form}>
    <input type="text" name='word0' value={word0} placeholder="adjective" />
    <input type="text" name='word1' value={word1} placeholder="noun" />
    <input type="text" name='word2' value={word2} placeholder="verb, past tense" />
    <input type="text" name='word3' value={word3} placeholder="adverb" />
    <input type="text" name='word4' value={word4} placeholder="adjective" />
    <input type="text" name='word5' value={word5} placeholder="noun" />
    <input type="text" name='word6' value={word6} placeholder="noun" />
    <input type="text" name='word7' value={word7} placeholder="adjective" />
    <input type="text" name='word8' value={word8} placeholder="verb" />
    <input type="text" name='word9' value={word9} placeholder="adverb" />
    <input type="text" name='word10' value={word10}placeholder="verb, past tense" />
    <input type="text" name='word11' value={word11} placeholder="adjective" />
    <button type="submit">submit</button> 
    <button type="reset">reset</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  word0: PropTypes.string.isRequired,
  word1: PropTypes.string.isRequired,
  word2: PropTypes.string.isRequired,
  word3: PropTypes.string.isRequired,
  word4: PropTypes.string.isRequired,
  word5: PropTypes.string.isRequired,
  word6: PropTypes.string.isRequired,
  word7: PropTypes.string.isRequired,
  word8: PropTypes.string.isRequired,
  word9: PropTypes.string.isRequired,
  word10: PropTypes.string.isRequired,
  word11: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, 
  label: PropTypes.string.isRequired
};

export default Form;
