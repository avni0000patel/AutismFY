import style from './Profile.module.css'


import UploadAvatar from './UploadAvatar/UploadAvatar'
import BioText from './BioBlock/BioText'
import BioChanger from './BioBlock/BioChange'
import ProfileCards from './ProfileCards/ProfileCards'

const Profile = (props) => {
    return(
        <>
            <div className={style.profileBlock}>
            {!props.profile.changer? <img className={style.imgProfile} src={`http://localhost:3001/static/img/${props.profile.imgSrc}`} alt=""/> : <UploadAvatar setProfile={props.setProfile} reloadWithImg={props.changeFormBio} user={props.user}/>}
                <div className={style.follAndBio}>
                    <div className={style.profileInfo}>
                    <div></div>
                    </div>
                    
                    <div className={style.profileName}>{props.profile.name}</div>
                    {!props.profile.changer ?
                        <BioText 
                            changeFormBio={props.changeFormBio}
                            bio={props.profile.bio}
                        /> : <BioChanger
                                user = {props.user}
                                changeFormBio={props.changeFormBio}
                                changeBio={props.changeBio}
                        />
                    }
                </div>
            </div>
            <ProfileCards/>
    </>
    )
}

export default Profile