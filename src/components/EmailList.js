import React, { useEffect } from 'react';
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Redo from '@material-ui/icons/Redo';
import MoreVert from '@material-ui/icons/MoreVert';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import KeyboardHide from '@material-ui/icons/Keyboard';
import Settings from '@material-ui/icons/Settings';
import Inbox from '@material-ui/icons/Inbox';
import People from '@material-ui/icons/People'
import LocalOffer from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import Section from './Section';
import './EmailList.css'
import { db } from './firebase/firebase';
import { useState } from "react";


const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot
        (snapshot => setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }))))
    }, [])
    
    return (
        <div className='emailList'>
            <div className='emailList__settings'>
                <div className='emailList__settingsLeft'>
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className='emailList__settingsRight'>
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>

            <div className='emailList__sections'>
                <Section Icon={Inbox} title='Primary' color='red' selected />
                <Section Icon={People} title='Social' color='#1A73E8' />
                <Section Icon={LocalOffer} title='Promotions' color='green' />
            </div>
            <div className='emailList__list'>
                {emails.map(({id, data: { to, subject, message, timestamp }}) => (
                    <EmailRow
                        id= {id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                    />
                ))}
                <EmailRow 
                    title="Twitch"
                    subject="Hey fellow streamer!!"
                    description="this is a test"
                    time="10pm"
                />
            </div>
            <div className='emailList__list'>
                <EmailRow 
                    title="Twitch"
                    subject="Hey fellow streamer!!"
                    description="lime terracotta lime terracotta lime terracotta"
                    time="10pm"
                />
            </div>
        </div>
    );
}

export default EmailList;
