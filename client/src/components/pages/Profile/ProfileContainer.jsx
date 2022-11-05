import {connect} from 'react-redux'
import {changeBio, changeFormBio} from '../../../redux/profileReducer'
import Profile from './Profile';
let mapStateToProps = (state) => ({
    profile:state.profileStore
})

let mapDispatchToProps = { 
    changeBio,
    changeFormBio
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)