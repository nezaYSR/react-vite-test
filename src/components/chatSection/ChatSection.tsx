import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import ChatCard from "../chatCard/ChatCard";
import { ChatHeader } from "../chatHeader/ChatHeader";
import { RandomUser } from "./RandomUsers";
import "./ChatSection.scss";
import { User } from "./RandomUsers";
import { useState } from "react";

const ChatSection = ({ searchPayload }: any) => {
  const [searchTextFromChild, setSearchTextFromChild] = useState("");

  const handleSearchText = (data: any) => {
    setSearchTextFromChild(data);
  };

  console.log(searchPayload);
  const filteredUsers = RandomUser.filter((user: User) => {
    // Check if user tag is included in the includeTags array
    if (
      user.tag &&
      Array.isArray(searchPayload.includeTags) &&
      !searchPayload.includeTags.some((tag: any) => tag.type === user.tag)
    ) {
      return false;
    }

    // Check if sent is between sentMin and sentMax
    if (searchPayload.sentMax > 0) {
      if (
        user.sent < searchPayload.sentMin ||
        user.sent > searchPayload.sentMax
      ) {
        return false;
      }
    }

    // Check if received is between recMin and recMax
    if (searchPayload.recMax > 0) {
      if (
        user.received < searchPayload.recMin ||
        user.received > searchPayload.recMax
      ) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="chat-card-group">
      <div className="chat-card-group-header">
        <ChatHeader searchText={handleSearchText} />
      </div>
      <FormGroup>
        {searchTextFromChild != ""
          ? RandomUser.filter((user: any) =>
              user.name
                .toLowerCase()
                .includes(searchTextFromChild.toLowerCase())
            ).map((user: User) => (
              <FormControlLabel
                className="chat-card-group-cards"
                key={user.id}
                control={<Checkbox />}
                label={<ChatCard key={user.id} user={user} />}
              />
            ))
          : searchPayload != ""
          ? filteredUsers.map((user: User) => (
              <FormControlLabel
                className="chat-card-group-cards"
                key={user.id}
                control={<Checkbox />}
                label={<ChatCard key={user.id} user={user} />}
              />
            ))
          : RandomUser.map((user: User) => {
              return (
                <FormControlLabel
                  className="chat-card-group-cards"
                  key={user.id}
                  control={<Checkbox />}
                  label={<ChatCard key={user.id} user={user} />}
                />
              );
            })}
      </FormGroup>
    </div>
  );
};

export default ChatSection;

// user.tag === "Games" && (
//   <FormControlLabel
//     className="chat-card-group-cards"
//     control={<Checkbox />}
//     label={<ChatCard key={user.id} user={user} />}
//   />
// )
