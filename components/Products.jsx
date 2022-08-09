import css from "../styles/Products.module.css"
import { urlFor } from "../lib/client"
import Image from "next/image"
import Link from "next/link"

export default function Products({wheys}) {
    return(
        <div className={css.container}>
            <div className={css.heading}>
                <span>Our Products</span>
                <span>Products That Always</span>
                <span>Make You Stronger </span>
                <span>And Hotter of-course.</span>
            </div>
            <div className={css.products}>
    {/* Whey Protien Section */}
                <span>Whey Protiens</span>
                <div className={css.wheySection}>
                    {wheys.map((whey,id) => {

                        const src = urlFor(whey.image).url()
                        return(
                            <div className={css.whey} key={id}>

                                <Link href={`./whey/${whey.slug.current}`}>

                                    <div className={css.ImageWrapper}>
                                        <Image loader = {()=> src}
                                            src= {src} alt="" objectFit="cover"
                                            layout="fill"/>
                                    </div>
                                </Link>

                                <span>{whey.name}</span>
                                <span> <span style={{color: 'var(--themeBrown)'}}>Rs. </span>{whey.price[1]}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
};
