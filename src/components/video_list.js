import React from 'react'; // functional, not class, so not component?
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
      key={video.etag}
      video={video}
      updateAppStateSelectedVideo={props.updateAppStateSelectedVideo} />
  });

  return (
    <ul className="col-md-6 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
