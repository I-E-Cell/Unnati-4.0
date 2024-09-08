import Form from "./Form";
import FormBanner from "./FormBanner";

export default function FormContainer() {
    return (
        <div className="w-[944px] h-[604px] xs:p-8 lg:p-16 flex lg:flex-row lg:gap-36 xs:flex-col-reverse xs:gap-16 mt-[100px] pr-[100px]">
            <Form />
            <FormBanner />
        </div>
    );
}  