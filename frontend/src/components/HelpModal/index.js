
import React from 'react';
import { useModal } from '../../context/Modal';
import './help.css'
export default HelpModal;

function HelpModal() {
    const { closeModal } = useModal()
    return (

        <div id='helpcont'>
            <div id="helpheader">

                <div id='loginexitbutt' onClick={() => closeModal()}>
                    ⓧ
                </div>
                <div id='helpsubheader'>
                    <div id='helpheadtop'>Need a Tour?</div>
                    <div id='helpheadbot'>Current Active Features:</div>
                </div >
            </div>

            <div id='helpbody'>
                <div id='firsttexth' className='firsthelp'>-<div>Login</div>&nbsp;or &nbsp;<div>Sign</div><div><div>-</div>Up</div>&nbsp; or use my account as the &nbsp;<div>Demo</div>&nbsp;<div>User</div>&nbsp; from the Drop Down Menu</div>
                <div id='smalltext' className='smallhelp'>Don't click the company Company Buttons unless you want to see other good projects!</div>
                <div id='help1' className='helptext boldhelp'>-<div>Create</div>&nbsp; more locations to rent to nobody for no money. Sign Up is free!</div>
                <div id='help2' className='helptext boldhelp'>-<div>Edit</div>&nbsp; the spots or just &nbsp;<div>Delete</div>&nbsp; them, no one is coming!</div>
                <div id='secondhelp' className='firsthelp  boldhelp'>-Feel free to peruse other "people's" locations and &nbsp;<div>Leave</div>&nbsp; or &nbsp;<div>Delete</div>&nbsp; your reviews</div>
                <div id='smalltext' className='smallhelp'>Sorry but you can't spam reviews or delete other peoples spots...</div>
                <div id='help3' className='helptext boldhelp'>-Go to your &nbsp;<div>Profile</div>&nbsp; <div>Page</div>&nbsp; for all you everything in one convienent heap!</div>
                <div id='help4' className='helptext boldhelp'>-Now you can &nbsp;<div>Add</div>&nbsp; <div>Images</div>&nbsp; to your locations and reviews or see the others.</div>
                <div id='help5' className='helptext boldhelp'>-<div>Randomized </div>&nbsp;<div>Dynamic</div>&nbsp;<div> Seeding</div> &nbsp;means every spot and review is a mad-lib!</div>
            </div>

        </div>

    );
}