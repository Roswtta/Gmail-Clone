import React from 'react';
import './EmailRow.css'
import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import StarBorderOutlined from '@material-ui/icons/StarBorderOutlined'
import LabelImportOutlined from '@material-ui/icons/LabelImportantOutlined'
import LabelImportantOutlined from '@material-ui/icons/LabelImportantOutlined';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { selectMail } from '../features/mailSlice';

const EmailRow = ({ id, title, subject, description, time}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                id, 
                title, 
                subject, 
                description, 
                time,
            })
        );
        
        navigate("/mail")
    };

    return (
        <div onClick={openMail} className='emailRow'>
            <div className='emailRow__options'>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <h3 className='emailRow__title'>
                {title}
            </h3>
            <div className='emailRow__message'>
                <h4>
                    {subject}
                    <span className='emailRow__description'>
                        {description}
                    </span>
                </h4>
            </div>
            <div className='emailRow__time'>
                {time} 
            </div>
        </div>
    );
}

export default EmailRow;
