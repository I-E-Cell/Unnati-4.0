import CardOne from './card1';
import CardTwo from './card2';

const RuleBook = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-col lg:flex-row gap-6 sm:gap-[10%]">
        <div className="w-full sm:w-1/2 flex sm:justify-center mb-0 sm:mb-4">
          <CardOne />
        </div>
        <div className="w-full sm:w-1/2 flex sm:justify-center">
          <CardTwo />
        </div>
      </div>
    </div>
  );
};

export default RuleBook;