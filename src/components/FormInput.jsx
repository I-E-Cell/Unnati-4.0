export default function FormInput({ label, placeholder, register }) {

    return (
        <div className="w-full flex flex-col gap-1 ">
            <p className="text-white font-medium">{label}</p>
            <input
                {...register}
                placeholder={placeholder}
                className="px-6 py-3 bg-black border-2 rounded-md border-light-gray text-gray-e4"
            />
        </div>
    );
}