import React from "react";

const imageUrl = 'https://cdn.mos.cms.futurecdn.net/hH6Fn5kUuz4UtnEDeBgCfc-1200-80.jpg';

const ChannelAvatar = ({ url }) => {
    return (
        <div className="channels-avatar-container">
            <img src = {url || imageUrl} width = "100%" height = "100%" />
        </div>
    )
}

export const ChannelCard = ({
    title,
    id,
    username,
    avatarURL,
    isOnline,
    navigateToChannelHandler,
}) => {

    const handleNavigate = ()=>{
        navigateToChannelHandler(id);
    }

  return (
    <div className="channels-card" onClick={handleNavigate}>
      <ChannelAvatar url={avatarURL}/>
      <span className="channels-card-text">{title}</span>
      <span className="channels-card-text">{username}</span>
      <span className="channels-card-text" style={{color : isOnline ? 'green' : 'red'}}>{isOnline? 'Online' : 'Offline'}</span>
    </div>
  )
};

