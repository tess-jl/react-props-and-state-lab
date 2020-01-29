import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false, 
    words: [],
    val0: '',
    val1: '', 
    val2: '',  
    val3: '', 
    val4: '', 
    val5: '', 
    val6: '', 
    val7: '', 
    val8: '', 
    val9: '', 
    val10: '', 
    val11: '' 
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  packageWords = ({ target }) => this.setState({ words: [...target.value] });

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} />}
        {showResult && <Result words={[]} closeResult={this.toggleResult} />}
      </>
    );
  }
}
