import React from "react";
import './components/videoItem.css';

const VideoItem = ({video, onVideoSelect}) => {

    return (
    <div onClick={() => onVideoSelect(video)} className="video-item item" key={video.id.videoId}>
        <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content"> 
        <div className="header">{video.snippet.title}</div>
         </div>
      </div>
    );
};

export default VideoItem;