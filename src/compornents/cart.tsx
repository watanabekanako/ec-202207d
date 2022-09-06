import Head from 'next/head';
import Link from 'next/link';
import useSWR, { useSWRConfig } from 'swr';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';



const fetcher = (url: any) => fetch(url).then((res) => res.json());

function CartPage() {
  const router = useRouter();
  let total = 0;
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(
    'http://localhost:8000/cartItems',
    fetcher
  );

  const [moji, setMoji] = useState('none');
  const [botan, setBotan] = useState('none');

  useEffect(() => {
    if (data && data.length < 1) {
      console.log('文字表示');
      setMoji('block');
    } else {
      console.log('文字表示しない');
      setMoji('none');
    }

    if (data && data.length >= 1) {
      console.log('ボタン表示');
      setBotan('block');
    } else {
      console.log('ボタン表示しない');
      setBotan('none');
    }
  });


  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const Total = (props: any) => {
    let tax = props.total * 0.1;
    let totalPrice = tax + props.total;
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="form-group text-center">
            <span
              // id="total-price"
              style={{ display: botan }}
            >
              消費税：{tax}円
            </span>
            <br />
            <span
              style={{ display: botan }}
              // id="total-price"
            >
              ご注文金額合計：{totalPrice}円 (税込)
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>ラクスヌードル</title>
      </Head>

      <h1 className="page-title">ショッピングカート</h1>

      <div className="row">
        <table className="striped">
          <thead>
            <tr key={''}>
              <th className="cart-table-th">商品名</th>
              <th>価格(税抜)、数量</th>
              <th>トッピング、価格(税抜)</th>
              <th>小計</th>
            </tr>
          </thead>

          <tbody>
            {data.map((cartitem: any) => {
              return (
                <tr key={''}>
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
                      {/* &nbsp;{cartitem.size} */}
                    </span>
                    {cartitem.price}円 {cartitem.quantity}個
                  </td>

                  <td>
                    {cartitem.options
                      .filter((option: any) => option)
                      .map((option: any, index: any) => {
                        return (
                          // <li key={index}>{option}&nbsp;200円</li>
                          <li key={index}>
                            {option?.name}: {option?.price}円 ×
                            {option?.quantity}
                          </li>
                        );
                      })}
                  </td>
                  {/* <td>
                    {cartitem.options.map(
                      (option: any, index: any) => {
                        return (
                          <li key={index}>{option}&nbsp;200円</li>
                        );
                      }
                    )}
                  </td> */}

                  <td>
                    <span className="text-center">
                      {cartitem.subtotal}円
                    </span>
                  </td>

                  <td>
                    <button
                      onClick={async () => {
                        // let number = index + 1
                        await fetch(
                          `http://localhost:8000/cartItems/${cartitem.id}`,
                          { method: 'DELETE' }
                        ).then((res) => {
                          if (res.status === 200) {
                            mutate('http://localhost:8000/cartItems');
                          }
                        });
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
        <p style={{ display: 'none' }}>
          {data.map((data: any) => (total += data.subtotal))}
        </p>
      </div>
      <Total total={total} />

      <div className="row order-confirm-btn">
        {/* <Link href={`http://localhost:3000/items/order_confirm`}> */}
        <button
          className="btn"
          type="button"
          style={{ display: botan }}

          onClick={() => {
            let cookie = document.cookie;
            if (cookie.includes('userId')) {
              router.push('/items/order_confirm');
            } else {
              router.push('/items/loginpage');
              document.cookie = 'status=shopping';
            }
          }}
        >
          <span>注文に進む</span>
        </button>
        {/* </Link> */}
      </div>
      <p id="noneItem" style={{ display: moji }}>
        カートに商品がありません
      </p>
    </>
  );
}

export default CartPage;
