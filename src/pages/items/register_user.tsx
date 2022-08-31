import React, { useState } from 'react';
import { Title } from "../../compornents/register_user"
import { clear } from "../../utils/register_user_clear"
import { Form } from "../../compornents/register_user_form"
import { useRouter } from "next/router";
// import styles from "../styles/register.module.css"

// 入力項目リスト
const list = [
  {
    num: 0,
    item: "名前",
    id: "inputName",
    place: "Name"
  },
  {
    num: 1,
    item: "メールアドレス",
    id: "inputEmail",
    place: "Email"
  },
  {
    num: 2,
    item: "郵便番号",
    id: "inputZipcode",
    place: "Zipcode"
  },
  {
    num: 3,
    item: "住所",
    id: "inputAddress",
    place: "Address"
  },
  {
    num: 4,
    item: "電話番号",
    id: "inputTel",
    place: "Tel"
  },
  {
    num: 5,
    item: "パスワード",
    id: "inputPassword",
    place: "Password"
  },
  {
    num: 6,
    item: "確認用パスワード",
    id: "inputConfirmationPassword",
    place: "Confirmation Password"
  },
]

const Show = () => {
  const router = useRouter();
  // フラグ
  const [flagMailFormat, SetFlagMailFormat] = useState("true");
  const [flagMailDup, SetFlagMailDup] = useState("true");
  const [flagZip, SetFlagZip] = useState("true");
  const [flagTel, SetFlagTel] = useState("true");
  const [flagPassLength, SetFlagPassLength] = useState("true");
  const [flagPassConf, SetFlagPassConf] = useState("true");
  
  
  return (
    <div className="container" >
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/*  <!-- Brand and toggle get grouped for better mobile display -->  */}
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
            <a className="navbar-brand" href="#">
              {/* <!-- 企業ロゴ -->  */}
              <img
                alt="main log"
                // src="../static/img_pizza/header_logo.png"
                height="35"
              />
            </a>
          </div>

          {/*  Collect the nav links, forms, and other content for toggling   */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <p className="navbar-text navbar-right">
              <a href="cart_list.html" className="navbar-link">ショッピングカート</a
              >&nbsp;&nbsp;
            </p>
          </div>
          {/*<!-- /.navbar-collapse -->  */}
        </div>
        {/* !-- /.container-fluid -->  */}
      </nav>

      {/* <!-- login form --> */}
      <div className="row">
        <div
          className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-10 col-xs-12"
        >
          <div className="well">
            <form method="post" action="#">
              <fieldset>
                <Title title="ユーザ登録" />
                <Form  list={list}/>
                <div className="form-group">
                  <button type="button" className="btn btn-primary" onClick={() => {

                    // 要素取得
                    let getNameId = document.getElementById('inputName') as HTMLInputElement;
                    let getZipId = document.getElementById('inputZipcode') as HTMLInputElement;
                    let getMailId = document.getElementById('inputEmail') as HTMLInputElement;
                    let getAddrId = document.getElementById('inputAddress') as HTMLInputElement;
                    let getTelId = document.getElementById('inputTel') as HTMLInputElement;
                    let getPassId = document.getElementById('inputPassword') as HTMLInputElement;
                    let getPassConfId = document.getElementById('inputConfirmationPassword') as HTMLInputElement;

                    // エラー非表示
                    list.map((list) => {
                      let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
                      tag.style.display = "none"
                    })

                     if (
                      getNameId.value &&
                      getMailId.value &&
                      getZipId.value &&
                      getAddrId.value &&
                      getTelId.value &&
                      getPassId.value &&
                      getPassConfId.value
                    ) {



                      
                      if (!getMailId.value.includes('@')) {
                        let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                        tag.style.display = "inline-block"
                          tag.innerHTML = "メールアドレスの形式が不正です"

                        SetFlagMailFormat("")
                      }

                      if (!(getZipId.value.match(/^\d{3}-\d{4}$/))) {
                        let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
                        tag.style.display = "inline-block"
                          tag.innerHTML = "郵便番号はXXX-XXXXの形式で入力してください"

                        SetFlagZip("")
                      }

                      if (!(getTelId.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))) {
                        let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
                        tag.style.display = "inline-block"
                          tag.innerHTML = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"

                        SetFlagTel("")
                      }

                      if (!(getPassId.value.length <= 16 && getPassId.value.length >= 8)) {
                        let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
                        tag.style.display = "inline-block"
                          tag.innerHTML = "パスワードは８文字以上１６文字以内で設定してください"

                        SetFlagPassLength("")
                      }

                      if (!(getPassId.value === getPassConfId.value)) {
                        let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
                        tag.style.display = "inline-block"
                          tag.innerHTML = "パスワードと確認用パスワードが不一致です"

                        SetFlagPassConf("")
                      }

                      // 全てのフラグに値が入っている場合
                      if (
                        flagMailFormat &&
                        flagZip &&
                        flagTel &&
                        flagPassLength &&
                        flagPassConf
                      ) {
                        const post = async () => {
                          await fetch(`http://localhost:8000/users?mail=${getMailId.value}`)
                            .then(response => response.json())
                            .then((data) => {
                              if (data.length !== 0) {
                                let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                                tag.style.display = "inline-block"
                                  tag.innerHTML = "そのメールアドレスはすでに使われています"
                                SetFlagMailDup("")
                              }
                            })
                            .catch(error => {
                              console.log('error');
                            });

                          const data = {
                            name: getNameId.value,
                            mail: getMailId.value,
                            zip: getZipId.value,
                            address: getAddrId.value,
                            tel: getTelId.value,
                            pass: getPassId.value,
                          };

                          if (flagMailDup) {
                            await fetch(`http://localhost:8000/users`, {
                              method: "POST",
                              headers: {
                                'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(data)
                            }).then((response) => {
                              return response.json();
                            }).then((data) => {
                              router.push("/items/loginpage");
                            })

                            list.map((list) => {
                              let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
                              let none = tag.style.display = "none"
                            })
                          }
                        }
                        post();
                      }

                    // その他
                    } else {
                      if (!getNameId.value) {
                        let tag = document.getElementsByClassName("control-label")[0] as HTMLElement;
                        tag.style.display = "inline-block"
                          tag.innerHTML = "名前を入力してください"
                      }

                      if (!getMailId.value) {
                        let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                        tag.style.display = "inline-block"
                          tag.innerHTML = "メールアドレスを入力してください"

                      } else {
                        if (!getMailId.value.includes('@')) {
                          let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                          tag.style.display = "inline-block"
                            tag.innerHTML = "メールアドレスの形式が不正です"
                        } else {
                          fetch(`http://localhost:8000/users?mail=${getMailId.value}`)
                            .then(response => response.json())
                            .then((data) => {
                              if (data.length !== 0) {
                                let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                                tag.style.display = "inline-block"
                                  tag.innerHTML = "そのメールアドレスはすでに使われています"
                              }
                            })
                            .catch(error => {
                              console.log('error');
                            });
                        }
                      }

                      if (!getZipId.value) {
                        let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
                        tag.style.display = "inline-block"
                          document.getElementsByClassName("control-label")[2].innerHTML = "郵便番号を入力してください"
                      } else {
                        if (!(getZipId.value.match(/^\d{3}-\d{4}$/))) {
                          let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
                          tag.style.display = "inline-block"
                            tag.innerHTML = "郵便番号はXXX-XXXXの形式で入力してください"
                        }
                      }

                      if (!getAddrId.value) {
                        let tag = document.getElementsByClassName("control-label")[3] as HTMLElement;
                        tag.style.display = "inline-block"
                          tag.innerHTML = "住所を入力してください"
                      }

                      if (!getTelId.value) {
                        let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
                        tag.style.display = "inline-block"
                          tag.innerHTML = "電話番号を入力してください"
                      } else {
                        if (!(getTelId.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))) {
                          let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
                          tag.style.display = "inline-block"
                            tag.innerHTML = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
                        }
                      }

                      if (!getPassId.value) {
                        let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
                        tag.style.display = "inline-block"
                          tag.innerHTML = "パスワードを入力してください"
                      } else {
                        if (!(getPassId.value.length <= 16 && getPassId.value.length >= 8)) {
                          let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
                          tag.style.display = "inline-block"
                            tag.innerHTML = "パスワードは８文字以上１６文字以内で設定してください"
                        }
                      }

                      if (!getPassConfId.value) {
                        let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
                        tag.style.display = " inline-block"
                          tag.innerHTML = "確認用パスワードを入力してください"
                      } else {
                        if (!(getPassId.value === getPassConfId.value)) {
                          let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
                          tag.style.display = "inline-block"
                            tag.innerHTML = "パスワードと確認用パスワードが不一致です"
                        }
                      }
                    }

                  }}>登録</button>
                  <button type="reset" className="btn btn-primary" onClick={() => {
                    clear();
                    list.map((list) => {
                      let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
                      let none = tag.style.display = "none"
                    })

                  }}>クリア</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* 
  空欄の場合、empty
  形式が不正の場合、format-incorrect
  問題なしの場合、ture
  登録済みの場合、registered
  8文字以上16文字以内でなかった場合、pass-incorrect
  パスワードと不一致の場合、pass-mismatch
*/}

export default Show;
