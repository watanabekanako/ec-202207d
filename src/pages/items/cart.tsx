// import Head from 'next/head';
// import useSWR, { useSWRConfig } from 'swr';

// const fetcher = (url: any) => fetch(url).then((res) => res.json());

// function CartPage() {
//   const { data, error } = useSWR(
//     'http://localhost:3000/items/:slug',
//     fetcher
//   );

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;

//   return (
//     <>
//       <Head>
//         <title>ラクスヌードル</title>
//       </Head>

//       <h1 className="page-title">ショッピングカート</h1>

//       <div className="row">
//         <table className="striped">
//           <thead>
//             <tr>
//               <th className="cart-table-th">商品名</th>
//               <th>サイズ、価格(税抜)、数量</th>
//               <th>トッピング、価格(税抜)</th>
//               <th>小計</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td className="cart-item-name">
//                 <div className="cart-item-icon">
//                   <img src="img/1.jpg" />
//                 </div>
//                 <span>ハワイアンパラダイス</span>
//               </td>

//               <td>
//                 <span className="price">&nbsp;Ｌ</span>
//                 &nbsp;&nbsp;2,380円 &nbsp;&nbsp;1個
//               </td>

//               <td>
//                 <ul>
//                   <li>ピーマン300円</li>
//                   <li>オニオン300円</li>
//                   <li>あらびきソーセージ300円</li>
//                 </ul>
//               </td>

//               <td>
//                 <div className="text-center">3,280円</div>
//               </td>

//               <td>
//                 <button className="btn" type="button">
//                   <span>削除</span>
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="row cart-total-price">
//         <div>消費税:8,000円</div>
//         <div>ご注文金額合計:38,000円 (税込)</div>
//       </div>

//       <div className="row order-confirm-btn">
//         <button
//           className="btn"
//           type="button"
//           onClick="location.href='order_confirm.html'"
//         >
//           <span>注文に進む</span>
//         </button>
//       </div>
//     </>
//   );
// }

// export default CartPage;
