import style from './Profile.module.css';

import profilePhoto from '../../../assets/profile/img/ProfilePhoto.png';
import followersIco from '../../../assets/profile/img/followers.svg';
import followingIco from '../../../assets/profile/img/following.svg';
import uploadIco from '../../../assets/profile/img/upload.svg';
import menuIco from '../../../assets/profile/img/menu.svg';
import BioText from './BioBlock/BioText';
import BioChanger from './BioBlock/BioChange';
import ProfileCards from './ProfileCards/ProfileCards';

const Profile = (props) => {
    console.log(props)
    return (
        <>
            <div className={style.profileBlock}>
                <img className={style.imgProfile} src={profilePhoto} alt="" />
                <div className={style.follAndBio}>
                    <div className={style.profileInfo}>
                        <div className={style.follBlock}>
                            Followers:<b>{props.profile.followers}</b>
                            <img className={style.imgFoll} src={followersIco} alt="" />
                        </div>
                        <div className={style.follBlock}>
                            Following:<b>{props.profile.following}</b>
                            <img className={style.imgFoll} src={followingIco} alt="" />
                        </div>
                    </div>
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
            <ProfileCards />
        </>
    )
}

export default Profile