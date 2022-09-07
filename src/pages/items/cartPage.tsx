import Head from 'next/head';
import CartPage from '../../compornents/cart';
import { Nav } from '../../compornents/nav_format';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  return (
    <>
      <Head>
        <title>カート</title>
      </Head>
      <Nav name="ショッピングカート" />
      <CartPage />
    </>
  );
}
