import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
const SongDetail = ({ song }) => {
  if (!song) return <div>Select a song</div>;
  return (
    <Card className="text-center mb-2" bg={"info"} text="dark">
      <CardHeader>Details For: {song.title}</CardHeader>
      <Card.Body>
        Title: {song.title}
        <br />
        Song Duration: {song.duration}
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
