import { useState } from "react"
import { Nav } from "../../compornents/nav_format"
import { ShoppingCart } from "../../compornents/order_confirm_shoppingCart"
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from 'swr'
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../styles/register_user.module.css";
import Head from "next/head";
import { UserInfo, cartLogin } from "../../compornents/register_user";
import styles from '../../styles/common.module.css'


export const Show = (data:any) => {
  const [times, Settimes] = useState(10)
  const router = useRouter();
 
  // フラグ
  // const [flagMailFormat, SetFlagMailFormat] = useState("true");
  // const [flagZip, SetFlagZip] = useState("true");
  // const [flagTel, SetFlagTel] = useState("true");
  // const [flagDate, SetFlagDate] = useState("true");

  return (
    <>
      <Head>
        <title >注文内容確認画面</title>
        <link rel="icon" href="/3506.png" />
      </Head>
      <div className={`${styles.bodyColor}`}>
        <div className={`container`}>
          <Nav name="ログイン" />
          {/*table */}
          <ShoppingCart />
          {/* <Total /> */}

          {/*table */}
          <UserInfo />
          {/* <form action="#">
            <div className={`row g-3 ${style.row}`}>
              <div className="table-responsive col-lg-offset-3 col-lg-7 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
                <h3 className="text-center">お届け先情報</h3>
                <table className="table table-striped item-list-table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="text-center">
                          お名前
                        </div>
                      </td>
                      <td>
                        <span className={`${style.requiredLabel}`}>必須</span>
                        <input type="text" id="name"
                        // className="form-control"
                        />
                        <label
                          id="nameErr"
                          className="control-label"
                          style={{ color: 'red', display: 'none' }}
                          htmlFor="inputPeriod"
                        >
                          名前を入力してください
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-center">
                          メールアドレス
                        </div>
                      </td>
                      <td>
                        <span className={`${style.requiredLabel}`}>必須</span>
                        <input type="text" id="mail" />
                        <label
                          id="mailErr"
                          className="control-label"
                          style={{ color: 'red', display: 'none' }}
                          htmlFor="inputPeriod"
                        >
                          メールアドレスを入力してください
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-center">
                          郵便番号
                        </div>
                      </td>
                      <td>
                        <span className={`${style.requiredLabel}`}>必須</span>
                        <input type="text" id="zip" />
                        &nbsp;&nbsp;<button>住所検索</button>
                        <label
                          id="zipErr"
                          className="control-label"
                          style={{ color: 'red', display: 'none' }}
                          htmlFor="inputPeriod"
                        >
                          郵便番号を入力してください
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-center">住所</div>
                      </td>
                      <td>
                        <span className={`${style.requiredLabel}`}>必須</span>
                        <input type="text" id="address" />
                        <label
                          id="addrErr"
                          className="control-label"
                          style={{ color: 'red', display: 'none' }}
                          htmlFor="inputPeriod"
                        >
                          住所を入力してください
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-center">電話番号</div>
                      </td>
                      <td>
                        <span className={`${style.requiredLabel}`}>必須</span>
                        <input type="text" id="tel" />
                        <label
                          id="telErr"
                          className="control-label"
                          style={{ color: 'red', display: 'none' }}
                          htmlFor="inputPeriod"
                        >
                          電話番号を入力してください
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-center">配達日時</div>
                      </td>
                      <td>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-12">
                            </div>
                            <div className="col-sm-5">
                              <span className={`${style.requiredLabel}`}>必須</span>
                              <input
                                type="date"
                                name="name"
                                id="date"
                                className="form-control input-sm"
                                pattern="\d{4},\d{1},\d{1}"
                              />
                              <label
                                id="dateErr"
                                className="control-label"
                                style={{
                                  color: 'red',
                                  display: 'none',
                                }}
                                htmlFor="inputPeriod"
                              >
                                配達日時を入力してください
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name="responsibleCompany"
                                  defaultChecked={true}
                                  className="time"
                                  value={10}
                                />
                                10時
                              </label>

                              {
                                (() => {
                                  const radioList = [];
                                  for (let i = 11; i <= 18; i++) {
                                    radioList.push(
                                      <label className="radio-inline" key={i}>
                                        <input
                                          type="radio" name="responsibleCompany"
                                          value={i}
                                          className="time"
                                        />
                                        {i}時
                                      </label>
                                    )
                                  }
                                  return radioList;

                                })()
                              }

                              <br />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </form> */}
          <form action="#">
            {/*table */}
            <div className={`row  ${style.row}`}>
              <div className="table-responsive col-lg-offset-3 col-lg-7 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
                <h3 className="text-center">お支払い方法</h3>
                <table className="table table-striped item-list-table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="text-center">代金引換</div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col-sm-12">
                            <label className="radio-inline">
                              <input
                                className="pay"
                                type="radio"
                                name="responsibleCompany"
                                defaultChecked={true}
                                value="代金引換"
                              />
                              代金引換
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-center">
                          クレジットカード決済
                        </div>
                      </td>
                      <td align="center">
                        <div className="row">
                          <div className="col-sm-12">
                            <label className="radio-inline">
                              <input
                                className="pay"
                                type="radio"
                                name="responsibleCompany"
                                defaultChecked={true}
                                value="クレジットカード"
                              />
                              クレジットカード

                            </label
                            ><br /><br />

                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-offset-4 col-xs-4">
                <div className={`form-group ${style.table}`}>
                  <input
                    className={`form-control btn btn-warning btn-block ${style.confirmBtn}`}
                    type="button"
                    value="この内容で注文する"
                    onClick={async() => {
                    
                      let getNameId = document.getElementById("name") as HTMLInputElement
                      let getMailId = document.getElementById("mail") as HTMLInputElement
                      let getZipId = document.getElementById("zip") as HTMLInputElement
                      let getAddrId = document.getElementById("address") as HTMLInputElement
                      let getTelId = document.getElementById("tel") as HTMLInputElement
                      let getDateId = document.getElementById("date") as HTMLInputElement
                      let getTimeClass = document.getElementsByClassName("time") as HTMLCollectionOf<HTMLFormElement>
                      let getPayClass = document.getElementsByClassName("pay") as HTMLCollectionOf<HTMLFormElement>

                      // フラグ
                      let flagMailFormat = "true";
                      let flagZip = "true";
                      let flagTel = "true";
                      let flagDate = "true";

                      let payStatus = "";


                      // console.log(getDateId.value)
                      // 配達時間取得

                      let timeValue = ""

                      for (let i = 0; i < getTimeClass.length; i++) {
                        if (getTimeClass[i].checked === true) {
                          timeValue = getTimeClass[i].value;
                        }
                      }

                      // console.log(timeValue)
                      // console.log(getDateId.value)
                      const currentDate = new Date();
                      const Specified = new Date();

                      let split = getDateId.value.split('-');
                      let month = Number(split[1]) - 1

                      Specified.setFullYear(Number(split[0]));
                      Specified.setMonth(month);
                      Specified.setDate(Number(split[2]));
                      Specified.setHours(Number(timeValue), 0, 0);
                      // console.log(month)
                      // console.log(Specified);

                      if (Number(Specified) - Number(currentDate) < 10800000) {
                        flagDate = ""
                      }

                      // 支払方法取得
                      let payOpt = ""

                      for (let i = 0; i < getPayClass.length; i++) {
                        if (getPayClass[i].checked === true) {
                          payOpt = getPayClass[i].value;
                        }
                      }


                      if (payOpt === "代金引換") {
                        payStatus = "1:未入金"
                      } else {
                        payStatus = "2:入金済"
                      }
                      // console.log(payOpt)
                      // console.log(payStatus)


                      // エラーを非表示
                      const errList = [
                        'nameErr',
                        'addrErr',
                        'mailErr',
                        'zipErr',
                        'telErr',
                        'dateErr',
                      ];

                      errList.map((list) => {

                        let tag = document.getElementById(list) as HTMLInputElement;
                        tag.style.display = "none"
                      })

                      if (
                        getNameId.value &&
                        getMailId.value &&
                        getZipId.value &&
                        getAddrId.value &&
                        getTelId.value &&
                        getDateId.value
                      ) {


                        if (!getMailId.value.includes('@')) {
                          let tag = document.getElementById("mailErr") as HTMLInputElement;
                          tag.style.display = "inline-block"
                          tag.innerHTML = "メールアドレスの形式が不正です"
                          // SetFlagMailFormat("")
                          flagMailFormat = "";
                        }

                        if (!(getZipId.value.match(/^\d{3}-\d{4}$/))) {
                          // if(getZipId.value.length !== 7){
                            let tag = document.getElementById("zipErr") as HTMLInputElement;
                            tag.style.display = "inline-block"
                            tag.innerHTML = "郵便番号はXXX-XXXXの形式で入力してくださいで入力してください"
                            // tag.innerHTML = "郵便番号はXXX-XXXXの形式または数字7桁で入力してくださいで入力してください"
                            // SetFlagZip("")
                            flagZip = "";
                          // }
                        }else{
                        await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${getZipId?.value}`)
                          .then(response => response.json())
                          .then(json => console.log(json.results[0].address1))
                          .catch((error) => {
                            let tag = document.getElementById("zipErr") as HTMLInputElement;
                            tag.style.display = "inline-block"
                            tag.innerHTML = "この郵便番号は存在しません"
                            flagZip = "";})
                        }

                        if (!(getTelId.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))) {
                          let tag = document.getElementById("telErr") as HTMLInputElement;
                          tag.style.display = "inline-block"
                          tag.innerHTML = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
                          // SetFlagTel("")
                          flagTel = "";

                        }

                        //現時点から3時間後以前が入力された場合 処理

                        if (Number(Specified) - Number(currentDate) < 10800000) {
                          let tag = document.getElementById("dateErr") as HTMLInputElement;
                          tag.style.display = "inline-block"
                          tag.innerHTML = "今から3時間後の日時をご入力ください"
                          flagDate = ""
                        }

                        if (
                          flagMailFormat &&
                          flagZip &&
                          flagTel &&
                          flagDate
                        ) {
                          const data = {

                            pay: payStatus,
                            zip: getZipId.value,
                            address: getAddrId.value,
                            name: getNameId.value,
                            mail: getMailId.value,
                            tel: getTelId.value,
                            date: getDateId.value + "-" + timeValue
                          };

                          // POST先（仮）　ユーザーごとのショッピングカートがないため
                        await fetch(`http://localhost:8000/payStatus`, {
                            method: "POST",
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                          }).then((response) => {
                            return response.json();
                          }).then((data) => {
                            router.replace("/items/order_finished");
                          })
                        }


                      } else {

                        if (getMailId.value) {
                          if (!getMailId.value.includes('@')) {
                            let tag = document.getElementById("mailErr") as HTMLInputElement;
                            tag.style.display = "inline-block"
                            tag.innerHTML = "メールアドレスの形式が不正です"
                          }
                        } else {
                          let tag = document.getElementById("mailErr") as HTMLInputElement;
                          tag.style.display = "inline-block"
                          tag.innerHTML = "メールアドレスを入力してください"
                        }

                        if (getZipId.value) {
                          if (!(getZipId.value.match(/^\d{3}-\d{4}$/))) {
                            // if(getZipId.value.length !== 7){
                              let tag = document.getElementById("zipErr") as HTMLInputElement;
                              tag.style.display = "inline-block"
                              // tag.innerHTML = "郵便番号はXXX-XXXXの形式または数字7桁で入力してください"
                              tag.innerHTML = "郵便番号はXXX-XXXXの形式で入力してください"
                              // flagZip = ""
                            // }
                          }else{
                          await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${getZipId?.value}`)
                            .then(response => response.json())
                            .then(json => console.log(json.results[0].address1))
                            .catch((error) => {
                              let tag = document.getElementById("zipErr") as HTMLInputElement;
                              tag.style.display = "inline-block"
                              tag.innerHTML = "この郵便番号は存在しません"
                            })
                          }
                        } else {
                          let tag = document.getElementById("zipErr") as HTMLInputElement;
                          tag.style.display = "inline-block"
                          tag.innerHTML = "郵便番号を入力してください"
                        }

                        if (getTelId.value) {
                          if (!(getTelId.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))) {
                            // if(!(getTelId.value.length <= 15  && getTelId.value.length >= 10)){
                              let tag = document.getElementById("telErr") as HTMLInputElement;
                              tag.style.display = "inline-block"
                              tag.innerHTML = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
                              // flagTel = ""
                            // }
                          }
                        } else {
                          let tag = document.getElementById("telErr") as HTMLInputElement;
                          tag.style.display = "inline-block"
                          tag.innerHTML = "電話番号を入力してください"
                        }

                        if (!getNameId.value) {
                          let tag = document.getElementById("nameErr") as HTMLInputElement;
                          tag.style.display = "inline-block"
                        }

                        if (!getAddrId.value) {
                          let tag = document.getElementById("addrErr") as HTMLInputElement;
                          tag.style.display = "inline-block"

                        }

                        // 配達日時　判定
                        if (!getDateId.value) {

                          let tag = document.getElementById("dateErr") as HTMLInputElement;
                          tag.style.display = "inline-block"
                        } else {
                          if (Number(Specified) - Number(currentDate) < 10800000) {
                            let tag = document.getElementById("dateErr") as HTMLInputElement;
                            tag.style.display = "inline-block"
                            tag.innerHTML = "今から3時間後の日時をご入力ください"
                          }
                        }

                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Show;
