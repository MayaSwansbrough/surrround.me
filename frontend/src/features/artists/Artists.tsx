import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchArtistsAsync, selectArtists } from './artistSlice';

function Artists() {
  const artists = useAppSelector(selectArtists);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArtistsAsync());
  }, [dispatch])
  return (
    <div></div>
  )
}

export default Artists