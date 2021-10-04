import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faAddressCard,} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
        <div className="grid grid-cols-3 mt-20 bg-black text-yellow-400 p-10">
            <div>
            <h1 className="text-3xl font-bold">Life-sKILLS</h1>
            <p className="text-x pr-16 mt-5">Discuss with the tutee the amount of time necessary to complete each part of their task.</p>
            </div>
            <div className="contact">
                <h1 className="text-3xl font-bold">Contact us</h1>
                <p className="text-xl mt-6"> <FontAwesomeIcon icon={faPhone} />  +880178239</p>
                <p className="text-xl mt-2"> <FontAwesomeIcon icon={faAddressCard} />  teckpara,Cox"s bazar</p>

            </div>
<div className="icons">
    <h1 className="text-3xl font-bold mb-4">Follow Us</h1>
    <FontAwesomeIcon className="text-3xl border-white mr-3 hover:bg-white rounded-full" icon={faFacebook} />
    <FontAwesomeIcon className="text-3xl text-yellow-400 mr-3 hover:bg-white rounded-full" icon={faTwitter} />
    <FontAwesomeIcon className="text-3xl text-yellow-400 mr-3 hover:bg-white rounded-full" icon={faLinkedin} />
    <FontAwesomeIcon className="text-3xl text-yellow-400 mr-3 hover:bg-white rounded-full" icon={faGithub} />


</div>
</div>
<hr className="text-center w-2/3" />

<p className="text-center bg-black text-yellow-400 p-4">copyright &copy; all rights reserved</p>
        
        </div>
    );
};

export default Footer;