export default function FormInput({ label, placeholder, register, error, type='text' }) {

    return (
        <div className="w-full flex flex-col gap-1 p-1">
            <p className="text-white font-medium">{label}</p>
            <input
                type={type}
                {...register}
                placeholder={placeholder}
                className="px-6 py-4 bg-black border-[1px] rounded-md border-light-gray text-gray-e4"
            />
            {
                error && (<p className="text-red-500 text-sm">{error}</p>)
            }
        </div>
    );
}