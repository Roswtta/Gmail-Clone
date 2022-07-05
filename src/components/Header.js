import React from 'react';
import './Header.css'
import Menu from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Apps from '@material-ui/icons/Apps';
import Notifications from '@material-ui/icons/Notifications';


const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <Menu />
                </IconButton>
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
                alt=""
                />
            </div>

            <div className='header__middle'>
                <Search />
                <input placeholder='Search Gmail' type='text' />
                <ArrowDropDown className='header__inputCare' />
            </div>

            <div className='header__right'>
                <IconButton>
                    <Apps />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                <Avatar />
            </div>
        </div>
    );
}

export default Header;
