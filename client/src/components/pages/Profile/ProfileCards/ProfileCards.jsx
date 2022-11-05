import style from '../Profile.module.css'
const ProfileCards = () => {
    return(
        <>
        <div className={style.infoItems}>
            <div className={style.infoBlock}>
                All boards
            </div>
            <div className={style.infoBlock}>
                Planners
            </div>
            <div className={style.infoBlock}>
                Learning
            </div>
        </div>
        <div className={style.infoItems}>
            <div className={style.infoBlock}>
                Activities
            </div>
            <div className={style.infoBlock}>
                Photos
            </div>
            <div className={style.infoBlock}>
                Contact Info's
            </div>
        </div>
        </>
    )
}

export default ProfileCards