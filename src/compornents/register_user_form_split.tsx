import { Btn } from "./register_user"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";


export const NameForm = (props: any) => {

  useEffect(() => {
    props.SetNameFlag("ok")
    if (!props.firstNameValue || !props.lastNameValue) {
      // console.log(props.firstNameValue)
      props.SetNameFlag("empty")
    }
  })

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="nameForm" >
        <label htmlFor="inputLastName" className={styles.title}>名前</label>
        <label
          id="Name"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >名前を入力してください</label>
        <div className="row">
          <div className="col-sm-6">
            <input
              type="text"
              id="inputLastName"
              className="form-control form-control-lg "
              placeholder="姓"
              onChange={(ev) => {
                props.SetFirstNameValue(ev.target.value)
              }}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              id="inputFirstName"
              className="form-control form-control-lg "
              placeholder="名"
              onChange={(ev) => {
                props.SetLastNameValue(ev.target.value);
              }}
            />
          </div>
        </div>
      </ div>
    </>
  );
}


export const MailForm = (props: any) => {

  useEffect(() => {
    props.SetMailFlag("ok")

    if (!props.mailValue) {
      props.SetMailFlag("empty")
    } else if (!props.mailValue.includes('@')) {
      props.SetMailFlag("format-incorrect")
    } else {
      fetch(`http://localhost:8000/users?mail=${props.mailValue}`)
        .then(response => response.json())
        .then((data) => {
          if (data.length !== 0) {
            props.SetMailFlag("registered")
          }
        })
        .catch(error => {
          console.log('error');
        });
    }
  })

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="mailForm"  >
        <label htmlFor="inputEmail" className={styles.title}>メールアドレス</label>
        <Btn item="メールアドレス" />
        <label
          id="ErrorInputEmail"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >メールアドレスを入力してください</label>
        <input
          type="text"
          id="inputEmail"
          className="form-control form-control-lg "
          placeholder="例）xxx@example.com"
          onChange={(ev) => {
            props.SetMailValue(ev.target.value);
          }}
        />
      </div>
    </>
  );
}


export const ZipForm = (props: any) => {

  useEffect(() => {

    if (!props.zipValue) {
      props.SetZipFlag("empty")
    } else if (!props.zipValue.match(/^\d{3}-\d{4}$/)) {
      props.SetZipFlag("format-incorrect")
    } else {
      fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${props.zipValue}`)
        .then(res => res.json())
        .then((json) => {
          if (json.results === null) {
            props.SetZipFlag("unexist")
          } else {
            props.SetZipFlag("ok")
          }
        })
        .catch((error) => {
          props.SetZipFlag("unexist")
          console.log(error)
        });
    }
  })
  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="zipForm" >
        <label htmlFor="inputZipcode" className={styles.title}>郵便番号</label>
        <Btn item="郵便番号" />
        <label
          id="ErrorInputZipcode"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >郵便番号を入力してください</label>
        <input
          type="text"
          id="inputZipcode"
          className="form-control form-control-lg "
          placeholder="例）xxx-xxxx"
          onChange={(ev) => {
            props.SetZipValue(ev.target.value);
          }}
        />
      </div>
    </>
  );
}

export const AddrForm = (props: any) => {

  useEffect(() => {

    props.SetAddrFlag("ok")

    if (!props.addrValue) {
      // console.log("Addrを入力してください")
      props.SetAddrFlag("empty")
    }
  })

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="addrForm"  >
        <label htmlFor="inputAddrcode" className={styles.title}>住所</label>
        <Btn item="住所" />
        <label
          id="ErrorInputAddrcode"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >住所を入力してください</label>
        <input
          type="text"
          id="inputAddress"
          className="form-control form-control-lg "
          placeholder="例）xxx-xxxx"
          onChange={(ev) => {
            props.SetAddrValue(ev.target.value);
          }}
        />
      </div>
    </>
  );
}

export const TelForm = (props: any) => {

  useEffect(() => {

    props.SetTelFlag("ok")
    if (!props.telValue) {
      // console.log("telを入力してください")
      props.SetTelFlag("empty")
    } else if (!props.telValue.match(/^[0-9]*-[0-9]*-[0-9]*$/)) {
      props.SetTelFlag("format-incorrect")
    }
  })


  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="telForm" >
        <label htmlFor="inputTel" className={styles.title}>電話番号</label>
        <Btn item="電話番号" />
        <label
          id="ErrorInputTel"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >電話番号を入力してください</label>
        <input
          type="text"
          id="inputTel"
          className="form-control form-control-lg "
          placeholder="例）xxx-xxxx-xxxx"
          onChange={(ev) => {
            props.SetTelValue(ev.target.value);
          }}
        />
      </div>
    </>
  );
}

export const PassForm = (props: any) => {

  useEffect(() => {

    props.SetPassFlag("ok")
    if (!props.passValue) {
      props.SetPassFlag("empty")
    } else {
      if (!(props.passValue.length <= 16 && props.passValue.length >= 8)) {
        props.SetPassFlag("pass-incorrect")
      }
    }
  })

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="passForm"  >
        <label htmlFor="inputPassword" className={styles.title}>パスワード</label>
        <Btn item="パスワード" />
        <label
          id="ErrorInputPassword"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >パスワードを入力してください</label>
        <input
          type="text"
          id="inputPassword"
          className="form-control form-control-lg "
          placeholder="８文字以上１６文字以内で設定してください"
          onChange={(ev) => {
            props.SetPassValue(ev.target.value);
          }}
        />
      </div>
    </>
  );
}

export const ConPassForm = (props: any) => {

  useEffect(() => {

    props.SetConPassFlag("ok")
    if (!props.conPassValue) {
      // console.log("conpassを入力してください")
      props.SetConPassFlag("empty")
    }
  })

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="conPassForm" >
        <label htmlFor="inputConfirmationPassword" className={styles.title}>確認用パスワード</label>
        <Btn item="確認用パスワード" />
        <label
          id="ErrorInputConfirmationPassword"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >確認用パスワードを入力してください</label>
        <input
          type="text"
          id="inputConfirmationPassword"
          className="form-control form-control-lg "
          placeholder="確認用パスワード"
          onChange={(ev) => {
            props.SetConPassValue(ev.target.value);
          }}
        />
      </div>
    </>
  );
}


// <NameForm SetNameEmptyFlag={SetNameEmptyFlag} />
// <MailForm SetMailEmptyFlag = {SetMailEmptyFlag}/>
// <ZipForm SetZipEmptyFlag = {SetZipEmptyFlag}/>
// <TelForm SetTelEmptyFlag = {SetTelEmptyFlag}/>
// <PassForm SetPassEmptyFlag = {SetPassEmptyFlag} />
// <ConPassForm SetConPassEmptyFlag = {SetConPassEmptyFlag} />

// num: 6,
// item: "確認用パスワード",
// id: "inputConfirmationPassword",
// place: "確認用パスワード"
