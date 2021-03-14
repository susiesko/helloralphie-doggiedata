import React from 'react';

import Avatar from '../SVGs/Avatar';

const BaseBadge = props => {
  return (
    <div className={props.className}>
      <Avatar/>
      {props.children}
    </div>
  );
}

export default BaseBadge;
