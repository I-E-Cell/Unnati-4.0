import Bento_Text from "./Bento_Text";
import Bento_main from "./Bento_main";


const Page = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col lg:flex-row px-14 justify-between">
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
