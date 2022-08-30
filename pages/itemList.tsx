import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
// import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import Image from 'next/image';

const fetcher = (url: any) => fetch(url).then((res) => res.json());
function Page() {
  // const { mutate } = useSWRConfig()
  const { data, error } = useSWR(
    'http://localhost:8000/items',
    fetcher
  );

  const [search, setSearch] = useState(data);
  const [kensaku, setKensaku] = useState('');

  // useEffect(() => {
  //     setSearch(data)
  // },[]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const handleClick = (e: any) => {
    const result = data.filter((item: any) => {
      return item.name.match(kensaku);
    });
    console.log('result', result);
    setSearch(result);
  };

  console.log('search', search);

const narabikae = [data];
  data.sort((a:any, b:any) => {
    return a.price < b.price ? -1 : 1;
});

  return (
    <>
      <Head>
        <title>商品一覧</title>
      </Head>
      <h1>ラクスヌードル</h1>
      <p>商品を検索する</p>
      <form>
        <input
          type="text"
          id="form1"
          name="kensaku"
          value={kensaku}
          onChange={(e) => setKensaku(e.target.value)}
        />
        <button type="button" onClick={(e) => handleClick(e)}>
          検索
        </button>
        <button  type="button" onClick={()=>setKensaku("")}>クリア</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>画像</th>
            <th>商品名</th>
            <th>価格</th>
          </tr>
        </thead>
        <tbody>
          {!search?.length && 
        //   検索ボタンが押された時
          (
            <p>該当の商品がありません</p>
          )}
          {!search?.length &&
            data.map((item: any) => {
              return (
                <tr>
                  <Image src={item.img} width={200} height={143} />
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}

          {search?.length > 0 &&
            search.map((item: any) => {
              return (
                <tr>
                  <Image src={item.img} width={200} height={143} />
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Page;
