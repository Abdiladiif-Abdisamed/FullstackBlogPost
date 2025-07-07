import supabase from "./supabase"


export const signUp = async (email, password, username="")=>{


let { data, error } = await supabase.auth.signUp({
  email: email,
  password: password,
})

console.log("data", data)

if(data?.user ){
    const {data : sessionData }= await supabase.auth.getSession()

    if(!sessionData?.session){
        return data
    }

    const displayName = username || email.split('@')[0]
    const { data: profileData, error: profileError } = await supabase
    .from('users')
    .insert({
        id: data.user.id,
        email: email,
        username: displayName,
        avatar_url: null
    })
    .select()
    .single()

    if(profileError){
        throw new Error(profileError.message || "Failed to create profile")
    }else{
        console.log("profileData", profileData)
    }
}
    return data
}
