import { useMutation } from "@tanstack/react-query";
import Checkbox from "./Checkbox";
import FormInput from "./FormInput";
import Radio from "./Radio";
import SubmitButton from "./SubmitButton";
import { useForm } from 'react-hook-form'
import { insertResponseApi } from "./../../services/insertResponseApi";
import toast from "react-hot-toast";

export default function Form() {
    const { mutate } = useMutation({
        mutationKey: ['response'],
        mutationFn: async (data) => insertResponseApi(data),
        onSuccess: onSuccess,
        onError: onError
    });

    const { register, getValues, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            teamName: '',
            teamLeaderName: '',
            leaderBranchName: '',
            leaderWhatsapp: '',
            leaderEmail: '',
            numberOfMembers: 0,
            isThereGirl: false,
            isInterBranch: false,
            member1Name: '',
            member1RegNo: '',
            member1WhatsappNo: '',
            member1Email: '',
            member2Name: '',
            member2RegNo: '',
            member2WhatsappNo: '',
            member2Email: '',
            team: ''
        }
    });

    function onSuccess() {
        reset();
        toast.success('Response submitted successfully!');
    }

    function onError() {
        toast.error('Internal Server Error!');
    }

    function onSubmit() {
        const { teamName, teamLeaderName, leaderBranchName, leaderWhatsapp, leaderEmail, numberOfMembers, isThereGirl, isInterBranch, member1Name, member1RegNo, member1WhatsappNo, member1Email, member2Name, member2RegNo, member2WhatsappNo, member2Email, team } = getValues();

        mutate({
            teamName,
            teamLeaderName,
            leaderBranchReg: leaderBranchName,
            leaderWhatsapp,
            leaderEmail,
            numberOfMembers,
            isThereGirl,
            isTeamInterBranch: isInterBranch,
            member1Name,
            member1Reg: member1RegNo,
            member1Whatsapp: member1WhatsappNo,
            member1Email,
            member2Name,
            member2Reg: member2RegNo,
            member2Whatsapp: member2WhatsappNo,
            member2Email,
            referral: team
        });
    }

    return (
        <div className="w-full flex flex-col gap-8">
            <div className="w-full h-[600px] overflow-scroll flex flex-col gap-4">
                <FormInput
                    label="Team Name"
                    placeholder="Enter Your Team Name"
                    register={register('teamName', {
                        required: {
                            value: true,
                            message: 'Team name is required.'
                        }
                    })}
                    error={errors?.teamName?.message}
                />
                <FormInput
                    label="Team Leader’s Name"
                    placeholder="Enter Team Leader’s Name"
                    register={register('teamLeaderName', {
                        required: {
                            value: true,
                            message: 'Team Leader’s Name is required.'
                        }
                    })}
                    error={errors?.teamLeaderName?.message}
                />
                <FormInput
                    label="Leader’s Branch & Reg. No."
                    placeholder="Enter Team Leader’s Name and Reg. No."
                    register={register('leaderBranchName', {
                        required: {
                            value: true,
                            message: 'Leader’s Branch & Reg. No. is required.'
                        }
                    })}
                    error={errors?.leaderBranchName?.message}
                />
                <FormInput
                    label="Leader’s WhatsApp No."
                    placeholder="Enter Team Leader’s WhatsApp No."
                    register={register('leaderWhatsapp', {
                        required: {
                            value: true,
                            message: 'Leader’s WhatsApp No. is required.'
                        },
                        pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: 'Please provide a valid Mobile number'
                        }
                    })}
                    error={errors?.leaderWhatsapp?.message}
                />
                <FormInput
                    label="Leader’s E-mail"
                    placeholder="Enter Team Leader’s E-mail"
                    register={register('leaderEmail', {
                        required: {
                            value: true,
                            message: 'Leader’s E-mail is required.'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Enter a valid E-mail ID'
                        }
                    })}
                    error={errors?.leaderEmail?.message}
                />
                <FormInput
                    label="No. of members in team"
                    placeholder="Enter The Number Of Members In Your Team"
                    register={register('numberOfMembers', {
                        required: {
                            value: true,
                            message: 'Number of members in your team is required.'
                        },
                        max: {
                            value: 3,
                            message: 'Upto 3 members are allowed'
                        }
                    })}
                    error={errors?.numberOfMembers?.message}
                    type="number"
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
                <FormInput
                    label="Member 1 Name"
                    placeholder="Enter The Number Of Members In Your Team"
                    register={register('member1Name', {
                        required: {
                            value: true,
                            message: 'Member 1 Name is required.'
                        }
                    })}
                    error={errors?.member1Name?.message}
                />
                <FormInput
                    label="Member 1 Reg. No."
                    placeholder="Enter The Number Of Members In Your Team"
                    register={register('member1RegNo', {
                        required: {
                            value: true,
                            message: 'Member 1 Reg. No. is required.'
                        }
                    })}
                    error={errors?.member1RegNo?.message}
                />
                <FormInput
                    label="Member 1 WhatsApp No."
                    placeholder="Enter The Number Of Members In Your Team"
                    register={register('member1WhatsappNo', {
                        required: {
                            value: true,
                            message: 'Member 1 WhatsApp No. is required.'
                        },
                        pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: 'Please provide a valid Mobile number'
                        }
                    })}
                    error={errors?.member1WhatsappNo?.message}
                />
                <FormInput
                    label="Member 1 E-mail"
                    placeholder="Enter The Number Of Members In Your Team"
                    register={register('member1Email', {
                        required: {
                            value: true,
                            message: 'Member 1 E-mail is required.'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Enter a valid E-mail ID'
                        }
                    })}
                    error={errors?.member1Email?.message}
                />
                <FormInput
                    label="Member 2 Name"
                    placeholder="Enter The Number Of Members In Your Team"
                    register={register('member2Name', {
                        required: {
                            value: true,
                            message: 'Member 2 Name is required.'
                        }
                    })}
                    error={errors?.member2Name?.message}
                />
                <FormInput
                    label="Member 2 Reg. no."
                    placeholder="Enter The Number Of Members In Your Team"
                    register={register('member2RegNo', {
                        required: {
                            value: true,
                            message: 'Member 2 Reg. no. is required.'
                        }
                    })}
                    error={errors?.member2RegNo?.message}
                />
                <FormInput
                    label="Member 2 WhatsApp No."
                    placeholder="Enter The Number Of Members In Your Team"
                    register={register('member2WhatsappNo', {
                        required: {
                            value: true,
                            message: 'Member 2 WhatsApp No. is required.'
                        },
                        pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: 'Please provide a valid Mobile number'
                        }
                    })}
                    error={errors?.member2WhatsappNo?.message}
                />
                <FormInput
                    label="Member 2 Email"
                    placeholder="Enter The Number Of Members In Your Team"
                    register={register('member2Email', {
                        required: {
                            value: true,
                            message: 'Member 2 Email is required.'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Enter a valid E-mail ID'
                        }
                    })}
                    error={errors?.member2Email?.message}
                />
                <p className="text-white font-medium">Referral (only for E-cell&apos;s Team):</p>
                <div className="flex gap-4 items-center">
                    <Radio
                        label="Team A"
                        register={register('team', {
                            required: {
                                value: true,
                                message: 'This field is required'
                            }
                        })}
                        name='ecellTeam'
                        value='teamA'
                    />
                    <Radio
                        label="Team B"
                        register={register('team', {
                            required: {
                                value: true,
                                message: 'This field is required'
                            }
                        })}
                        name='ecellTeam'
                        value='teamB'
                    />
                    <p className="text-red-500 text-sm">{errors?.team?.message}</p>
                </div>
            </div>
            <SubmitButton onClick={handleSubmit(onSubmit)} />
        </div>
    );
}