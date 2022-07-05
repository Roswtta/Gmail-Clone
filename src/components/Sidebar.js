import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'
import Add from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import Inbox from '@material-ui/icons/Inbox';
import Star from '@material-ui/icons/Star';
import AccessTime from '@material-ui/icons/AccessTime';
import LabelImportant from '@material-ui/icons/LabelImportant';
import NearMe from '@material-ui/icons/NearMe';
import Note from '@material-ui/icons/Note';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Person from '@material-ui/icons/Person';
import Duo from '@material-ui/icons/Duo';
import Phone from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux/es/exports';
import { openSendMessage } from '../features/mailSlice';

const Sidebar = () => {
    const dispatch = useDispatch();

    return (
        <div className='sidebar'>
            <Button 
                startIcon={<Add fontsize="large" />}
                className="sidebar__compose"
                onClick={() => dispatch(openSendMessage())}
            >
                Compose
            </Button>

            <SidebarOption 
                Icon={Inbox} 
                title="Inbox" 
                number={10} 
                selected={true} 
            /> 
            <SidebarOption 
                Icon={Star} 
                title="Starred" 
                number={20} 
            /> 
            <SidebarOption 
                Icon={AccessTime}
                title="Snoozed"
                number={30}
            />
            <SidebarOption 
                Icon={LabelImportant}
                title="Important"
                number={40}
            />
            <SidebarOption 
                Icon={NearMe}
                title="Sent"
                number={50}
            />
            <SidebarOption 
                Icon={Note}
                title="Drafts"
                number={60}
            />
            <SidebarOption 
                Icon={ExpandMore}
                title="More"
                number={70}
            />   
            
            <div className='sidebar__footer'>
                <div className='sidebar__footerIcons'>
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
