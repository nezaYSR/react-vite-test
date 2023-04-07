import { useState } from "react";
import ChatSection from "../../components/chatSection/ChatSection";
import SidebarPart from "../../components/sidebar/SidebarPart";
import "./ChatPage.scss";

const Chat = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchPayload, setSearchPayload] = useState("");

  const handleSidebarCollapse = (collapsed: any) => {
    setIsSidebarCollapsed(collapsed);
  };

  const handleSearchPayload = (searchPayload: any) => {
    setSearchPayload(searchPayload);
  };

  return (
    <div className="chat-page">
      <div className="sidebar">
        <SidebarPart
          onCollapse={handleSidebarCollapse}
          props={{ search: handleSearchPayload }}
        />
      </div>
      <div className={`chat ${isSidebarCollapsed ? "sidebar-collapsed" : ""}`}>
        <ChatSection searchPayload={searchPayload} />
      </div>
    </div>
  );
};

export default Chat;
