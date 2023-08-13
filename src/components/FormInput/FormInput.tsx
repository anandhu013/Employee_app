import React from 'react';
import './styles.css';

type FormInput_prop_types = {
  value: string;
  onchangefunc: (e: any) => void;
  type: string;
  label: string;
  placeholder: string;
};

const FormInput: React.FC<FormInput_prop_types> = (props) => {
  return (
    <div className='forminput-container'>
        <label className='formlabel-style'>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onchangefunc}
        placeholder={props.placeholder}
        className='forminput-bar'
      />
    </div>
  );
};

export default FormInput;
