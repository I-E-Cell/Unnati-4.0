// import React from 'react';
import Questions from './questions';
import Content from './content';

const Faq = () => {
  return (
    <div className='flex flex-col lg:flex-row px-14 justify-between'>
      <div className='flex w-full lg:max-w-[35%] items-start justify-center mb-8 lg:mb-0'>
        <Content />
      </div>
      <div className='flex w-full lg:max-w-[60%] items-start justify-center'>
        <Questions />
      </div>
    </div>
  );
}

export default Faq;
