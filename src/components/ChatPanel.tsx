// src/components/ChatPanel.tsx

import React, { useState } from 'react';
import styles from '../css/ChatPanel.module.css'; // Importing CSS module

const ChatPanel: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={togglePanel} className={styles.chatToggleButton}>
                Chat
            </button>
            <div id="chat-panel" className={`${styles.chatPanel} ${isOpen ? styles.open : ''}`}>
                <iframe id="chat-iframe" src="https://chat.broomva.tech" frameBorder="0"></iframe>
            </div>
        </div>
    );
};

export default ChatPanel;
