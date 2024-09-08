<<<<<<< HEAD
import Page from "../Bento/Page";
import FormContainer from "../FormContainer";
import Main_page from "../Main/Main_page";
=======
import Bento_main from "../Bento/Bento_main";
import Footer from "../footer/footer";
// import Parallaxmain from "../Parallex/Parallaxmain";
>>>>>>> 921abff (made faqs)
import EventCard from "../RoadMap/RoadMap_main";
import RuleBook from '../rulebook/ruleBook'
import Faq from "../FAQ/faq";

const Hero = () => {
  return (
    <div className="h-[6180px] w-[1201px]">
      <div className="flex flex-col mr-[75px]">
        <div className="mt-[100px] mb-[200px]">
          <Main_page/>
        </div>
        <div className="flex justify-center mb-[200px] mr-10">
          <EventCard />
        </div>
<<<<<<< HEAD
        <div className="w-[90%] flex justify-end mr-10">
          <RuleBook/>
        </div>
        <div className="mt-[120px]">
          <FormContainer/>
        </div>
        <div className="flex justify-center mt-[200px]">
          <Page/>
=======
        <div className="w-[100%]">
          <RuleBook/>
        </div>
        <div className="w-[100%] h-[600px]">
         <Faq/>
        </div>
        <div className="flex justify-center">
          <Bento_main />
>>>>>>> 921abff (made faqs)
        </div>
      </div>
    </div>
  );
};

export default Hero;
