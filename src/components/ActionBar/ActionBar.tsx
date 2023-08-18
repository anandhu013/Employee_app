import './styles.css';
import React from 'react';

export type Action_prop_types = {
  onclickDelete?: (e: any) => void;
  onclickEdit?: (e: any) => void;
};

const ActionBar: React.FC<Action_prop_types> = (props) => {
  return (
    <div className='actionbar-parent'>
      <img
        src='/assets/icons/delete.png'
        className='action-icons'
        onClick={props.onclickDelete}
        data-testid='deletebutton-test'
      />
      <img
        src='/assets/icons/edit.svg'
        className='action-icons edit-icon'
        onClick={props.onclickEdit}
        data-testid='editbutton-test'
      />
    </div>
  );
};

export default ActionBar;
