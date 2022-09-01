import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import Image from 'next/image';
import { isGeneratorFunction } from 'util/types';
import Link from 'next/link';

const fetcher = (url: any) => fetch(url).then((res) => res.json());
function Page() {
  const { data, error } = useSWR(
    'http://localhost:8000/items',
    fetcher
  );

  const [search, setSearch] = useState(data);
  const [kensaku, setKensaku] = useState('');
  const [gaitouDisplay, setGaitouDisplay] = useState('none');

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const handleClick = (e: any) => {
    const result = data.filter((item: any) => {
      return item.name.match(kensaku);
    });
    // console.log('result', result);
    setSearch(result);

    console.log("search",search)
    console.log("kensaku",kensaku)
    if (result.length > 0 || kensaku == '') {
      console.log("none")
      setGaitouDisplay('none');
    } else
    // if (!search || search.length === 0 ) 
    {
      console.log('block')
      setGaitouDisplay('block');
    }
  };

  // console.log('search', search);
  // console.log('kensaku', kensaku.length);

  const narabikae = [data];
  data.sort((a: any, b: any) => {
    return a.price < b.price ? -1 : 1;
  });

  return (
    <>
      <Head>
        <title>ラクスヌードル</title>
      </Head>
      <h1>商品一覧</h1>
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
        <button
          type="button"
          onClick={() => {
            setKensaku('');
            // setGaitouDisplay('none');
          }}
        >
          クリア
        </button>
      </form>
      <p id="gaitou" style={{ display: gaitouDisplay }}>
        該当の商品がありません
      </p>
      <table>
        <thead>
          <tr>
            <th>画像</th>
            <th>商品名</th>
            <th>価格</th>
          </tr>
        </thead>
        <tbody>
          {/* {!search?.length && 
          (
            <p id="gaitou" style={{display:"none"}}>該当の商品がありません</p>
          )} */}
          {!search?.length &&
            data.map((item: any,index:any) => {
              let number = index +1 ;
              return (
                <tr>
                  <Link href={`http://localhost:3000/items/${number}`}>
                  <Image src={item.img} width={200} height={143} />
                  </Link>
                  <Link href={`http://localhost:3000/items/${number}`}>
                  <td>{item.name}</td>
                  </Link>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          {search?.length > 0 &&
            search.map((item: any,index:any) => {
              let number = index +1 ;
              return (
                <tr>
                  <Link href={`http://localhost:3000/items/${number}`}>
                  <Image src={item.img} width={200} height={143} />
                  </Link>

                  <Link href={`http://localhost:3000/items/${number}`}>
                  <td>{item.name}</td>
                  </Link>
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
