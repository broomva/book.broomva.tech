// src/components/ChatPanel.tsx

import React, { useCallback, useEffect, useState } from 'react';
import styles from '../css/ChatPanel.module.css'; // Importing CSS module

const ChatPanel: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    const [isResizing, setIsResizing] = useState(false);

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         if (!isResizing) return;
    //         let offsetRight = document.body.offsetWidth - e.clientX;
    //         document.getElementById('chat-panel').style.width = `${offsetRight}px`;
    //     };

    //     const handleMouseUp = () => {
    //         setIsResizing(false);
    //     };

    //     document.addEventListener('mousemove', handleMouseMove);
    //     document.addEventListener('mouseup', handleMouseUp);

    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //         document.removeEventListener('mouseup', handleMouseUp);
    //     };
    // }, [isResizing]);

    const handleMouseMove = useCallback((e) => {
        if (!isResizing) return;
        window.requestAnimationFrame(() => {
            let offsetRight = document.body.offsetWidth - e.clientX;
            document.getElementById('chat-panel').style.width = `${offsetRight}px`;
        });
    }, [isResizing]);

    useEffect(() => {
        const handleMouseUp = () => setIsResizing(false);

        if (isResizing) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, handleMouseMove]);
    

    const handleMouseDown = () => {
        setIsResizing(true);
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
            />
            <div
                id="resizeHandle"
                className={styles.resizeHandle}
                onMouseDown={handleMouseDown}
            ></div>
            </div>
        </div>
    );
};

export default ChatPanel;



// // src/components/ChatPanel.tsx

// import { useEffect, useState } from 'react';
// import styles from '../css/ChatPanel.module.css'; // Update the path as necessary

// const ChatPanel = () => {
//     const [isResizing, setIsResizing] = useState(false);

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             if (!isResizing) return;
//             let offsetRight = document.body.offsetWidth - e.clientX;
//             document.getElementById('chat-panel').style.width = `${offsetRight}px`;
//         };

//         const handleMouseUp = () => {
//             setIsResizing(false);
//         };

//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('mouseup', handleMouseUp);

//         return () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mouseup', handleMouseUp);
//         };
//     }, [isResizing]);

//     const handleMouseDown = () => {
//         setIsResizing(true);
//     };

//     const [isOpen, setIsOpen] = useState(false);

//     const togglePanel = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div>
//             <button onClick={togglePanel} className={styles.chatToggleButton}>
//                 Chat with Broomva
//             </button>
//             <div id="chat-panel" className={styles.chatPanel}>
//                 <iframe
//                             src="https://chat.broomva.tech/"
//                             title="Book Broomva Chat"
//                             width="100%"
//                             height={800}
//                             allowFullScreen={true}
//                 />
//                 {/* <div
//                     id="resize-handle"
//                     className={styles.resizeHandle}
//                     onMouseDown={handleMouseDown}
//                 ></div> */}
//             </div>
//         </div>
//     );
// };

// export default ChatPanel;
