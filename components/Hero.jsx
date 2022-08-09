import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Dumbell from "../assets/Dumbell.png"
import HeroImage from "../assets/HeroImage.png"
import {UilPhone} from "@iconscout/react-unicons"



export default function Hero() {
    return (
        <div className={css.container}>
            {/* Left Side */}
            <div className={css.LeftSide}>
                <div className={css.SmallDumbell}>
                    <span>More Than Strong</span>
                    <Image src={Dumbell} alt="" width={30} height={30} objectFit='cover' layout='intrinsic'/>
                </div>
            <div className={css.HeroText}>
                <span>Be the Best </span>
                <span>In Delivering</span>
                <span>Your <span style={{color: "var(--themeBrown)"}}>WHEY</span></span>
            </div>
            <div className={css.miniText}>
                <span>We are Just trying to make your Physique look <span className={css.Hotter}>STRONGER</span> and <span className={css.Hotter}>HOTTER</span> of-course...</span>
            </div>
            <button className={`btn ${css.btn}`}> Get Started</button>
            </div>


            {/* Right Side */}
            <div className={css.RightSide}>
                <div className={css.ImageContainer}>
                <Image src={HeroImage} alt=""/>
                </div>

                <div className={css.ContactUs}>
                    <span>Contact Us</span>
                    <div>
                    <UilPhone color="White"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
