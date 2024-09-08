export default function Radio({ label, name, value, register }) {
    return (
        <div className='flex justify-start items-center gap-2'>
            <input
                type="radio"
                name={name}
                value={value}
                {...register}
                className="rounded-full w-4 h-4"
            />
            <p className="text-white font-semibold text-base">{label}</p>
        </div>
    );
}