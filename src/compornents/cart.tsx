import Head from 'next/head';
import Link from 'next/link';
import useSWR, { useSWRConfig } from 'swr';
import Image from 'next/image';
import { useState } from 'react';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

function CartPage() {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(
    'http://localhost:8000/cartItems',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>ラクスヌードル</title>
      </Head>

      <h1 className="page-title">ショッピングカート</h1>

      <div className="row">
        <table className="striped">
          <thead>
            <tr>
              <th className="cart-table-th">商品名</th>
              <th>サイズ、価格(税抜)、数量</th>
              <th>トッピング、価格(税抜)</th>
              <th>小計</th>
            </tr>
          </thead>

          <tbody>
            {data.map((cartitem: any) => {
              return (
                <tr>
                  <td className="cart-item-name">
                    <div className="cart-item-icon">
                      <Image
                        src={cartitem.img}
                        width={200}
                        height={143}
                      />
                    </div>
                    <span>{cartitem.name}</span>
                  </td>

                  <td>
                    <span className="price">
                      &nbsp;{cartitem.size}
                    </span>
                    {cartitem.price}円 {cartitem.quantity}個
                  </td>

                  <td>{cartitem.options}</td>

                  <div className="text-center">
                    {cartitem.subtotal}
                  </div>

                  <td>
                    <button
                      onClick={() => {
                        fetch(
                          `http://localhost:8000/cartItems/${cartitem.id}`,
                          { method: 'DELETE' }
                        );
                        mutate('http://localhost:8000/cartItems');
                      }}
                    >
                      [削除]
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row cart-total-price">
        <div>消費税:8,000円</div>
        <div>ご注文金額合計:38,000円 (税込)</div>
      </div>

      <div className="row order-confirm-btn">
        <button
          className="btn"
          type="button"
          onClick="location.href='order_confirm.html'"
        >
          <span>注文に進む</span>
        </button>
      </div>
    </>
  );
}

export default CartPage;

// function App() {
//   const [total, setTotal] = useState(0);

//   const addHandler = (sub:any) => {
//     setTotal(total + sub);
//   };

//   return (
//     <main>
//       {/* <Items addHandler={addHandler} /> */}
//       <p>合計{total}円</p>
//     </main>
//   );
// }
