import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./RangePart.scss";

const RangePart = (props: any) => {
  const [sentMinValue, setSentMinValue] = useState(0);
  const [sentMaxValue, setSentMaxValue] = useState(0);
  const [recMinValue, setRecMinValue] = useState(0);
  const [recMaxValue, setRecMaxValue] = useState(0);

  const handleSentMinChange = (event: any) => {
    setSentMinValue(event.target.value);
    props.sentMinProps(event.target.value);
  };

  const handleSentMaxhange = (event: any) => {
    setSentMaxValue(event.target.value);
    props.sentMaxProps(event.target.value);
  };

  const handleRecMinhange = (event: any) => {
    setRecMinValue(event.target.value);
    props.recMinProps(event.target.value);
  };

  const handleRecMaxhange = (event: any) => {
    setRecMaxValue(event.target.value);
    props.recMaxProps(event.target.value);
  };

  return (
    <div className="range-parent">
      <div>
        <p>Message Sent</p>
        <div className="range-parent-child">
          <TextField
            id="outlined-basic"
            label="Min"
            variant="outlined"
            type="number"
            size="small"
            inputProps={{ min: 0 }}
            value={sentMinValue}
            onChange={handleSentMinChange}
          />
          <TextField
            id="outlined-basic"
            label="Max"
            variant="outlined"
            size="small"
            type="number"
            inputProps={{ min: 0 }}
            value={sentMaxValue}
            onChange={handleSentMaxhange}
          />
        </div>
      </div>

      <div>
        <p>Message Received</p>
        <div className="range-parent-child">
          <TextField
            id="outlined-basic"
            label="Min"
            variant="outlined"
            type="number"
            size="small"
            inputProps={{ min: 0 }}
            value={recMinValue}
            onChange={handleRecMinhange}
          />
          <TextField
            id="outlined-basic"
            label="Max"
            variant="outlined"
            type="number"
            size="small"
            inputProps={{ min: 0 }}
            value={recMaxValue}
            onChange={handleRecMaxhange}
          />
        </div>
      </div>
    </div>
  );
};

export default RangePart;
