import React from 'react';
import '../App.css';
import Song from '../components/Song'


class SavedPlaylists extends React.Component {

    render() {
        return (
            <div >
                <h1>this be a Saved Playlist</h1>
                  <Song />
            </div>


        );
    }

}

export default SavedPlaylists;
