import css from "../styles/Services.module.css"
import Image from "next/image"
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"


export default function Services() {
    return(
        <div className={css.container}>
            
            <div className={css.ServicesText}>
                <span style={{color: "var(--themeBrown)"}}>WHAT WE SERVE</span>
                <span>Your Favourite Suppliment</span>
                <span>Delivery Partner</span>
            </div>

            <div className={css.ServicesBox}>

            {/* First Service */}

                <div className={css.ServiceName}>
                    <div className={css.ImageWrapper}>
                        <Image src={s1} alt="" objectFit="cover" layout="intrinsic"/>
                    </div>
                    <span>Easy to Order</span>
                    <span>You Only need a few steps in food ordering.</span>

                </div>

            {/* Second Service */}

                <div className={css.ServiceName}>
                    <div className={css.ImageWrapper}>
                        <Image src={s2} alt="" objectFit="cover" layout="intrinsic"/>
                    </div>
                    <span>Deliver on Time</span>
                    <span>Delivery that is always on time even faster.</span>
                </div>

            {/* Third Service */}

                <div className={css.ServiceName}>
                    <div className={css.ImageWrapper}>
                        <Image src={s3} alt="" objectFit="cover" layout="intrinsic"/>
                    </div>
                    <span>No Compromise on Customer</span>
                    <span>Not only fast or us, customer convinience is also number one.</span>
                </div>
            </div>
        </div>
    )
};
