// src/components/ChatToggle.tsx

import { useLocation } from '@docusaurus/router';
import React, { useCallback, useContext, useState } from 'react';

const ChatToggleContext = React.createContext({
  isChatPanelOpen: false,
  setChatPanelOpen: (open: boolean) => {},
});

export const useChatToggle = () => useContext(ChatToggleContext);

export const ChatToggleProvider: React.FC = ({ children }) => {
  const [isChatPanelOpen, setChatPanelOpen] = useState(false);
  return (
    <ChatToggleContext.Provider value={{ isChatPanelOpen, setChatPanelOpen }}>
      {children}
    </ChatToggleContext.Provider>
  );
};

export const ChatToggle: React.FC = () => {
  const { isChatPanelOpen, setChatPanelOpen } = useChatToggle();
  const location = useLocation();

  // Prevent the chat panel from showing on certain routes (if necessary)
  const isChatAvailable = !location.pathname.startsWith('/some-path-where-chat-is-unavailable');

  const toggleChatPanel = useCallback(() => {
    if (isChatAvailable) {
      setChatPanelOpen(!isChatPanelOpen);
    }
  }, [isChatPanelOpen, setChatPanelOpen, isChatAvailable]);

  if (!isChatAvailable) {
    return null;
  }

  return (
    <button
      aria-label="Toggle chat panel"
      onClick={toggleChatPanel}
    >
      {isChatPanelOpen ? 'Close Chat' : 'Open Chat'}
    </button>
  );
};
