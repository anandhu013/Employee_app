import React from 'react';
import './styles.css';

type SubButton_prop_types = {
  value: string;
  onclickfunc: (e: any) => void;
  img_path: string;
};

const SubButton: React.FC<SubButton_prop_types> = (props) => {
  return (
    <div className='sub-btn-container'>
      <div className='img-container'>
        <button className='sub-btn-style'>
          <img src={props.img_path} className='btn-img-style'/>
        </button>
      </div>
      <div className='text-container'>
        <p>{props.value}</p>
      </div>
    </div>
  );
};

export default SubButton;
