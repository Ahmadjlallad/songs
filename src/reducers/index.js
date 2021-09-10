// NOTE its fixed to learn about redux
import { combineReducers } from "redux";
// * FIXME * create reducers 2 *

const songReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Way", duration: "1:45" },
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") return action.payload;
  return selectedSong;
};
// * FIXME * append the reducers to combineReducers function 3 *

// * the keys in this object are the reducers meaning it the keys that will show inside my reducers
export default combineReducers({
  songs: songReducer,
  selectedSong: SelectedSongReducer,
});
