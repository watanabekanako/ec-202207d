import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";

export const passJudge = (passFlag: any) => {
  if (passFlag === "empty") {
    let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "パスワードを入力してください"
  }

  if (passFlag === "pass-incorrect") {
    let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "パスワードは８文字以上１６文字以内で設定してください"
  }
}

export const PassForm = (props: any) => {

  if (props.test === "true") {
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
  }
  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="passForm"  >
        <label htmlFor="inputPassword" className={styles.title}>パスワード</label>
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
          type="password"
          autoComplete="current-password"
          id="inputPassword"
          className="form-control form-control-lg "
          placeholder="８文字以上１６文字以内で設定してください"
          onChange={(ev) => {
            if (props.test === "true") {
              props.SetPassValue(ev.target.value);
            }
          }}
        />
      </div>
    </>
  );
}

export default PassForm;
