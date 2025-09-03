import {create} from "zustand"

export const useSignUpStore:any = create( (set:any) => ( {
    signUpDetails: {
        name: "",
        username: "",
        email: "",
        password: ""
    },
    setSignUpDetails: (newSignUpDetails:any) => set((state:any) =>({ signUpDetails:({...state.signUpDetails, ...newSignUpDetails })}))
}))

export const useLoginStore:any = create( (set:any) => ( {
    loginDetails : {
        identity: "",
        password: ""
    },
    setLoginDetails: (newLoginDetails:any) => set((state:any) => ({ loginDetails:({...state.loginDetails, ...newLoginDetails})}))
}))