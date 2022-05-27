import song from '../recorded/songs'

let song = new Audio(my_song);
song.play();
song.pause();

function Play() {

    state ={audio: new Audio(song),
        isPlaying: false,
    }

    playPause = () => {
        let isPlaying = this.state.isPlaying;

        if(isPlaying) {
            this.state.audio.pause();
        } else {
            this.state.audio.play();
        }
        this.setState({isPlaying: !isPlaying});
    };



    return (
        <div>
        <p>
            {this.state.isPlaying ? 'Play' : 'Pause'}
        </p>

        <button onClick={this.playPause}>
        
        </button>
        </div>
    );

}

export default Play;