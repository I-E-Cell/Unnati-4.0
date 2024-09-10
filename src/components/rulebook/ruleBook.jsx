import CardOne from './card1';
import CardTwo from './card2';

const RuleBook = () => {
  return (
    <div className="w-full md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full flex sm:justify-center">
          <CardOne />
        </div>
        <div className="w-full  sm:w-1/2 flex sm:justify-center">
          <CardTwo />
        </div>
      </div>
    </div>
  );
};

export default RuleBook;