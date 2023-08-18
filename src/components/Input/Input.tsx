import React from 'react';
import './styles.css';

export type Input_prop_types = {
  value: string;
  onchangefunc?: (e: any) => void;
  type: string;
  label: string;
};

const Input: React.FC<Input_prop_types> = (props) => {
  return (
    <div className='relative'>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onchangefunc}
        data-testid='input-test'
      />
      <label>{props.label}</label>
    </div>
  );
};

export default Input;
