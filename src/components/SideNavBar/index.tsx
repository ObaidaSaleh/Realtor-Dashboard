import React, { useCallback } from 'react';
import clsx from 'clsx';
import {
    Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton
} from '@material-ui/core';
import {
    SupervisorAccount as SupervisorAccountIcon,
    AccountCircle as AccountCircleIcon,
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@material-ui/icons';

import { PermBarProps } from './types';

import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';

const PermNavBar: React.FC<PermBarProps> = ({title} : PermBarProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  },[]);

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  },[]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" 
      className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >

            <MenuIcon />
          </IconButton>
          <Typography color="primary"variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>

      </AppBar>
      <Drawer
        className={classes.drawer}
        open={open}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

            <ListItem button key={'Clients'}>
                <ListItemIcon> <SupervisorAccountIcon color="primary" /> </ListItemIcon>
                <ListItemText primary={'Clients'} color="primary" />
            </ListItem>

            <ListItem button key={'Profile'}>
                <ListItemIcon> <AccountCircleIcon color="primary" /> </ListItemIcon>
                <ListItemText primary={'Profile'} color="primary" />
            </ListItem>

        </List>
        <Divider color="primary" />
      </Drawer>
    </div>
  );
}

export default PermNavBar;
