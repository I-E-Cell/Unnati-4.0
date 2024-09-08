import Bento_Text from "./Bento_Text";
import Bento_main from "./Bento_main";


const Page = () => {
  return (
    <div className="bg-formGradient flex justify-center ">
      <div className="flex flex-row h-[571px] w-[944px] justify-between items-center mt-[100px]">
        <div className="h-full flex items-center justify-center">
          <Bento_Text />
        </div>
        <div className="h-full col-span-[100px] flex justify-center">
          <Bento_main />
        </div>
      </div>
    </div>
  );
};

export default Page;
