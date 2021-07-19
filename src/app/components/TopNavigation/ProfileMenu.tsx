
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';

import { useAuth0 } from '../../../react-keycloak';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginTop: '49px',
    boxShadow: '0 1px 8px -2px rgba(0, 0, 0, 0.2)',
    minWidth: '130px',
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
      },

  },
}))(MenuItem);

export default function ProfileMenu(props:any) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { logout } = useAuth0();

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userlist = props.UserMenuList;
  return (
    
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
       <PersonIcon/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
         {userlist.map((usermenu:any, index:string) => {
              return <div key={index}><Button onClick={logout}><StyledMenuItem ><ListItemText primary={usermenu.name} /></StyledMenuItem></Button></div>
          })}
      </StyledMenu>
    </div>
  );
}
