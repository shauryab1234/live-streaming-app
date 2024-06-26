import React from "react";
import { StreamKey } from "./StreamKey";
import { ChannelSettings } from "./ChannelSettings";
import { PasswordSettings } from "./PasswordSettings";

const channelSettings = {
    title: 'title',
    description: "description",
    avatarURL : "none",
    username : "Knight",
    streamKey : "1234"
}
export const Settings = () => {
  return (
    <div className="settings-container">
      <span>Settings</span>
      <ChannelSettings settings = {ChannelSettings}/>
      <PasswordSettings />
      <StreamKey streamKey = {channelSettings.streamKey} />
    </div> 
  )
};

