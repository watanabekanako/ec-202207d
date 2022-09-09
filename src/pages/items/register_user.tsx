import React, { useState } from 'react';
import { Title } from "../../compornents/register_user"
import { clear } from "../../utils/register_user_clear"
import { Form } from "../../compornents/register_user_form";
import { Nav } from "../../compornents/nav_format";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/register_user.module.css";
import style from '../../styles/common.module.css';



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
  // const [flagMailFormat, SetFlagMailFormat] = useState("true");
  // const [flagMailDup, SetFlagMailDup] = useState("true");
  // const [flagZip, SetFlagZip] = useState("true");
  // const [flagTel, SetFlagTel] = useState("true");
  // const [flagPassLength, SetFlagPassLength] = useState("true");
  // const [flagPassConf, SetFlagPassConf] = useState("true");
  let flagMailFormat = "true";
  let flagMailDup = "true";
  let flagZip = "true";
  let flagTel = "true";
  let flagPassLength = "true";
  let flagPassConf = "true";


  return (
    <div className={`${style.bodyColor} ${styles.height}`}>

      <div className={`container`}>
        <Head>
          <title>ラクラクヌードル／ユーザー登録画面</title>
          <link rel="icon" href="/3506.png" />
        </Head>

        <Nav  name="新規登録画面"/>

        {/* <!-- login form --> */}
        <div className={`row ${styles.row}`}>
          <div
            className="col-lg-offset-3 col-lg-5 col-md-offset-2 col-md-8 col-sm-10 col-xs-12"
          >
            <div className="well">
              <form method="post" action="#">
                <fieldset>
                  <Title title="ユーザー登録" />
                  <Form list={list} />
                  <div className="form-group   ">
                    <button type="button" className={` ${styles.btn}`} onClick={() => {

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
                          tag.innerHTML = "メールアドレスは@を含む形式で入力してください"

                          // SetFlagMailFormat("")
                          flagMailFormat = "";
                        }

                        if (!(getZipId.value.match(/^\d{3}-\d{4}$/))) {
                          let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
                          tag.style.display = "inline-block"
                          tag.innerHTML = "郵便番号はXXX-XXXXの形式で入力してください"

                          // SetFlagZip("")
                          flagZip = "";
                        }else{
                          fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${getZipId?.value}`)
                          .then(response => response.json())
                          .then(json => console.log(json.results[0].address1))
                          .catch((error) => {
                            let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;;
                            tag.style.display = "inline-block"
                            tag.innerHTML = "この郵便番号は存在しません"
                            flagZip = "";
                            });
                        }

                        if (!(getTelId.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))) {
                          let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
                          tag.style.display = "inline-block"
                          tag.innerHTML = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"

                          // SetFlagTel("")
                          flagTel = "";
                        }

                        if (!(getPassId.value.length <= 16 && getPassId.value.length >= 8)) {
                          let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
                          tag.style.display = "inline-block"
                          tag.innerHTML = "パスワードは８文字以上１６文字以内で設定してください"

                          // SetFlagPassLength("")
                          flagPassLength = "";
                        }

                        if (!(getPassId.value === getPassConfId.value)) {
                          let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
                          tag.style.display = "inline-block"
                          tag.innerHTML = "パスワードと確認用パスワードが不一致です"

                          // SetFlagPassConf("")
                          flagPassConf = "";
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
                                  // SetFlagMailDup("")
                                  flagMailDup = "";
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
                            tag.innerHTML = "メールアドレスは@を含む形式で入力してください"
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
                            // if(getZipId.value.includes("-")){
                              // if(getZipId.value.length !== 8){
                                let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
                                tag.style.display = "inline-block"
                                tag.innerHTML = "郵便番号はXXX-XXXXの形式で入力してください"
                          }else{
                            fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${getZipId?.value}`)
                            .then(response => response.json())
                            .then(json => console.log(json.results[0].address1))
                            .catch((error) => {
                              let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;;
                              tag.style.display = "inline-block"
                              tag.innerHTML = "この郵便番号は存在しません"
                              });
                          }
                            // }else{
                            //   if(getZipId.value.length !== 7){
                            //     let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
                            //     tag.style.display = "inline-block"
                            //     tag.innerHTML = "郵便番号は7桁の数字で入力してください"
                            //   }
                            // }
                          // }
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

                    <button type="reset" className={`${styles.btnClear}`} onClick={() => {
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
