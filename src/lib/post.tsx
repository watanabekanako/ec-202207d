import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/register_user.module.css';
import React, { useState, useEffect} from 'react';

export const Nav = (props: { name: string }) => {
  const pageList = [
    {
      name: 'ショッピングカート',
      url: '/items/cartPage',
    },
    {
      name: '新規登録画面',
      url: '/items/register_user',
    },
    {
      name: 'ログイン',
      url: '/items/loginpage',
    },
  ];

  const [cookie, setCookie] = useState(document.cookie);

  useEffect(() => {
    
    if(document.cookie === 'userId'){
        let cookieDisplay = document.cookie;
    } else {
        console.log('クッキーがありません')
    }
    
  },[]);

  


  const logoutClick = () => {
    document.cookie = 'userId=; max-age=0';
    document.cookie = 'userName=; max-age=0';

    let cookie = document.cookie;

    if (cookie.includes('status=shopping')) {
      document.cookie = 'status=shopping; max-age=0';
    }
  };





  return (
    <nav className={`navbar navbar-expand-lg bg-light ${styles.nav}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="/items/itemList">
          {/* 企業ロゴ   */}
          <a>
            <Image
              alt="main log"
              src="/img/header_logo.png"
              height={35}
              width={138}
            />
          </a>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#Navber"
          aria-controls="Navber"
          aria-expanded="false"
          aria-label="ナビゲーションの切替"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="Navber">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li>こんにちは</li>
            {pageList.map((page, index) => {
                if (props.name !== page.name) {
                  if (
                    cookie === 'userId' &&
                    page.name !== 'ログイン'
                  ) {                              
                    return (
                      <li className="nav-item" key={index}>
                        <Link href={`${page.url}`}>
                          <a className="nav-link">{page.name}</a>
                        </Link>
                      </li>
                    );
                  }
                  if (cookie === '') {
                    return (
                      <li className="nav-item" key={index}>
                        <Link href={`${page.url}`}>
                          <a className="nav-link">{page.name}</a>
                        </Link>
                      </li>
                    );
                  }
                }
            } 
            )
            }
            <li><button onClick={logoutClick}>
              <Link href={'/items/itemList'}><a>ログアウト</a></Link>
              </button></li>
          </ul>
        </div>
      </div>
      
      {/* <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      ></script> */}
    </nav>
  );
};

{
  /* <li className="nav-item">
<Link href="/items/cartPage">
  <a className="nav-link" >
    ショッピングカート
  </a>
</Link >
</li>
<li className="nav-item">
<Link href="#">
  <a className="nav-link" >
    注文履歴
  </a>
</Link >
</li>
<li className="nav-item">
<Link href="/items/loginpage">
  <a className="nav-link" >
    ログイン
  </a>
</Link >
</li>
<li className="nav-item">
<Link href="/items/logout">
  <a className="nav-link" >
    ログアウト
  </a>
</Link >
</li> */
}
