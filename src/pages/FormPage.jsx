import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FormContainer from "../components/Form/FormContainer";

const queryClient = new QueryClient();

export default function FormPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <FormContainer />
        </QueryClientProvider>
    );
}