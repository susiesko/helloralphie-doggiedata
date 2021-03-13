import React from 'react';

import NameBadge from '../../../components/NameBadge/NameBadge';

import classes from './BaseInfo.module.css';

const BaseInfo = props => {
  return (
    <div className={classes.BaseInfo}>
      <NameBadge/>
      {props.children}
    </div>
  );
}

export default BaseInfo;
