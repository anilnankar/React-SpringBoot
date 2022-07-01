import React, { Component } from 'react';

export default class Button extends Component {
  state = {
    value: this.props.value || 'button',
    title: this.props.title || 'Button'
  };

  onKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const { value } = this.state;
      if (value && value.length > 0 && this.props.onSearch) {
        this.props.onSearch(value);
        if (this.props.clearOnSearch) {
          this.setState({ value: '' });
        }
      } else {
        alert('Please type something');
      }
    }
  };

  render() {
    return (
      <button
        className="simpleButton"
        style={this.props.style}
        onKeyPress={this.onKeyPress}
        value={this.state.value}
      >
        {this.state.title}
      </button>
    );
  }
}
