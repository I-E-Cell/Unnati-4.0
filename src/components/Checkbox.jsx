export default function Checkbox({ label, register }) {
    return (
        <div className='w-full flex justify-start items-center gap-2'>
            <input
                type="checkbox"
                {...register}
                className="rounded-full w-4 h-4"
            />
            <p className="text-white font-semibold text-base">{label}</p>
        </div>
    );
}