import style from '../Profile.module.css'
const ProfileCards = () => {
    return(
        <>
        <div className={style.infoItems}>
            <div className={style.infoBlock}>
                Posts
            </div>
            <div className={style.infoBlock}>
                Planners
            </div>
            <div className={style.infoBlock}>
                Photos
            </div>
        </div>
        </>
    )
}

export default ProfileCards