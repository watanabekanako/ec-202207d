import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
import Image from 'next/image';

import Head from 'next/head';
import React from 'react';

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
  const [imgText, setImgText] = useState(items.img);
  const [total, setTotal] = useState(0);
  const addHandler = (sub: any) => {
    setTotal(total + sub);
  };
  return (
    <form action="cart_list.html">
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <h3 className="text-center">商品詳細</h3>
          <div className="row">
            <div className="col-xs-5">
              <p className="img-responsive img-rounded item-img-center">
                {/* <img src={imgText}></img> */}

                <Image src={imgText} width={200} height={143} />
              </p>
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
                      <input
                        type="radio"
                        name="responsibleCompany"
                        // checked="checked"
                      />
                      {/* <span className="price"></span> */}
                      {priceText}
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="responsibleCompany" />
                      <span className="price">&nbsp;Ｌ</span>
                      &nbsp;&nbsp;2,380円(税抜)
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
                      {options.map((option: any, index: any) => {
                        return (
                          <>
                            <input type="checkbox" value="" />
                            <p key={index}>{option.name}</p>
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
                      onChange={(e) =>
                        console.log('数量', e.currentTarget.value)
                      }
                      name="area"
                      className="form-control"
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
                <span id="total-price">合計金額{total}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-3">
              <div className="form-group">
                <p>
                  <input
                    className="form-control btn btn-warning btn-block"
                    type="submit"
                    value="カートに入れる"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
