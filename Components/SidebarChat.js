import { Avatar } from '@material-ui/core';
import { useState, useEffect } from 'react';
import classes from './sidebarChat.module.css';

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt('Enter Username which you want to chat with');
  };

  return !addNewChat ? (
    <div className={classes.chat}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className={classes['chat_info']}>
        <h2>Name</h2>
        <p>last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className={classes.chat}>
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
