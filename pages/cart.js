import { useStore } from "../store/store";
import Layout from "../components/layout";
import css from "../styles/Cart.module.css"
import { urlFor } from "../lib/client";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function Cart() {
    const CartData = useStore((state) => state.cart)
    const RemoveItem = useStore((state) => state.removeWhey)
    const handleRemoveItems = (i) => {
        RemoveItem(i);
        toast.error("Item Removed")
    }

    return (
        <Layout>
            <div className={css.container}>
                
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>Whey</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={css.tableBody}>
                            {CartData.wheys.length > 0 &&
                            CartData.wheys.map((whey, i) =>{
                                
                                const src = urlFor(whey.image).url()
                                
                                return (
                                    <tr key={i}>
                                        <td className={css.ImageTd}>
                                            <Image
                                            loader = {()=> src}
                                            src={src}
                                            alt=""
                                            objectFit = "cover"
                                            width={60}
                                            height={60}/>
                                        </td>
                                        
                                        <td>
                                            {whey.name}
                                        </td>
                                        
                                        <td>
                                            {
                                                whey.size === 0 ?
                                                "497 g" :
                                                whey.size === 1 ?
                                                "997 g" :
                                                "1997g"
                                            }
                                        </td>

                                        <td>
                                            {whey.price}
                                        </td>

                                        <td>
                                            {whey.quantity}
                                        </td>

                                        <td>
                                            {whey.price * whey.quantity}
                                        </td>
                                        <td className={css.RemoveItem}
                                        onClick = {()=> handleRemoveItems(i)}
                                        >X</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className={css.summary}>

                </div>
            </div>
            <Toaster />
        </Layout>
    )
};
