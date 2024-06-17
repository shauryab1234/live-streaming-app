import User from "../../models/users.js"
import Channel from "../../models/Channel.js";

export const getChannelDetails = async (req,res) => {
    try {
        const { channelId } = req.params;

        const channel = await Channel.findById(channelId);

        if(!channel || !channel.isActive){
            return res.status(400).send("Channel not found");
        }

        const user = await User.findOne({ channel: channelId}, {username: 1})

        const streamUrl = "http";

        const isOnline = false;

        return res.status(200).json({
            id: 1,
            title: "Channel",
            description: "Dummy description",
            username: "Knight",
            isOnline: false,
            streamUrl: "http",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong");
    }

    
};