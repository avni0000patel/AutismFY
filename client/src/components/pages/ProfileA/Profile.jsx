import style from './Profile.module.css'

import profilePhoto from '../../../assets/profile/img/ProfilePhoto2.png'
import followersIco from '../../../assets/profile/img/followers.svg'
import followingIco from '../../../assets/profile/img/following.svg'
import uploadIco from '../../../assets/profile/img/upload.svg'
import menuIco from '../../../assets/profile/img/menu.svg'

import UploadAvatar from './UploadAvatar/UploadAvatar'
import BioText from './BioBlock/BioText'
import BioChanger from './BioBlock/BioChange'
import ProfileCards from './ProfileCards/ProfileCards'

const Profile = (props) => {
    console.log(props)
    return(
        <>
            <div className={style.profileBlock}>
            {!props.profile.changer? <img className={style.imgProfile} src={'http://localhost:3001/static/img/'} alt=""/> : <UploadAvatar setProfile={props.setProfile} reloadWithImg={props.changeFormBio}/>}
                <div className={style.follAndBio}>
                    <div className={style.profileInfo}>
                    <div className={style.follBlock}>
                        Followers:<b>{props.profile.followers}</b>
                        <img className={style.imgFoll} src={followersIco} alt=""/>
                    </div>
                    <div className={style.follBlock}>
                        Following:<b>{props.profile.following}</b>
                        <img className={style.imgFoll} src={followingIco} alt="" />
                    </div>
                    </div>
                    <div className={style.profileName}>{props.profile.name}</div>
                    {!props.profile.changer ?
                        <BioText 
                            changeFormBio={props.changeFormBio}
                            bio={props.profile.bio}
                        /> : <BioChanger
                                changeFormBio={props.changeFormBio}
                                changeBio={props.changeBio}
                        />
                    }
                </div>
                <div className={style.blockIcons}> 
                    <img className={style.menuItems} src={uploadIco} alt="" />
                    <img className={style.menuItems} src={menuIco} alt="" />
                </div>
            </div>
            <ProfileCards/>
    </>
    )
}

export default Profile