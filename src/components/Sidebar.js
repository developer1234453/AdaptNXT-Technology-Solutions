import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', background: '#f0f0f0', height: '100vh' }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/inventory">
          <ListItemText primary="Inventory" />
        </ListItem>
        <ListItem button component={Link} to="/order">
          <ListItemText primary="Order" />
        </ListItem>
        <ListItem button component={Link} to="/returns">
          <ListItemText primary="Returns" />
        </ListItem>
        <ListItem button component={Link} to="/customers">
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button component={Link} to="/shipping">
          <ListItemText primary="Shipping" />
        </ListItem>
        <ListItem button component={Link} to="/channel">
          <ListItemText primary="Channel" />
          <KeyboardArrowDownIcon/>
        </ListItem>
        <ListItem button component={Link} to="/calculation">
          <ListItemText primary="Calculation" />
          <KeyboardArrowDownIcon/>
        </ListItem>
        <ListItem button component={Link} to="/account">
          <ListItemText primary="Account" />
          <KeyboardArrowDownIcon/>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
