import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import Skeleton from '@material-ui/lab/Skeleton';
//import DataGrid from '@material-ui/data-grid';

import axios from '../../../axios';
import BaseInfo from '../BaseInfo/BaseInfo';

const FullLog = () => {
  const profile = useSelector(state => state.profile);
  const profileId = profile.id;
  const [log, setLog] = useState(null);
  const [loading, setLoading] = useState(false);

  const getDogLog = useCallback(() => {
    const queryParams = `?orderBy="profileId"&equalTo="${profileId}"`;
    setLoading(true);
    axios.get(`/doglog.json${queryParams}`).then(res => {
      // we know it's only one log item right now
      const logData = Object.keys(res.data).map(key => {
        return {
          ...res.data[key],
          id: key
        }
      })[0];

      setTimeout(() => {
        setLog(logData); 
        setLoading(false);
      }, 5000)
    }).catch(err => {
      setLoading(false); 
      console.log(err); 
    });
  }, [profileId]);

  useEffect(() => {
    getDogLog()
  }, [getDogLog]);

  let content = '';
  if (loading){
    content = (    
      <React.Fragment>
        <Skeleton animation="wave" height={'40px'} width={'75px'} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={'40px'} width={'75px'} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={'40px'} width={'75px'} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={'40px'} width={'75px'} style={{ marginBottom: 6 }} />
      </React.Fragment>
    )
  } else {
    content = log.behaviors.map(item => {
      return <Chip key={item} label={item}/>
    });   
  }
  
  return (
    <BaseInfo>        
      <div style={{display: 'flex'}}>
        {content}
      </div>
    </BaseInfo>
  );
}

export default FullLog;
