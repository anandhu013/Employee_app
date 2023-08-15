import React from 'react';
import './styles.css';
import Button from '../Button/Button';

export type DeletePopup_prop_types = {
  value: number;
  onclickDelete: (e: any) => void;
  onClickCancel: (e: any) => void;
};

const DeletePopup: React.FC<DeletePopup_prop_types> = (props) => {
  return (
    <div className='popup-container'>
      <div className='delete-parent'>
        <div className='popup-close' onClick={props.onClickCancel}>
          <p>X</p>
        </div>
        <div className='deletepopup-text'>
          <p className='deletepopup-text-main'>Are you sure?</p>
          <p className='deletepopup-text-sub'>{`You want to delete employee ${props.value}`}</p>
        </div>
        <div>
          <Button
            onclickfunc={() => {
              props.onclickDelete(props.value);
            }}
            value='Delete'
            type='button'
          />
          <Button onclickfunc={props.onClickCancel} value='Cancel' type='button' />
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
