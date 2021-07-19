
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import bell from '../../assets/bell.svg';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginTop: '44px',
    boxShadow: '0 1px 8px -2px rgba(0, 0, 0, 0.2)',
    minWidth: '230px',

  },

  
})((props:any) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
      '& .MuiButton-containedPrimary':{
          backgroundColor: '#eee',
      }
  },
}))(MenuItem);

export default function Notification(props:any) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event:any) => {
    if(listing.length) setAnchorEl(event.currentTarget);    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const listing = props.notificationList;
  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <div className="notify-icon"><img className="logo" src={bell} alt="notification" />{listing.length ? <span className="notify-count">{listing.length}</span> : null}</div>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
         <div className="notification-heading"><h3>Notifications</h3></div>
        
         {listing.map((list:any, index:number) => {
              return <StyledMenuItem key={index}><ListItemText primary={list.ItemName} /></StyledMenuItem>
          })}
      </StyledMenu>
    </div>
  );
}
