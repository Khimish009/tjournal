import React from 'react';
import {
  Paper, Button, IconButton, Avatar,
} from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as CreateIcon,
  SmsOutlined as MessageIcon,
  NotificationsNoneOutlined as NotificationIcon,
  Menu as MenuIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';

const Header: React.FC = () => (
  <Paper classes={{ root: styles.root }} elevation={0}>
    <div className={styles.headerLeft}>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <svg className={styles.logo} viewBox="0 0 24 25" id="site_logo">
        <path fill="#e8a427" d="M0 19h8.5v6H0v-6z" />
        <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z" />
        <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z" />
      </svg>
      <div className={styles.searchBlock}>
        <SearchIcon />
        <input placeholder="Поиск" />
      </div>

      <Button variant="contained">
        <CreateIcon />
      </Button>
    </div>
    <div className={styles.headerRight}>
      <IconButton>
        <MessageIcon />
      </IconButton>
      <IconButton>
        <NotificationIcon />
      </IconButton>
      <Avatar alt="Remy Sharp" src="" />
    </div>
  </Paper>
);

export default Header;
