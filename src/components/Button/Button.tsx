import React from 'react';
import './styles.css';

export type Button_prop_types = {
  value: string;
  onclickfunc?: (e: any) => void;
  type: string;
};

const Button: React.FC<Button_prop_types> = (props) => {
  return (
    <div>
      <input
        type={props.type}
        value={props.value}
        onClick={props.onclickfunc}
        className='btn'
        data-testid='button-test'
      />
    </div>
  );
};

export default Button;
