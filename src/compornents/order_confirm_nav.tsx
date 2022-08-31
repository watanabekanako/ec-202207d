import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        {/*Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span> <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand"
          //  href="item_list_pizza.html"
           href="register_user"
          >
            企業ロゴ
            {/* <img
              alt="main log"
              src="../static/img_pizza/header_logo.png"
              height="35"
            /> */}
          </Link>
        </div>

        {/*Collect the nav links, forms, and other content for toggling */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <p className="navbar-text navbar-right">
            <Link href="/" className="navbar-link">ショッピングカート</Link
            >&nbsp;&nbsp;
            <Link href="/" className="navbar-link">注文履歴</Link
            >&nbsp;&nbsp;
            <Link href="/" className="navbar-link">ログイン</Link>&nbsp;&nbsp;
            <Link href="/" className="navbar-link">ログアウト</Link>
          </p>
        </div>
        {/*/.navbar-collapse */}
      </div>
      {/*/.container-fluid */}
    </nav>
  );
}
