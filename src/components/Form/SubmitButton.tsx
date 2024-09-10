import React from 'react';
import arrow from './../../assets/arrow-right.png';

export default function SubmitButton({ onClick }) {
    return (
        <button
            title='submit'
            type='button'
            onClick={onClick}
            className='w-fit bg-blue py-3 px-6 rounded-3xl flex justify-between items-center gap-8'
        >
            <p className='text-white'>Submit</p>
            <img src={arrow} title='arrow' className='w-4' />
        </button>
    );
}