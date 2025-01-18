import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../style/beats.scss';
import beat1 from '../style/Medias/beats/beat1.mp3'

const BeatPlaylist = () => {
  const tracks = [
    { id: 1, title: 'Track 1', src: beat1},
    { id: 2, title: 'Track 2', src: beat1 },
    { id: 3, title: 'Track 3', src: beat1 },
  ];

  const [currentTrackId, setCurrentTrackId] = useState(null); // Suivi de la piste en cours de lecture

  const handlePlay = (id) => {
    setCurrentTrackId(id); // Mettre à jour l'ID de la piste en cours
  };

  const handlePause = () => {
    setCurrentTrackId(null); // Arrêter l'animation lors de la pause
  };

  return (
    <div className="audio-playlist">
      <div className="sound-wave-container">
        <h2>My Beats</h2>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      {tracks.map((track) => (
        <div key={track.id} className="audio-track">
          <h3>{track.title}</h3>
          <AudioPlayer
            src={track.src}
            onPlay={() => handlePlay(track.id)}
            onPause={handlePause}
            showJumpControls={false}
            layout="horizontal"
            customAdditionalControls={[]}
            customVolumeControls={[]}
            autoPlayAfterSrcChange={false}
          />
          {currentTrackId === track.id && (
            <div className="audio-track-playing">
              <span style={{ '--i': 1 }}></span>
              <span style={{ '--i': 2 }}></span>
              <span style={{ '--i': 3 }}></span>
              <span style={{ '--i': 4 }}></span>
            </div>
          )}
        </div>
      ))}

      {/* Vidéo sous la liste des pistes */}
      
    </div>
  );
};

export default BeatPlaylist;
