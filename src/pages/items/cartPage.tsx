import Head from 'next/head';
import CartPage from '../../compornents/cart';
import { Nav } from "../../compornents/nav_format"

export default function Page() {
    return (
        <>
        <Head>
          <title>カート</title>
        </Head>
        <Nav name="ショッピングカート"/>
        <CartPage />       
        </>
    );
}
