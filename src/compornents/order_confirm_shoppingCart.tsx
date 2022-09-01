import useSWR, { useSWRConfig } from 'swr'
import Link from "next/link"; 
import React, { useState } from 'react';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

// 仮表示
export const ShoppingCart = () => {
  
  const [total, SetTotal] = useState("")

  const { data, error, mutate } = useSWR("http://localhost:8000/cartItems", fetcher);

  if (error) return (
    <div>An error has occurred.</div>
  );
  if (!data) return (
    <>
      <div>Loading...</div>

    </>
  );
  mutate();
  console.log(data[0].options)
  return (
    <div className="row">
      <div
        className="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12"
      >
        <h3 className="text-center">注文内容確認</h3>
        <table className="table table-striped item-list-table">
          <tbody>
            {
              data.map((data: any, index: any) => {
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <th>
                        <div className="text-center">商品名</div>
                      </th>
                      <th>
                        <div className="text-center">サイズ、価格(税抜)、数量</div>
                      </th>
                      <th>
                        <div className="text-center">トッピング、価格(税抜)</div>
                      </th>
                      <th>
                        <div className="text-center">小計</div>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <div className="center">
                          <img
                            src={data.img}
                            className="img-responsive img-rounded item-img-center"
                            width="100"
                            height="300"
                          /><br />
                          {data.name}
                        </div>
                      </td>
                      <td>
                        <span className="price">&nbsp;Ｌ</span>&nbsp;&nbsp;{data.price}円
                        &nbsp;&nbsp;{data.quantity}個
                      </td>
                      <td>
                        <ul>
                          {data.options.map((option:any,index:any)=> {
                            return(
                              <li key={index}>{option}&nbsp;300円</li>
                            )
                          })}
                          {/* <li>ピーマン300円</li>
                          <li>オニオン300円</li>
                          <li>あらびきソーセージ300円</li> */}
                        </ul>
                      </td>
                      <td>
                        <div className="text-center">{data.subtotal}円</div>
                      </td>
                    </tr>
                  </React.Fragment >
                )
              })
              
            }
          </tbody>
        </table>
      </div>
    </div>

  )
}
