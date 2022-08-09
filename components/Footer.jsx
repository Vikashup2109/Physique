import css from '../styles/Footer.module.css'
import Image from 'next/image'
import Logo from "../assets/Logo.png"
import {UilFacebook, UilInstagram, UilTwitter} from"@iconscout/react-unicons";

export default function Footer() {
    return(
        <div className={css.container}>
            <span>ALL RIGHT RESERVED</span>
            <div className={css.social}>
                <UilFacebook size={50}/>
                <UilInstagram size={50}/>
                <UilTwitter size={50}/>
            </div>
            <div className={css.logo}>
                <Image src={Logo} alt="" width={200} height={100} />
            </div>
        </div>
    )
};
