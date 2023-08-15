import React from 'react';
import './styles.css';

type Dropdown_prop_types = {
  value: string;
  onchangefunc: (e: any) => void;
  label: string;
  options: string[];
};

const DropDown: React.FC<Dropdown_prop_types> = (props) => {
  return (
    <div className='dropdown-container'>
      <label className='dropdownlabel-style'>{props.label}</label>
      <select className='dropdown-select' onChange={props.onchangefunc}>
        {props.options.map((ele) => (
          <option value={ele} key={ele} className='dropdown-options' selected={props.value === ele}>
            {ele}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
