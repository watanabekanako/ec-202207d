import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr'

const fetcher = (url:any)=> fetch(url).then((res) => res.json());
function Page() {
    const { mutate } = useSWRConfig()
    const { data, error } = useSWR('http://localhost:8000/items', fetcher)

    const [sreach,setSreach] = React.useState([]);

    useEffect(() => {
        setSreach(data)
    },[]);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

const handleClick = (e: any) => {
    const result = data.filter((item:any) => {
      return item.name.match(e.target.value);
    });
    console.log(result);
    setSreach(result);
  };

    return (
        <>
        <Head>
        <title>商品一覧</title>
        </Head>
        <h1>ラクスヌードル</h1>
        <p>商品を検索する</p>
        <input
          type='text'
          onChange={(e) => handleClick(e)}
        />
        <button onClick={handleClick}>検索</button>
        <button>クリア</button>
        <table>
    <thead>
        <tr>
            <th>画像</th>
            <th>商品名</th>
            <th>価格</th>
        </tr>
    </thead>
    <tbody>
        {sreach.map((item:any) => {
            return (
                <tr>
                    <img src={item.img}></img>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
            )
        })}
    </tbody>
  </table>
        </>
    );
}

export default Page;
