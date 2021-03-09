import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';

import './Layout.css';

const Layout = props => {
  return (
    <div>
      <Toolbar/>
      <div className="PageContent">
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
