import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, Button, Container } from "react-bootstrap";
import { selectSong } from "./../action";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <Container key={song.title} text="white">
          <ListGroup
            text="white"
            horizontal={"xl"}
            className="my-3"
            style={{ width: "30rem", justifyContent: "space-between" }}
          >
            <ListGroup.Item
              text="white"
              variant="info"
              style={{ width: "30rem" }}
            >
              <Container
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {song.title}
                <Button
                  onClick={() => this.props.selectSong(song)}
                  type="button"
                  variant="success"
                >
                  Success
                </Button>
              </Container>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}
// * FIXME * state from are store step 6 *
// ** mapStateToProps or anything passed to **
const mapStateToProps = (state) => {
  // NOTE * keys for state are the same keys passed to compendsReducers *
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong, // dose a spacial operation on the state
})(SongList);
