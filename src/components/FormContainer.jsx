import Form from "./Form";
import FormBanner from "./FormBanner";

export default function FormContainer() {
    return (
        <div className="w-full xs:p-8 lg:p-16 flex lg:flex-row sm:flex-col gap-32">
            <Form />
            <FormBanner />
        </div>
    );
}  