import React from 'react'

import { connect } from 'react-redux'
import { setProfile, changeBio, changeFormBio, getPhoto, getBio } from '../../../redux/profileReducer'
import Profile from './Profile';
import axios from 'axios'
let mapStateToProps = (state) => ({
    profile: state.profileStore
})

let mapDispatchToProps = {
    setProfile,
    changeBio,
    changeFormBio,
    getPhoto,
    getBio
}

class ProfileApiContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/api-user/get-avatar?username=${this.props.user.username}`)
            .then((res) => {
                this.props.getPhoto(res.data.avatar)
                this.props.getBio(res.data.bio)
            })
    }
    setBio() {

    }
    render() {

        return (
            <Profile
                setBio={this.setBio}
                {...this.props}
            />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileApiContainer)