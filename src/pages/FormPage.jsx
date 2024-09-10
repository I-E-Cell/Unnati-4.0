import { QueryClientProvider } from "@tanstack/react-query";
import FormContainer from "../components/Form/FormContainer";

export default function FormPage() {
    return (
        <QueryClientProvider>
            <FormContainer />
        </QueryClientProvider>
    )
}
