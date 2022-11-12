import React from 'react'
import style from '../Profile.module.css'
import saveBioIco from '../../../../assets/profile/img/check-mark.svg'
import axios from 'axios'

const BioChanger = (props) => {
    let bioRef = React.createRef()
    const changeFormOnClick = async () => {
        axios.get(`http://localhost:3001/api-user/change-bio?bio=${bioRef.current.value}&username=${props.user.username}`).then((res) => {
            props.changeBio(bioRef.current.value)
            props.changeFormBio()
        })
    }
    return (
        <>
            <div className={style.bioBlock}>
                Bio: <textarea ref={bioRef} placeholder='Write new bio'></textarea>
                <div>
                    <img onClick={changeFormOnClick} className={style.changeIco} src={saveBioIco} alt="" />
                </div>
            </div>
        </>
    )
}

export default BioChanger