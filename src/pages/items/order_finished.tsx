import 'bootstrap/dist/css/bootstrap.min.css';
export const Show = () => {

  return(
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
           {/* Brand and toggle get grouped for better mobile display */}
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
            <a className="navbar-brand" href="item_list_pizza.html">
               {/* 企業ロゴ */}
              <img
                alt="main log"
                src="../static/img_pizza/header_logo.png"
                height="35"
              />
            </a>
          </div>

           {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <p className="navbar-text navbar-right">
              <a href="cart_list.html" className="navbar-link">ショッピングカート</a
              >&nbsp;&nbsp;
              <a href="order_history.html" className="navbar-link">注文履歴</a
              >&nbsp;&nbsp;
              <a href="login.html" className="navbar-link">ログイン</a>&nbsp;&nbsp;
              <a href="item_list_pizza.html" className="navbar-link">ログアウト</a>
            </p>
          </div>
           {/* /.navbar-collapse */}
        </div>
         {/* /.container-fluid */}
      </nav>

       {/* table */}
      <div className="row">
        <div
          className="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12"
        >
          <h3 className="text-center">決済が完了しました！</h3>
          <div className="text-center">
            <p>この度はご注文ありがとうございます。</p>
            <p>
              お支払い先は、お送りしたメールに記載してありますのでご確認ください。
            </p>
            <p>メールが届かない場合は「注文履歴」からご確認ください。</p>
          </div>
        </div>
      </div>

      <br /><br />
      <div className="row">
        <div className="col-xs-offset-5 col-xs-2">
          <div className="form-group">
            <form action="order_finished.html">
              <input
                className="form-control btn btn-warning btn-block"
                type="submit"
                value="トップ画面を表示する"
              />
            </form>
          </div>
        </div>
      </div>
    </div>    

  )
}

export default Show;
