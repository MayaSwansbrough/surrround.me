import { ArtistsState } from "./artistSlice"

const API_URL = "http://localhost:3000";

export async function fetchArtists() {
  return fetch(`${API_URL}/artists.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())
  .catch((error) => {
    console.log("Error: ", error);
    return {} as ArtistsState
  })
}