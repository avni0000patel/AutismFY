const SET_PROFILE = "SET-PROFILE"

const CHANGE_BIO = 'CHANGE-BIO'
const CHANGE_FORM_BIO = 'CHANGE-FORM-BIO'

let initialState = {
    imgSrc:'',
    followers: 16,
    following:36,
    bio:'Hello, my name is Lola. I am a mom of a 2 year autistic boy...',
    changer: false
}
const changeBioR = (state,action) => {
    return {
        ...state,
        bio: action.newBio
    }
}
const changeFormBioR = (state) => {
    return {
        ...state,
        changer: !state.changer
    }
}

const setProfileR = (state, action) => { 
    return { 
        ...state,
        ...action.profileInfo
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PROFILE: return setProfileR(state,action)
        case CHANGE_BIO: return changeBioR(state, action)
        case CHANGE_FORM_BIO: return changeFormBioR(state)
        default: return state
    }
}

export default profileReducer
export const setProfile = (profileInfo) => ({type:SET_PROFILE, profileInfo})
export const changeBio = (newBio) => ({type: CHANGE_BIO, newBio})
export const changeFormBio = () => ({type:CHANGE_FORM_BIO})