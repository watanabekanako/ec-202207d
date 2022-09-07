import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Nav } from "../../compornents/nav_format";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Login() {


  const router = useRouter();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorDisplay, setErrorDisplay] = useState('none');

  const HandleSubmit = (e: any) => {
    e.preventDefault();

    const dataItem = {
      email: email,
      pass: pass,
    };
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json charset=utf-8',
      },
      body: JSON.stringify(dataItem),
    };
      fetch('/api/login', request)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if(data === 'OK') {            
            // router.push('/items/itemList');
            setErrorDisplay('none');

            let cookie = document.cookie;
            if(cookie.includes("status=shopping")){
              router.push("/items/order_confirm");
            }else{
              router.push('/items/itemList');
            }

          } else if(data === 'NG') {
            setErrorDisplay('block');
          }
        })
        .catch((error) => {
          alert('エラーが発生しました！');
        })


  };  

  return (
    <>
    <div className={`container`}>
    <Nav name="ログイン" />
      <h1>ログイン</h1>
      <p style={{ display: errorDisplay }}>
        メールアドレス、またはパスワードが間違っています
        </p>
      <form method="POST" onSubmit={HandleSubmit}>
        <p>
          メールアドレス:
        </p>
        <input
          id="email"
          type="email"
          name="email"
          placeholder='Email'
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p>パスワード:</p>
        <input
          id="pass"
          type="password"
          name="pass"
          placeholder='Password'
          value={pass}
          onChange={(event) => {
            setPass(event.target.value);
          }}
        />
        <br />
        <button type="submit">ログイン</button>
      </form>
      <Link href={'/items/register_user'}>
        <a>ユーザー登録はこちら</a>
      </Link>
      </div>
    </>
  );
}
