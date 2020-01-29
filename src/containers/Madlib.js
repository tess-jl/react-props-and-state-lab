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

  handleChange = ({ target }) => this.setState({ ['']: target.value }, () => {
    console.log(this.state.val0);
  });

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange=(this.handleChange) />}
        {showResult && <Result words={[]} closeResult={this.toggleResult} />}
      </>
    );
  }
}
