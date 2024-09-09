import React from 'react';
import Questions from './Questions';
import Content from './Content';

const Faq = () => {
  return (
    <div className='flex h-screen'>
      <div className='flex-1 max-w-[40%] p-4 flex items-center justify-center'>
        <Content />
      </div>
      <div className='flex-1 max-w-[60%] p-4 flex items-center justify-center'>
        <Questions />
      </div>
    </div>
  );
}

export default Faq;
