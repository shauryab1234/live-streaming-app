import React from "react";
import {ChannelCard} from "./ChannelCard"

const dummyChannels = [
    {
        id : 1,
        title: "test1",
        avatarURL: null,
        username: "abra",
        isOnline: false,
    },
    {
        id : 2,
        title: "test2",
        avatarURL: null,
        username: "ca",
        isOnline: true,
    },
    {
        id : 3,
        title: "test3",
        avatarURL: null,
        username: "dabra",
        isOnline: false,
    },
];

export const Channels = () => {
  return (
    <div className="channels-container">
      {dummyChannels.map(c => {
        return(
            <ChannelCard
                key = {c.id}
                title = {c.title}
                username = {c.username}
                isOnline = {c.isOnline}
                avatarURL = {c.avatarURL}
                navigateToChannelHandler = {()=>{}}
            />
        )
      })}
    </div>
  )
};

