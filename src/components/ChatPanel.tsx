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
                Chat with Broomva
            </button>
            <div id="chat-panel" className={`${styles.chatPanel} ${isOpen ? styles.open : ''}`}>
            <iframe
                        src="https://chat.broomva.tech/"
                        title="Book Broomva Chat"
                        width="100%"
                        height={800}
                        allowFullScreen={true}
                    ></iframe>
            </div>
        </div>
    );
};

export default ChatPanel;
