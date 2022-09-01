import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
    return (
      fetch('/api/login', request)
        .then((response) => response.json())
        //           console.log(response.status); // 404
        // console.log(response.statusText); // Not Found
        // console.log(dataItem);
        .then((data) => {
          console.log(data);
          router.push('/itemList');
        })
        // .then((datas) => {
        // console.log(datas);
        // })
        .catch((error) => {
          alert('エラーが発生しました！');
        })
    );
  };

  return (
    <>
      <h1>ログイン</h1>
      <p>メールアドレス、またはパスワードが間違っています</p>
      <form action="#" method="POST" onSubmit={HandleSubmit}>
        <p id="error" style={{ display: 'none' }}>
          メールアドレス
        </p>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            // console.log(email);
            setEmail(event.target.value);
          }}
        />
        <p>パスワード</p>
        <input
          id="pass"
          type="password"
          name="pass"
          value={pass}
          onChange={(event) => {
            setPass(event.target.value);
          }}
        />
        <br />
        <button type="submit">送信</button>
      </form>
      <Link href={''}>
        <a>ユーザー登録はこちら</a>
      </Link>
    </>
  );
}
