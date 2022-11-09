import style from '../Profile.module.css'
import changeIco from '../../../../assets/profile/img/changeInput.svg'
const BioText = (props) => {
    const changeFormOnClick = () => {
        props.changeFormBio()
    }
    return(
        <>
        <div className={style.bioBlock}>
            Bio: {props.bio}
            <div>
                <img onClick={changeFormOnClick} className={style.changeIco} src={changeIco} alt=""/>
            </div>
        </div>
        </>
    )
}

export default BioText