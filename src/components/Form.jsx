import Checkbox from "./Checkbox";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import { useForm } from 'react-hook-form'

export default function Form() {
    const { register, getValues, handleSubmit } = useForm({
        defaultValues: {
            teamName: '',
            teamLeaderName: '',
            leaderBranchName: '',
            leaderWhatsapp: '',
            leaderEmail: '',
            numberOfMembers: '',
            isThereGirl: false,
            isInterBranch: false
        }
    });

    function onSubmit() {
        console.log(getValues());
    }

    return (
        <div className="w-full flex flex-col gap-4">
            <FormInput
                label="Team Name"
                placeholder="Enter Your Team Name"
                register={register('teamName', {
                    required: true
                })}
            />
            <FormInput
                label="Team Leader’s Name"
                placeholder="Enter Team Leader’s Name"
                register={register('teamLeaderName', {
                    required: true
                })}
            />
            <FormInput
                label="Leader’s Branch & Reg. No."
                placeholder="Enter Team Leader’s Name and Reg. No."
                register={register('leaderBranchName', {
                    required: true
                })}
            />
            <FormInput
                label="Leader’s WhatsApp No."
                placeholder="Enter Team Leader’s WhatsApp No."
                register={register('leaderWhatsapp', {
                    required: true
                })}
            />
            <FormInput
                label="Leader’s E-mail"
                placeholder="Enter Team Leader’s E-mail"
                register={register('leaderEmail', {
                    required: true
                })}
            />
            <FormInput
                label="No. of members in team"
                placeholder="Enter The Number Of Members In Your Team"
                register={register('numberOfMembers', {
                    required: true,
                    // validate: (value) => {
                    //     return typeof(value) === 'number'
                    // }
                })}
            />
            <Checkbox
                label="Is There A Girl Member In Your Team?"
                register={register('isThereGirl', {
                    required: false
                })}
            />
            <Checkbox
                label="Is Your Team Interbranch?"
                register={register('isInterBranch', {
                    required: false
                })}
            />
            <SubmitButton onClick={handleSubmit(onSubmit)} />
        </div>
    );
}