import React, { useState, useEffect } from "react";
import './Navbar.css';
import Toolbar from '@material-ui/core/Toolbar';
import ProfileMenu from './ProfileMenu';
import Notification from './Notification';
import WaffleApp from './WaffleAllApp';
import FormControl from '@material-ui/core/FormControl';
import { Select, Input } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { ITEM_HEIGHT } from '../../../shared/global_constants';
import { ITEM_PADDING_TOP } from '../../../shared/global_constants'
import { useAuth0 } from '../../../react-keycloak';
import { getMenuData } from '../../actions/navigationAction';
import { getExperienceData, expAppSelected } from '../../actions/experienceAction'

const MenuProps: any = {
    getContentAnchorEl: null, anchorOrigin: { vertical: 'bottom', horizontal: 'left', },
    PaperProps: { style: { maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP, width: 200, marginTop: 4 } },
};

const NavBar = (props: any) => {

    const { isAuthenticated } = useAuth0();
    const [assetDropdown, setAssetsDropdown] = useState('')
    const [active, SetActive] = useState<Array<number>>([])

    const handleChange = (i: number) => {
        if (active.includes(i)) {
            active.filter(value => value !== i)
            SetActive([...active.filter(value => value !== i)])
        }
        else
            SetActive([i])

    }


    // Sort Array By ID (Key Value Array)

    function compare(firstElement: any, secondElement: any) {

        let comparison = 0;
        if (firstElement.id && secondElement.id) {
            const elementFirst = firstElement.id;
            const elementSecond = secondElement.id;


            if (elementFirst > elementSecond) {
                comparison = 1;
            } else if (elementFirst < elementSecond) {
                comparison = -1;
            }
        }

        return comparison;

    }

    /* useEffect(() => {
        setTokenId(true)

        // if(token){
        //     setTokenId(true)  
        // }
    }) */



    useEffect(() => {

        getExperienceData();

    }, [props.experience.whichExpAppSelected]);


    useEffect(() => {

        if (props.experience.data.length > 0) {
            getMenuData(props.experience.data[props.experience.whichExpAppSelected].id);
        }
    }, [props.experience.data, props.experience.whichExpAppSelected])

    // Get All Primary Menu
    let allMenu: Array<Object> = [];
    if (props.menuData) {
        allMenu = props.menuData.data.primaryMenus;
        if (allMenu) {
            allMenu.sort(compare)
        }

    }

    return (
        <div className="navigation_section">
            {props.data.logo.showStatus ?
                <Toolbar>
                    <Link to={props.data.logo.link}><img className="brandlogo" src={props.experience.data.length > 0 ? `data:image/jpeg;base64,${props.experience.data[props.experience.whichExpAppSelected].logo}` : props.data.logo.imageUrl} alt={props.data.logo.name} /></Link>
                    <h2 className="title"> Go Digitial Schools </h2>
                </Toolbar> : null}

            {/* =================================Menu component=============================== */}

            { allMenu && allMenu.map((primary: any, i: number) => {

                // console.log(allMenuItemsArray);
                

                {/* {allMenuItems.primaryMenus.sort() } */ }

                {/* { allMenuItems.primaryMenus && allMenuItems.primaryMenus.map((primary: any, i: number) => { */ }
                return (
                    <>

                        {(!primary.subMenus.length) ?


                            <Toolbar className={!active.includes(i) ? 'link' : 'onClicked'}>
                                <Link to={`${primary.link}`} className='link' onClick={() => handleChange(i)}>
                                    <p className="text-link">{primary.menuName}</p>
                                </Link>
                            </Toolbar>


                            :
                            <Toolbar>
                                <FormControl className='form-control' >

                                    <Select className={!active.includes(i) ? 'link' : 'onClicked'}
                                        onClick={() => handleChange(i)}
                                        MenuProps={MenuProps}
                                        disableUnderline
                                        onChange={(e: any) => setAssetsDropdown(e.target.value)}
                                        value={assetDropdown}
                                        input={<Input />}
                                        displayEmpty
                                        renderValue={(selected: any) => {
                                            return (
                                                <p className="text-link">{primary.menuName}</p>
                                            )

                                            //return selected;
                                        }}
                                        inputProps={{ 'aria-label': 'Without label', 'backgroundColor': 'grey' }}
                                    >

                                        {primary.subMenus.map((sec: any) => {

                                            return (
                                                <div>
                                                    <MenuItem className="text-link">
                                                        <Link to={`${sec.link}`} className='link' onClick={() => handleChange(i)}>
                                                            {sec.menuName}
                                                        </Link>
                                                    </MenuItem>
                                                </div>
                                            )
                                        })}
                                    </Select>
                                </FormControl>


                            </Toolbar>

                        }
                    </>
                )
            })}


            {/* ===================================================================================== */}

            {
                isAuthenticated ?
                    <div className="profile_section">
                        {props.data.MyApps.Apps.showStatus ? <div className="waffle"><WaffleApp waffleItemList={props.experience.data} expAppSelected={expAppSelected} /></div> : null}
                        {props.data.notification.showStatus ? <div className="notification"><Notification notificationList={props.data.notification.notificationList} /></div> : null}
                        {props.data.userProfile.showStatus ? <div className="user-menu"><ProfileMenu UserMenuList={props.data.userProfile.UserMenuList} /></div> : null}
                    </div>
                    : null
            }
        </div>
    )

}



const mapStateToProps = (state: any) => {
    return {
        waffleApp: state.waffleApp.waffleSelectedTitle,
        menuData: state.navigationReducer,
        experience: state.experience
    }
}

export default connect(mapStateToProps, { getExperienceData, expAppSelected, getMenuData })(NavBar);
