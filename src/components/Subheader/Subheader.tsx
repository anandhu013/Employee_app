import React from 'react';
import './styles.css';
import SubButton from '../SubButton/SubButton';

type subheader_prop_types = {
  title: string;
  onclickfunc: (e: any) => void;
  name: string;
  img_path: string;
};

const Subheader: React.FC<subheader_prop_types> = (props) => {
  return (
    <div className='sub-container'>
      <h2 className='title'>{props.title}</h2>
      {localStorage.getItem('Role') === 'admin' && (
        <SubButton value={props.name} img_path={props.img_path} onclickfunc={props.onclickfunc} />
      )}
    </div>
  );
};

export default Subheader;
