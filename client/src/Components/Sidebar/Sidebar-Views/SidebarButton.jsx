import { useChatRoom } from "@/context/ChatContext";
import { useViews } from "@/context/ViewContext";
import { VIEWS } from "@/types/view";
import { Tooltip } from "react-tooltip";
import { useState, useEffect } from "react";
import { tooltipStyles, buttonStyles } from "../tooltipStyles";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const ViewButton = ({ viewName, icon }) => {
  const { activeView, setActiveView, isSidebarOpen, setIsSidebarOpen } = useViews();
  const { isNewMessage } = useChatRoom();
  const { width } = useWindowDimensions();
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    setShowTooltip(width > 1024);
  }, [width]);

  const handleViewClick = () => {
    if (viewName === activeView) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setIsSidebarOpen(true);
      setActiveView(viewName);
    }
  };

  return (
    <div className="relative flex items-center flex-col">
      <button
        onClick={handleViewClick}
        onMouseEnter={() => setShowTooltip(true)}
        className={`${buttonStyles.base} ${buttonStyles.hover}`}
        {...(showTooltip && {
          "data-tooltip-id": `tooltip-${viewName}`,
          "data-tooltip-content": viewName,
        })}
      >
        <div className="flex items-center justify-center">{icon}</div>

        {viewName === VIEWS.CHATS && isNewMessage && (
          <div className="absolute right-0 top-0 h-3 w-3 rounded-full bg-primary" />
        )}
      </button>

      {showTooltip && (
        <Tooltip
          id={`tooltip-${viewName}`}
          place="right"
          offset={25}
          className="!z-50"
          style={tooltipStyles}
          noArrow={false}
          positionStrategy="fixed"
          float={true}
        />
      )}
    </div>
  );
};

export default ViewButton;
