import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false, 
    words: [],
    word0: '',
    word1: '', 
    word2: '',  
    word3: '', 
    word4: '', 
    word5: '', 
    word6: '', 
    word7: '', 
    word8: '', 
    word9: '', 
    word10: '', 
    word11: '' 
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => ({ words: [state.word0, state.word1, state.word2, state.word3, state.word4, state.word5, state.word6, state.word7, state.word8, state.word9, state.word10, state.word11] }));
    this.toggleResult();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />}
        {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
