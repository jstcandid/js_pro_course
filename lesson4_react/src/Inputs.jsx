import { Component } from 'react';

export class Input1 extends Component {
  render() {
    return (
      <div>
        <p>Class input</p>
        <input
          type='text'
          size='40'
          placeholder='Input something classy...'
        ></input>
      </div>
    );
  }
}

export function Input2() {
  return (
    <div>
      <p>Functional input</p>
      <input
        type='text'
        size='40'
        placeholder='Input something functional...'
      ></input>
    </div>
  );
}
