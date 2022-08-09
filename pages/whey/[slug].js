import css from "../../styles/Whey.module.css"
import Layout from "../../components/layout"
import { client, urlFor } from "../../lib/client"
import Image from "next/image";
import LeftArrow from "../../assets/LeftArrow.png"
import RightArrow from "../../assets/RightArrow.png"
import { useState } from "react";

export default function Whey({ whey }) {

    const src = urlFor(whey.image).url()
    const [Size, setSize] = useState(1)
    const [Quantity, setQuantity] = useState(1)

    const handleQuantity = (type) => {
        type === "increase" 
        ? setQuantity((prev) => prev+1)
        : Quantity === 1 
        ? null
        : setQuantity((prev) => prev-1)
    }
    return (
        <Layout>
            <div className={css.container}>
                <div className={css.ImageWrapper}>
                    <Image
                        loader={() => src}
                        alt=""
                        src={src} layout="fill" objectFit="cover" width={80} height={80} />
                </div>

                <div className={css.RightSide}>
                    <span>{whey.name}</span>
                    <span>{whey.details}</span>
                    <span><span style={{ color: "var(--themeBrown)" }}>Rs. </span>{whey.price[Size]}</span>
                    <div className={css.size}>
                        <span>Size</span>
                        <div className={css.SizeVarients}>
                            <div
                                onClick={() => setSize(0)}
                                className={Size === 0 ? css.selected : ""}
                            >
                                497g
                            </div>
                            <div
                                onClick={() => setSize(1)}
                                className={Size === 1 ? css.selected : ""}
                            >
                                997g
                            </div>
                            <div
                                onClick={() => setSize(2)}
                                className={Size === 2 ? css.selected : ""}
                            >1997g</div>
                        </div>
                    </div>

                    {/* Quantity Counter */}
                    <div className={css.quantity}>
                        <span>Quantity</span>

                        <div className={css.counter}>
                            <Image src={LeftArrow} width={25}
                                height={20} alt="" objectFit="contain"
                                onClick={()=> handleQuantity("decrease")} 
                            />

                            <span>{Quantity}</span>

                            <Image src={RightArrow} width={25}
                                height={20} alt="" objectFit="contain"
                                onClick={()=> handleQuantity("increase")}
                            />

                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className={`btn ${css.btn}`}>
                        Add to Cart
                    </div>
                </div>

            </div>
        </Layout>
    )
};


export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="whey" && defined(slug.current)][].slug.current`
    );
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking', // can also be true or false
    }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const whey = await client.fetch(
        `*[_type=="whey" && slug.current == '${slug}'][0]`
    )
    return {
        // Passed to the page component as props
        props: { whey },
    }
}
