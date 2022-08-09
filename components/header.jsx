import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'

export default function Header() {
    return(
        <div className={css.header}>
            
            {/* Logo Side */}
            <div className={css.logo}>
                <Image src ={Logo} alt ="" width={180} height={90}/>
            </div>

            {/* Mid Side */}
            <div>
                <ul className={css.midSide}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contacts</li>
                </ul>
            </div>

            {/* Right Side */}
            <div className={css.rightSide}>
                <div className={css.cart}>
                    <UilShoppingBag/>
                    <div className={css.badge}>1</div>
                </div>
            </div>
        </div>
    )
};
