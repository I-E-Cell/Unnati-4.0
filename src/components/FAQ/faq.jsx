// import React from 'react';
import Questions from './questions';
import Content from './content';

const Faq = () => {
  return (
    <div className='flex px-14 justify-between'>
      <div className='flex max-w-[35%] items-start justify-center'>
        <Content />
      </div>
      <div className='flex max-w-[60%] items-start justify-center'>
        <Questions />
      </div>
    </div>
  );
}

export default Faq;
