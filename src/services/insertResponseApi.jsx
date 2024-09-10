import { supabase } from "./supabase";

export async function insertResponseApi({
    teamName,
    teamLeaderName,
    leaderBranchReg,
    leaderWhatsapp,
    leaderEmail,
    numberOfMembers,
    isThereGirl,
    isTeamInterBranch,
    member1Name,
    member1Reg,
    member1Whatsapp,
    member1Email,
    member2Name,
    member2Reg,
    member2Whatsapp,
    member2Email,
    referral
}) {
    const { data, error } = await supabase
        .from('responses')
        .insert([
            {
                teamName: teamName,
                teamLeaderName: teamLeaderName,
                leaderBranchReg: leaderBranchReg,
                leaderWhatsapp: leaderWhatsapp,
                leaderEmail: leaderEmail,
                numberOfMembers: numberOfMembers,
                isThereGirl: isThereGirl,
                isTeamInterBranch: isTeamInterBranch,
                member1Name: member1Name,
                member1Reg: member1Reg,
                member1Whatsapp: member1Whatsapp,
                member1Email: member1Email,
                member2Name: member2Name,
                member2Reg: member2Reg,
                member2Whatsapp: member2Whatsapp,
                member2Email: member2Email,
                referral: referral
            },
        ])
        .select();

    return { data, error };
}