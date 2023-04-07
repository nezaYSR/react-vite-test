import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { bigSmile } from "@dicebear/collection";
import "./ChatCard.scss";
import { Badge, Chip, Fab, Tooltip } from "@mui/material";
import { User } from "../chatSection/RandomUsers";
import MailIcon from "@mui/icons-material/Mail";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  CiVirus,
  CiAlignBottom,
  CiLocationArrow1,
  CiPizza,
  CiBarcode,
  CiBatteryFull,
  CiDumbbell,
  CiCloudMoon,
  CiBookmarkPlus,
  CiBasketball,
  CiStethoscope,
  CiBank,
  CiCoffeeCup,
  CiLaptop,
  CiMusicNote1,
  CiUnread,
  CiVideoOn,
  CiBadgeDollar,
  CiCalculator2,
  CiFaceSmile,
  CiBrightnessDown,
} from "react-icons/ci";

const ChatCard = ({ user }: { user: User }) => {
  const seed = useMemo(() => Math.random().toString(36).substring(7), []);

  const avatar = useMemo(() => {
    return createAvatar(bigSmile, {
      seed,
      size: 128,
      // ... other options
    }).toDataUriSync();
  }, [seed]);

  function handleAvatar(tag: string) {
    if (tag == "Games") {
      return <CiVirus />;
    }
    if (tag == "Business") {
      return <CiAlignBottom />;
    }
    if (tag == "Food") {
      return <CiPizza />;
    }
    if (tag == "Travelling") {
      return <CiLocationArrow1 />;
    }
    if (tag == "Tech") {
      return <CiBarcode />;
    }
    if (tag == "Mental") {
      return <CiBatteryFull />;
    }
    if (tag == "Fitness") {
      return <CiDumbbell />;
    }
    if (tag == "Nightlife") {
      return <CiCloudMoon />;
    }
    if (tag == "Religion") {
      return <CiBookmarkPlus />;
    }
    if (tag == "Sport") {
      return <CiBasketball />;
    }
    if (tag == "Health") {
      return <CiStethoscope />;
    }
    if (tag == "Architecture") {
      return <CiBank />;
    }
    if (tag == "Coffee") {
      return <CiCoffeeCup />;
    }
    if (tag == "Gadget") {
      return <CiLaptop />;
    }
    if (tag == "Music") {
      return <CiMusicNote1 />;
    }
    if (tag == "NSFW") {
      return <CiUnread />;
    }
    if (tag == "Photography") {
      return <CiVideoOn />;
    }
    if (tag == "Crypto") {
      return <CiBadgeDollar />;
    }
    if (tag == "Math") {
      return <CiCalculator2 />;
    }
    if (tag == "Socmed") {
      return <CiFaceSmile />;
    }
    if (tag == "Nature") {
      return <CiBrightnessDown />;
    }
  }

  return (
    <div className="chat-card">
      <div className="chat-card-content">
        <div className="chat-card-content-id">
          <div className="chat-card-content-id-photo">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="chat-card-content-id-info">
            <h4>{user.name}</h4>
            <p>{user.phone}</p>
          </div>
          <div className="chat-card-content-id-msg">
            {user.sent > 0 && (
              <Tooltip title="Message Sent">
                <Badge
                  badgeContent={user.sent}
                  color="warning"
                  className="bdg1"
                >
                  <ChatBubbleOutlineIcon color="success" />
                </Badge>
              </Tooltip>
            )}
            {user.received > 0 && (
              <Tooltip title="Message Received">
                <Badge badgeContent={user.received} color="primary">
                  <MailIcon color="action" />
                </Badge>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="chat-card-content-tag">
          {user.tag !== null && (
            <Chip
              avatar={handleAvatar(user.tag)}
              label={user.tag}
              variant="outlined"
              onClick={() => {}}
              onDelete={() => {}}
              sx={{ margin: "30px" }}
            />
          )}
          <Fab color="primary" size="small" aria-label="add">
            +
          </Fab>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ChatCard;
