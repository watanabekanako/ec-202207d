import React from 'react';
import { Title } from "../../compornents/register_user"
import { clear } from "../../utils/register_user_clear"
import { NameForm, nameJudge } from "../../compornents/register_user_form_name";
import { MailForm, mailJudge } from "../../compornents/register_user_form_mail";
import { ZipForm, zipJudge } from "../../compornents/register_user_form_zip";
import { AddrForm, addrJudge } from "../../compornents/register_user_form_addr";
import { TelForm, telJudge } from "../../compornents/register_user_form_tel";
import { PassForm, passJudge } from "../../compornents/register_user_form_pass";
import { ConPassForm, conPassJudge } from "../../compornents/register_user_form_conPass";
import { Nav } from "../../compornents/nav_format";
import { useRouter } from "next/router";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/register_user.module.css";
import style from '../../styles/common.module.css';

const Show = () => {
  const router = useRouter();

  // 判定 フラグ
  const [nameFlag, SetNameFlag] = React.useState("init");
  const [mailFlag, SetMailFlag] = React.useState("init");
  const [zipFlag, SetZipFlag] = React.useState("init");
  const [addrFlag, SetAddrFlag] = React.useState("init");
  const [telFlag, SetTelFlag] = React.useState("init");
  const [passFlag, SetPassFlag] = React.useState("init");
  const [conPassFlag, SetConPassFlag] = React.useState("init");

  const [firstNameValue, SetFirstNameValue] = React.useState("");
  const [lastNameValue, SetLastNameValue] = React.useState("");
  const [mailValue, SetMailValue] = React.useState("");
  const [zipValue, SetZipValue] = React.useState("");
  const [addrValue, SetAddrValue] = React.useState("");
  const [telValue, SetTelValue] = React.useState("");
  const [passValue, SetPassValue] = React.useState("");
  const [conPassValue, SetConPassValue] = React.useState("");

  return (
    <div className={`${style.bodyColor} ${styles.height}`}>

      <div className={`container`}>
        <Head>
          <title>ラクラクヌードル／ユーザー登録画面</title>
          <link rel="icon" href="/3506.png" />
        </Head>

        <Nav name="新規登録画面" />

        <div className={`row ${styles.row}`}>
          <div
            className="col-lg-offset-3 col-lg-5 col-md-offset-2 col-md-8 col-sm-10 col-xs-12"
          >
            <div className="well">
              <form method="post" action="#">
                <fieldset>
                  <Title title="ユーザー登録" />

                  <NameForm
                    SetFirstNameValue={SetFirstNameValue}
                    SetNameFlag={SetNameFlag}
                    SetLastNameValue={SetLastNameValue}
                    firstNameValue={firstNameValue}
                    lastNameValue={lastNameValue}
                  />
                  <MailForm
                    SetMailValue={SetMailValue}
                    SetMailFlag={SetMailFlag}
                    mailValue={mailValue}
                  />
                  <ZipForm
                    SetZipFlag={SetZipFlag}
                    SetZipValue={SetZipValue}
                    SetAddrValue={SetAddrValue}
                    zipValue={zipValue}
                    zipFlag={zipFlag}
                  />
                  <AddrForm
                    SetAddrFlag={SetAddrFlag}
                    SetAddrValue={SetAddrValue}
                    addrValue={addrValue}
                  />
                  <TelForm
                    SetTelValue={SetTelValue}
                    SetTelFlag={SetTelFlag}
                    telValue={telValue}
                  />
                  <PassForm
                    SetPassFlag={SetPassFlag}
                    SetPassValue={SetPassValue}
                    passValue={passValue}
                  />
                  <ConPassForm
                    SetConPassFlag={SetConPassFlag}
                    SetConPassValue={SetConPassValue}
                    conPassValue={conPassValue}
                  />

                  <div className="form-group   ">
                    <button type="button" className={` ${styles.btn}`} onClick={() => {

                      SetNameFlag("init");
                      SetMailFlag("init");
                      SetZipFlag("init");
                      SetAddrFlag("init");
                      SetTelFlag("init");
                      SetPassFlag("init");
                      SetConPassFlag("init");

                      // エラー非表示
                      for (let i = 0; i < 7; i++) {
                        let tag = document.getElementsByClassName("control-label")[i] as HTMLElement;
                        tag.style.display = "none"
                      }

                      if (
                        nameFlag === "ok" &&
                        mailFlag === "ok" &&
                        zipFlag === "ok" &&
                        telFlag === "ok" &&
                        passFlag === "ok" &&
                        conPassFlag === "ok"
                      ) {

                        const data = {
                          name: `${lastNameValue} ${firstNameValue}`,
                          mail: mailValue,
                          zip: zipValue,
                          address: addrValue,
                          tel: telValue,
                          pass: passValue
                        };

                        fetch(`http://localhost:8000/users`, {
                          method: "POST",
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify(data)
                        }).then((response) => {
                          return response.json();
                        }).then((data) => {
                          alert("登録が完了いたしました。");
                          router.push("/items/loginpage");
                        })
                        // エラー非表示
                        for (let i = 0; i < 7; i++) {
                          let tag = document.getElementsByClassName("control-label")[i] as HTMLElement;
                          tag.style.display = "none"
                        }

                        // その他
                      } else {
                        console.log(`name:${nameFlag} mail:${mailFlag}
                        zip:${zipFlag}  addr:${addrFlag} tel:${telFlag} pass:${passFlag} conPass:${conPassFlag}`)

                        nameJudge(nameFlag);
                        mailJudge(mailFlag);
                        zipJudge(zipFlag);
                        addrJudge(addrFlag);
                        telJudge(telFlag);
                        passJudge(passFlag);
                        conPassJudge(conPassFlag, passValue, conPassValue)

                      }
                    }

                    }>登録</button>

                    <button type="reset" className={`${styles.btnClear}`} onClick={() => {
                      SetNameFlag("init");
                      SetMailFlag("init");
                      SetZipFlag("init");
                      SetAddrFlag("init");
                      SetTelFlag("init");
                      SetPassFlag("init");
                      SetConPassFlag("init");

                      clear();

                      // エラー非表示
                      for (let i = 0; i < 7; i++) {
                        let tag = document.getElementsByClassName("control-label")[i] as HTMLElement;
                        tag.style.display = "none"
                      }

                    }}>クリア</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Show;

{/* 
  問題なしの場合、ok
  空欄の場合、empty
  形式が不正の場合、format-incorrect
  登録済みの場合、registered
  郵便番号が存在しない場合、unexist
  8文字以上16文字以内でなかった場合、pass-incorrect
  パスワードと不一致の場合、pass-mismatch
*/}
