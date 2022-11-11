import React from 'react'

import {connect} from 'react-redux'
import {setProfile, changeBio, changeFormBio} from '../../../redux/profileReducer'
import Profile from './Profile';
import axios from 'axios'
let mapStateToProps = (state) => ({
    profile:state.profileStore
})

let mapDispatchToProps = { 
    setProfile,
    changeBio,
    changeFormBio
}

class ProfileApiContainer extends React.Component{
    constructor(props){ 
        super(props)
    }
    componentDidMount(){
        axios.post('http://localhost:3001/api-posts/get',{
            _id:"this.props.user.posts[0].type"
        })
        .then((res) => { 
            this.props.setProfile(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        
        return (
            <Profile
                {...this.props}
            />
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProfileApiContainer)