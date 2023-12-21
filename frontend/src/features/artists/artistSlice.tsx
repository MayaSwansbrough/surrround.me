import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import produce from "immer";
import { RootState } from "../../app/store";
import { fetchArtists } from './artistAPI'

export enum Statuses {
    Initial = "Not fetched",
    Loading = "Loading...",
    UpToDate = "UpToDate",
    Deleted = "Deleted",
    Error = "Error"
}

export interface ArtistState {
  name: string;
  genre?: string;
}

export interface ArtistsState {
  artists: ArtistState[];
  status: string;
}

const initialState: ArtistsState = { 
  artists: [
    {
      name: "",
      genre: ""
    }
  ],
  status: Statuses.Initial
 }

 export const fetchArtistsAsync = createAsyncThunk(
  'artists/fetchArtists',
  async () => {
    const response = await fetchArtists();
    return response;
  } )

 export const artistSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtistsAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        })
      })
      .addCase(fetchArtistsAsync.fulfilled, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.UpToDate;
        })
      })
      .addCase(fetchArtistsAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        })
      })
  }
 })

 const {} = artistSlice.actions;

 export const selectArtists = (state: RootState) => state.artists.artists;

 export const selectStatus = (state: RootState) => state.artists.status;

 export default artistSlice.reducer;