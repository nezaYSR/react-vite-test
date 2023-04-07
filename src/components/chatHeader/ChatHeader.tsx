import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  TextField,
} from "@mui/material";
import { RandomUser } from "../chatSection/RandomUsers";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import "./ChatHeader.scss";
import { useState } from "react";

export const ChatHeader = (props: any) => {
  const [searchText, setSearchText] = useState("");

  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  const handleSearchChange = (event: any) => {
    const text = event.target.value;
    setSearchText(text);
    props.searchText(event.target.value);
  };

  return (
    <div className="chat-header-style">
      <div className="chat-header-style-top">
        <h2 className="chat-header-style-top-h2">
          All Contact {RandomUser.length}
        </h2>

        <SpeedDial
          ariaLabel="SpeedDial basic example"
          aria-setsize={10}
          sx={{
            position: "absolute",
            top: 25,
            left: 920,
            height: 300,
            zIndex: 99999,
          }}
          icon={<SpeedDialIcon />}
          direction="down"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              // sx={{ height: 100, width: 100 }}
            />
          ))}
        </SpeedDial>
      </div>

      <TextField
        id="outlined-helperText"
        label="Search Contact"
        helperText="Type User Name"
        sx={{ width: 1000 }}
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
};
