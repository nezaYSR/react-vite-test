import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import TransferList from "../transferList/TransferList";
import "./SidebarPart.scss";
import { BiSearchAlt } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import RangePart from "../range/RangePart";
import { Button, Card, IconButton } from "@mui/material";
import { useState } from "react";

import Lottie from "lottie-react";
import filter from "../../assets/lottie/89600-search-icon.json";
import FilterHeader from "../filterHeader/FilterHeader";

type Props = {
  search: (searchPayloadProps: any) => void;
};

const SidebarPart = ({
  onCollapse,
  props,
}: {
  onCollapse: (collapsed: boolean) => void;
  props: Props;
}) => {
  const { collapseSidebar } = useProSidebar();
  const [collapse, setCollapse] = useState(false);
  const [includeTags, setIncludeTags] = useState([]);
  const [sentMin, setSentMin] = useState(0);
  const [sentMax, setSentMax] = useState(0);
  const [recMin, setRecMin] = useState(0);
  const [recMax, setRecMax] = useState(0);

  function collapseHandler() {
    setCollapse(!collapse);
    onCollapse(!collapse);
  }

  const handleIncludeTagsChange = (newIncludeTags: any) => {
    setIncludeTags(newIncludeTags);
  };

  const handleSentMinChange = (sentMin: number) => {
    setSentMin(sentMin);
  };

  const handleSentMaxChange = (sentMax: number) => {
    setSentMax(sentMax);
  };

  const handleRecMinChange = (recMin: number) => {
    setRecMin(recMin);
  };

  const handleRecMaxChange = (recMax: number) => {
    setRecMax(recMax);
  };

  const handleSendSearch = () => {
    const searchPayloadProps = {
      includeTags,
      sentMin,
      sentMax,
      recMin,
      recMax,
    };
    props.search(searchPayloadProps);
  };

  return (
    <div className="parent">
      <div style={{ display: "flex", height: "100%" }}>
        {collapse && (
          <Sidebar
            className="sidebar-part"
            style={{
              height: "100vh",
              textAlign: "center",
            }}
            transitionDuration={300}
          >
            <FilterHeader />
            <Menu>
              <TransferList left={handleIncludeTagsChange} />
            </Menu>
            <Menu>
              <RangePart
                sentMinProps={handleSentMinChange}
                sentMaxProps={handleSentMaxChange}
                recMinProps={handleRecMinChange}
                recMaxProps={handleRecMaxChange}
              />
            </Menu>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              aria-label="move selected left"
              className="sidebar-button"
              onClick={handleSendSearch}
            >
              Save Filter
            </Button>
          </Sidebar>
        )}
        <main>
          <IconButton
            color="primary"
            className="lot-btn"
            onClick={() => {
              collapseSidebar();
              collapseHandler();
            }}
          >
            {collapse && <BiChevronLeft />}
            {!collapse && <Lottie animationData={filter} />}
          </IconButton>
        </main>
      </div>
    </div>
  );
};

export default SidebarPart;
