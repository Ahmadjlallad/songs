// * NOTE: action creator
// * FIXME * create actions 1 *
const selectSong = (song) => {
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};
export { selectSong };
