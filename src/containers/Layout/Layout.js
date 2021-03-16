import React from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '../../components/Toolbar/Toolbar';

import './Layout.css';

const Layout = props => {
  return (
    <Container>
      <Toolbar/>
      <div className="PageContent">
        {props.children}
      </div>
    </Container>
  );
}

export default Layout;
