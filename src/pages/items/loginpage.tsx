import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Nav } from '../../compornents/nav_format';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../styles/login.module.css';
import styles from '../../styles/common.module.css';
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
        if (data === 'OK') {
          // router.push('/items/itemList');
          setErrorDisplay('none');

          let cookie = document.cookie;
          if (cookie.includes('status=shopping')) {
            router.push('/items/order_confirm');
          } else {
            router.push('/items/itemList');
          }
        } else if (data === 'NG') {
          setErrorDisplay('block');
        }
      })
      .catch((error) => {
        alert('エラーが発生しました！');
      });
  };

  return (
    <>
      <div className={`${styles.bodyColor}`}>
        <Head>
          <title>ログインページ</title>
          <link rel="icon" href="/3506.png" />
        </Head>
        <div className={`container`}>
          <Nav name="ログイン" />
          <div className={`${style.box}`}>
            <h1 className={`${style.title}`}>ログイン</h1>
            <form
              method="POST"
              onSubmit={HandleSubmit}
              className={`${style.form}`}
            >
              <p
                style={{ display: errorDisplay }}
                className={`${style.errormessage}`}
              >
                メールアドレス、またはパスワードが間違っています
              </p>
              <label htmlFor="email" className={`${style.border}`}>
                メールアドレス
              </label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className={`${style.input}`}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <br />
              <label htmlFor="pass" className={`${style.border}`}>
                パスワード
              </label>
              <br />
              <input
                id="pass"
                type="password"
                name="pass"
                placeholder="Password"
                className={`${style.input}`}
                value={pass}
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
              <br />
              <button type="submit" className={`${style.button}`}>
                ログイン
              </button>
            </form>
            <Link href={'/items/register_user'}>
              <a className={`${style.link}`}>ユーザー登録はこちら</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
