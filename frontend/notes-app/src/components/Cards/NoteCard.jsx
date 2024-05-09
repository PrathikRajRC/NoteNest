import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md';
import moment from "moment"; 
import '../../App.css';
const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return (
        <div className='note-card'>
            <div className='note-header'>
                <div>
                    <h6 className='note-title'>{title}</h6>
                    <span className='note-date'>{moment(date).format('Do MMM YYYY')}</span>
                </div>

                <MdOutlinePushPin 
                    className={`note-icon ${isPinned ? 'pinned' : 'unpinned'}`} 
                    onClick={onPinNote}
                />
            </div>

            <p className='note-content'>{content?.slice(0, 50)}</p>

            <div className='note-footer'>
                <div className='note-tags'>{tags.map((item) => `#${item}`)}</div>

                <div className='note-actions'>
                    <MdCreate 
                        className='note-icon edit'
                        onClick={onEdit}
                    />
                    <MdDelete 
                        className='note-icon delete'
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    );        
};

export default NoteCard;
