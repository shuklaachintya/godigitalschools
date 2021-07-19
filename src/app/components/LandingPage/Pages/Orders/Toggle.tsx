import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import './OrdersStatusTracking.css';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { connect } from 'react-redux';
import { setTabPanel, toggleCustomiseBtn } from '../../../../actions/customiseAction';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "",
    "& .MuiAppBar-root": {
      backgroundColor: "transparent",
      width: "auto",
      display: "inline-flex",
      color: "#323232",
      boxShadow: "none",
      border: "2px solid #dcdcdc",
      borderRadius: "100px",
    },
    "& .MuiTabs-root": {
      minHeight: "auto"
    },
    "& .MuiTab-root": {
      border: 0,
      height: "32px",
      padding: "6px 12px",
      borderRadius: "100px",
      backgroundColor: "transparent",
      textTransform: "capitalize",
      fontSize: '14px',
      lineHeight: "40px",
      color: "#323232",
      fontWeight: "600",
      minWidth: "60px",
      minHeight: "auto"
    },
    "& .MuiTab-textColorInherit.Mui-selected": {
      backgroundColor: "#19838c",
      color: "#ffffff",
      margin: "1px"
    }
  },
}));



function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ToggleButtons = () => {


  /* const [alignment, setAlignment] = React.useState(selectedPage); */
  const classes = useStyles();
  // const { children, value, index, ...other } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {

    setValue(newValue);
    setTabPanel(newValue);
  };

  useEffect(() => {
    setTabPanel(value);
    if (value === 0) {
      toggleCustomiseBtn(true);
    } else {
      toggleCustomiseBtn(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  /* const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }; */

  return (
    <div>

      {/* <div className="titlePage">REO Deliveries</div> */}


      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} TabIndicatorProps={{
            style: {
              display: "none",
            }
          }} aria-label="simple tabs example">
            <Tab label="Table" {...a11yProps(0)} />
            <Tab label="Gantt" {...a11yProps(1)} />
            <Tab label="Calendar" {...a11yProps(2)} />
          </Tabs>
        </AppBar>


      </div>
      {/* <ToggleButtons selectedPage= "table"></ToggleButtons> */}
      {/* <Table metaDataURL={metaDataURL} dataURL={dataURL} method={'post'} /> */}
    </div>
  );
};

const mapStateToProps = (state: any) => ({

  customise: state.customise

})

export default connect(mapStateToProps)(ToggleButtons);
