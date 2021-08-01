import { Avatar, IconButton } from '@material-ui/core';
import classes from './sidebar.module.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_header}>
        <Avatar />
        <div className={classes.sidebar_icons}>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.sidebar_search}>
        <div className={classes.sidebar_search_container}>
          <SearchOutlined className={classes.search_icon} />
          <input
            placeholder='Search a new chat'
            type='text'
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.sidebar_chats}>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
