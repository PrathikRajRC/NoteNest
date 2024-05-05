import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md';
import moment from "moment"; 

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return (
        <div className='max-w-md border rounded p-3 bg-white transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105'>
            <div className='flex items-center justify-between'>
                <div>
                    <h6 className='text-xs font-medium'>{title}</h6>
                    <span className='text-xs text-slate-500'>{moment(date).format('Do MMM YYYY')}</span>
                </div>

                <MdOutlinePushPin 
                    className={`icon-btn ${isPinned ? 'text-primary' : 'text-slate-300'}`} 
                    onClick={onPinNote}
                />
            </div>

            <p className='text-xs text-slate-600 mt-1'>{content?.slice(0, 50)}</p>

            <div className='flex items-center justify-between mt-1'>
                <div className='text-xs text-slate-500'>{tags.map((item) => `#${item}`)}</div>

                <div className='flex items-center gap-1'>
                    <MdCreate 
                        className='icon-btn hover:text-green-600'
                        onClick={onEdit}
                    />
                    <MdDelete 
                        className='icon-btn hover:text-red-500'
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    );        
};

export default NoteCard;
