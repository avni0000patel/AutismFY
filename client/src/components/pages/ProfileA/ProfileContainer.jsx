import React from 'react'

import {connect} from 'react-redux'
import {setProfile, changeBio, changeFormBio,getPhoto} from '../../../redux/profileReducer'
import Profile from './Profile';
import axios from 'axios'
let mapStateToProps = (state) => ({
    profile:state.profileStore
})

let mapDispatchToProps = { 
    setProfile,
    changeBio,
    changeFormBio,
    getPhoto
}

class ProfileApiContainer extends React.Component{
    constructor(props){ 
        super(props)
    }
    componentDidMount(){
        console.log(this.props.user.username)
        axios.get(`http://localhost:3001/api-user/get-avatar?username=${this.props.user.username}`)
        .then((res)=>{
            this.props.getPhoto(res.data.avatar)
        })
        /*axios.post('http://localhost:3001/api-user/get',{
            _id:"this.props.user.posts[0].type"
        })
        .then((res) => { 
            this.props.setProfile(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })*/
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