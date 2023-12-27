import * as React from 'react';
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Statuses, fetchArtistsAsync, selectArtists, selectStatus } from './searchbarSlice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Searchbar.scss';

interface Props {
  
}
 
const Searchbar: React.FC<Props> = () => {
  const artists = useAppSelector(selectArtists);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArtistsAsync());
  }, [dispatch])

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  } else {
    contents = <div className="card">
      <div className="card-body">
        <h3>{status}</h3>
      </div>
    </div>
  }

  return (
    <div><h3>Artists</h3>
      {contents}
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '75%' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <TextField
            className="searchField"
            id="filled-search"
            label="Artist Name"
            type="search"
            variant="outlined"
          />
        </div>
      
      </Box>
    </div>
  )
}
 
export default Searchbar;