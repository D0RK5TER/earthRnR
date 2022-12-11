
import React from 'react';
import { Link } from 'react-router-dom'
import { useModal } from '../../context/Modal';
import gitcon from '../../assets/gitcon.png';
import linkcon from '../../assets/linkcon.png';
import './contact.css'
export default ContactUsModal;

function ContactUsModal() {
    const { closeModal } = useModal()
    return (

        <div id='myinfocont'>
            <div id="myinfoheader">

                <div id='loginexitbutt' onClick={() => closeModal()}>
                ⓧ
                </div>
                <div id='myinfosubheader'>
                    <div id='myheadtop'>Welcome to eartRnR!</div>
                    <div id='myheadbot'>No Us,&nbsp; Just Me</div>
                </div >
            </div>
            <div id='theline'>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex'></div>
                <div className='lined'></div>
                <div className='linex E'></div>
            </div>
            <div id='myinfopage'>
                <div className="gitcon" onClick={() => window.location = 'https://github.com/D0RK5TER/earthRnR'}>
                    <img src={gitcon}
                        className="gitcon"
                        style={{ float: 'left' }}
                        alt='my buttons'
                    />
                </div>
                <Link
                    id='dexter'
                    to='#'
                    onClick={(e) => {
                        window.location.href = "mailto:pdassaf@gmail.com"
                        e.preventDefault();
                    }}>
                    Email Dexter
                </Link>
                <div className="linkcon" onClick={() => window.location = 'https://www.linkedin.com/in/p-dexter-assaf-63a7a3252/'}>
                    <img src={linkcon}
                        alt='my buttons'
                    />
                </div>
            </div>
        </div>

    );
}