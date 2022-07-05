import React from 'react';
import './Mail.css'
import Header from './Header';
import './Header.css'
import Sidebar from './Sidebar';
import './Sidebar.css'
import { IconButton } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack'
import MovetoInbox from '@material-ui/icons/MoveToInbox'
import Error from '@material-ui/icons/Error'
import Delete from '@material-ui/icons/Delete'
import Email from '@material-ui/icons/Email'
import WatchLater from '@material-ui/icons/WatchLater'
import CheckCircle from '@material-ui/icons/CheckCircle'
import LabelImportant from '@material-ui/icons/LabelImportant'
import MoreVert from '@material-ui/icons/MoreVert'
import { useNavigate } from 'react-router';
import UnfoldMore from '@material-ui/icons/UnfoldMore'
import Print from '@material-ui/icons/Print'
import ExitToApp from '@material-ui/icons/ExitToApp'
import { selectOpenMail } from '../features/mailSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Mail = () => {
    const navigate = useNavigate();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className='app'>
                <Header />
                
            <div className='body'>
                <Sidebar />
                
                <div className='mail'>
                    <div className='mail__tools'>
                        <div className='mail__toolsLeft'>
                            <IconButton onClick={() => navigate('/')}>
                                <ArrowBack />
                            </IconButton>

                            <IconButton>
                                <MovetoInbox />
                            </IconButton>

                            <IconButton>
                                <Error />
                            </IconButton>
                            
                            <IconButton>
                                <Delete />
                            </IconButton>

                            <IconButton>
                                <Email />
                            </IconButton>

                            <IconButton>
                                <WatchLater />
                            </IconButton>

                            <IconButton>
                                <CheckCircle />
                            </IconButton>

                            <IconButton>
                                <LabelImportant />
                            </IconButton>

                            <IconButton>
                                <MoreVert />
                            </IconButton>
                        </div>
                        
                        <div className='mail__toolsRight'>
                            <IconButton>
                                <UnfoldMore />
                            </IconButton>

                            <IconButton>
                                <Print />
                            </IconButton>

                            <IconButton>
                                <ExitToApp />
                            </IconButton>
                        </div>
                    </div>
                        <div className='mail__body'>
                            <div className='mail__bodyHeader'>
                                <h2>{selectedMail?.subject}</h2>
                                <LabelImportant className='mail__important' />
                                <p>{selectedMail?.title}</p>
                                <p className='mail__time'>{selectedMail?.time}</p>
                            </div>

                            <div className='mail__message'>
                                <p>
                                    {selectedMail?.description}
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Mail;
