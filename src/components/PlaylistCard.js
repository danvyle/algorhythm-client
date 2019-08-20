import React from 'react';
import '../App.css';

class PlaylistCard extends React.Component {

    render() {
        console.log('inside playlist card', this)
        return (
            <div>
                <div onClick={() => this.props.onPlaylistClick(this.props.playlist.id)}>
                    <h5 classname='playlist-name'>{this.props.playlist.name}</h5>
                </div>
            </div>
        )
    }

}

export default PlaylistCard;
