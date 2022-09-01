import Head from 'next/head';
import CartPage from '../../compornents/cart';

export default function Page() {
    return (
        <>
        <Head>
          <title>カート</title>
        </Head>
        <CartPage />
        </>
    );
}
