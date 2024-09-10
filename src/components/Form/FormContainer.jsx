import Form from "./Form";
import FormBanner from "./FormBanner";

export default function FormContainer() {
    return (
        <div className="w-full xs:p-8 lg:p-16 flex lg:flex-row lg:gap-36 xs:flex-col-reverse xs:gap-16">
            <Form />
            <FormBanner />
        </div>
    );
}  