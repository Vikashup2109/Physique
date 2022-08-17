import { UilShoppingBag } from '@iconscout/react-unicons';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/Logo.png';
import Cart from '../pages/cart';
import { useStore } from '../store/store';
import css from '../styles/Header.module.css';

export default function Header() {
    const state = useStore((state) => state)
    const items = useStore((state)=>state.cart.wheys.length)

    return(
        <div className={css.header}>
            
            {/* Logo Side */}
            <div className={css.logo}>
                <Image src ={Logo} alt ="" width={180} height={90}/>
            </div>

            {/* Mid Side */}
            <div>
                <ul className={css.midSide}>
                    <li>
                        <Link href="/" >Home</Link></li>
                    <li>    <Link href="/" > Products</Link></li>
                    <li>Contacts</li>
                </ul>
            </div>

            {/* Right Side */}
            <div className={css.rightSide}>
                <Link href= "/cart">
                <div className={css.cart}>
                    <UilShoppingBag/>
                    <div className={css.badge}>{items}</div>
                </div>
                </Link>
            </div>
        </div>
    )
};
