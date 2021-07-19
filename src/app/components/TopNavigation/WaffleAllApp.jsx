import React, { forwardRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, NavLinkProps } from 'react-router-dom'
import waffle from '../../assets/waffle.svg';
import './Navbar.css';
import { changeWaffleSelectedTitle } from '../../actions/waffleAppAction';
import { setTableLink } from '../../actions/tableAction';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginTop: '40px',
    marginLeft: '-125px',
    boxShadow: '0 1px 8px -2px rgba(0, 0, 0, 0.2)',
    width: '200px',
  },

})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '& .MuiButton-containedPrimary': {
      backgroundColor: '#eee',
    },

  },
}))(MenuItem);;

const WaffleApp = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const waffleList = props.waffleItemList;


  const waffleSelectHandler = (title, id) => {
    changeWaffleSelectedTitle(title);
    setTableLink(false);
    props.expAppSelected(id)
  }
  WaffleApp.propTypes = {
    waffleItemList: PropTypes.array,
    changeWaffleSelectedTitle: PropTypes.func,
    waffleSelectedTitle: PropTypes.string
  };

  const list = () => (
    <StyledMenuItem onClick={handleClose} className="MuiList-padding-dropdown">
      <List >
        {waffleList.map((item, index) => (


          <ListItem button key={item.id} component={forwardRef((props: NavLinkProps, ref: any) => <NavLink exact {...props} innerRef={ref} />)}
            to={item.path} onClick={() => { waffleSelectHandler(item.applicationName, index) }}>
            <div>
              <ListItemIcon><img className="waffle-icon" src={`data:image/jpeg;base64,${item.logo}`} alt={item.applicationName} /></ListItemIcon>
              <ListItemText className="waffle-text" primary={item.applicationName} />
            </div>
          </ListItem>
        ))}

      </List>
    </StyledMenuItem>
    //</div> 
  );

  return (
    <div>
      <React.Fragment >
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img className="waffle" src={waffle} alt="notification" />
        </Button >
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {list()}
        </StyledMenu>
      </React.Fragment >
      {/* ))} */}
    </div >
  );
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    waffleSelectedTitle: state.waffleSelectedTitle,
  }
}

export default connect(mapStateToProps, { setTableLink })(WaffleApp);
