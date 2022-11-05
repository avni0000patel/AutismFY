import React from 'react'
import style from '../Profile.module.css'
import saveBioIco from '../../../../assets/profile/img/check-mark.svg'

const BioChanger = (props) => {
    let bioRef = React.createRef()
    const changeFormOnClick = () => {
        props.changeFormBio()
        props.changeBio(bioRef.current.value)
    }
    return (
        <>
        <div className={style.bioBlock}>
            Bio: <textarea ref={bioRef} placeholder='Write new bio'></textarea>
            <div>
                <img onClick={changeFormOnClick} className={style.changeIco} src={saveBioIco} alt=""/>
            </div>
        </div>
        </>
    )
}

export default BioChanger