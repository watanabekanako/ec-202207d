import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `http://localhost:8000/items/${params.id} `
  );
  const item = await res.json();

  const optionres = await fetch(`http://localhost:8000/options`);

  const options = await optionres.json();

  return {
    props: {
      items: item,
      options: options,
    },
  };
}
export async function getItemsIds() {
  const items = await fetch('http://localhost:8000/items').then(
    (res) => res.json()
  );

  return items.map((item: { id: string }) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}
export async function getStaticPaths() {
  const paths = await getItemsIds();

  return {
    paths,
    fallback: false,
  };
}

export default function ItemDetail({ items, options }: any) {
  const [nameText, setNameText] = useState(items.name);
  const [descText, setDescText] = useState(items.description);
  const [priceText, setPriceText] = useState(items.price);
  const [idText, setIdText] = useState(items.id);
  const [imgText, setImgText] = useState(items.img);
  const [count, setCount] = useState(1);

  // const [selectOptions, setSelectOptions] = useState({});
  const [optionPrice, setOptionPrice] = useState(0);
  // const total = num;
  // const total = count * priceText;
  const total = count * priceText + optionPrice;

  /*
チェックボックスがチェックされたらオプションの合計金額をだす
初期表示がチェックがついているかいないかの確認
*/
  // function optionChanged(optionId: number, value: boolean) {
  //   // selectOptions[optionId] = value;
  //   setSelectOptions(selectOptions);
  // }
  // let optionTotalPrice = 0;
  // for (const id in selectOptions) {
  //   if (selectOptions[id]) {
  //     optionTotalPrice += selectOptions[id];
  //   }
  // }

  const onClickCreate = () => {
    return fetch('http://localhost:8000/cartItems', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        img: imgText,
        name: nameText,
        price: priceText,
        quantity: count,
        options: options.name,
        subtotal: total,
        // id: idText,
      }),
    })
      .then((res) => res.json)
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <form action="cart_list.html">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <h3 className="text-center">商品詳細</h3>
            <div className="row">
              <div className="col-xs-5">
                <Image
                  src={imgText}
                  width={200}
                  height={143}
                  className="img-responsive img-rounded item-img-center"
                />
              </div>

              <div className="col-xs-5">
                <div className="bs-component">
                  <h4>{nameText}</h4>
                  <br />
                  <br />
                  <p>{descText}</p>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-offset-2 col-xs-8">
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-12"></div>
                    <div className="col-sm-12">
                      <label className="radio-inline">
                        {priceText}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-offset-2 col-xs-8">
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="col-sm-12">
                        <label className="inputResponsibleCompany">
                          トッピング：&nbsp;1つにつき
                          <span>&nbsp;&nbsp;</span>
                          &nbsp;&nbsp;＋200円(税抜)
                        </label>
                        {options.map((option: any, index: any) => {
                          return (
                            <>
                              {/* オプションの値段を取得する方法を考える */}
                              <input
                                type="checkbox"
                                value="{option.price}"
                                className="checks"
                                // onChange={(e) => {
                                onClick={() => {
                                  setOptionPrice(200 + optionPrice);
                                }}
                              />

                              <p
                                className="checkbox-inline"
                                key={index}
                              >
                                {option.name}
                              </p>
                              <p key={index}>{option.price}</p>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-offset-2 col-xs-8">
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-5 col-sm-5">
                      <label>数量:</label>
                      <label className="control-label">
                        数量を選択してください
                      </label>
                      <select
                        name=""
                        className="form-control"
                        onChange={(e: any) =>
                          setCount(e.target.value)
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-offset-2 col-xs-10">
                <div className="form-group">
                  <span id="total-price">
                    合計金額
                    {total}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-offset-2 col-xs-3">
                <div className="form-group">
                  <p>
                    <Link href="http://localhost:3000/items/cartPage">
                      <button onClick={() => onClickCreate()}>
                        カートに入れる
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
