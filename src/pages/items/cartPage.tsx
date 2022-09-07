import Head from 'next/head';
import CartPage from '../../compornents/cart';
import { Nav } from "../../compornents/nav_format"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Page() {
    return (
        <>
        <Head>
          <title>カート</title>
          <link rel="icon" href="/3506.png" />
        </Head>
        <div className={`${style.bodyColor}`}>
      <div className="container">
        <Nav name="ショッピングカート"/>
        <CartPage />   
        </div> </div> 
        </>
    );
}
