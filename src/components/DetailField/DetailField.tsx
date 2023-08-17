import React from 'react';
import './styles.css';
import StatusBar from '../StatusBar/StatusBar';

type DetailField_prop_types = {
  keyField: string;
  value: string | boolean;
  type: string;
};

const DetailField: React.FC<DetailField_prop_types> = (props) => {
  return (
    <div className='detailfield-container'>
      <div className='detail-key-container'>
        <label className='key-field-style'>{props.keyField}</label>
      </div>
      <div className='detail-key-container'>
        {props.type == 'isActive' ? (
          <StatusBar isActive={Boolean(props.value)} />
        ) : (
          <p className='value-field-style'>{props.value}</p>
        )}
      </div>
    </div>
  );
};

export default DetailField;
