/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function VideoListItem(props) {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => props.onVideoSelect(props.video)}>
      <img src={imgUrl} alt="video" />
      <div>{props.video.snippet.title}</div>
    </li>
  );
}

export default VideoListItem;
