import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import UserList from './UserList';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    fontFamily: 'Handlee',
    fontSize: 35,
    color: '#000030'
  },
  placeholder: {
    fontSize: 20
  }
}))


const Lists = ({ pois, city }) => {
  const classes = useStyles();
  const [userPois, setUserPois] = useState(JSON.parse(localStorage.getItem('userPois')) || []);

  let storedPois = JSON.parse(localStorage.getItem('userPois')) || [];

  return (
  <>
    <Grid item xs={6}>
      <List className={classes.root}> {`${city} Points of Interest`}
        {pois.length ? pois.map(poi => <SearchResults userPois={userPois} setUserPois={setUserPois} key={poi.name} poi={poi}/>) : <p className={classes.placeholder}>Sorry, information about this city is not available yet!</p>}
      </List>
    </Grid>
    <Grid item xs={6}>
      <List className={classes.root}> My Saved Places
        {storedPois.map(poi => <UserList userPois={userPois} setUserPois={setUserPois} key={poi.name} poi={poi}/>)}
      </List>
    </Grid>
  </>
  )
}

export default Lists;