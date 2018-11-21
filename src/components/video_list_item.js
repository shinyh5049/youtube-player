import React from 'react';

const videoListItem = (props) => {
    
    const {onUserSelected,video} = props
    const imageUrl = video.snippet.thumbnails.default.url;
    //console.log(video)

    return (
        <li onClick={() => onUserSelected(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div >
        </li >
    );

};

export default videoListItem;