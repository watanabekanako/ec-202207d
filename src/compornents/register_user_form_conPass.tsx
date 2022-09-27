import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";
import PassForm from "./register_user_form_pass";

export const conPassJudge = (conPassFlag: any, passValue: any, conPassValue: any) => {

  if (conPassFlag === "empty") {
    let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
    tag.style.display = " inline-block"
    tag.innerHTML = "確認用パスワードを入力してください"
  } else {
    if (passValue !== conPassValue) {
      let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
      tag.style.display = "inline-block"
      tag.innerHTML = "パスワードと確認用パスワードが不一致です"
    }
  }

}

export const ConPassForm = (props: any) => {

  if (props.test === "true") {
    useEffect(() => {
      props.SetConPassFlag("ok")
      if (!props.conPassValue) {
        props.SetConPassFlag("empty")
      }
    })
  }

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="conPassForm" >
        <label htmlFor="inputConfirmationPassword" className={styles.title}>確認用パスワード</label>
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
          type="password"
          autoComplete="new-password"
          id="inputConfirmationPassword"
          className="form-control form-control-lg "
          placeholder="確認用パスワード"
          onChange={(ev) => {
            if (props.test === "true") {
              props.SetConPassValue(ev.target.value);
            }
          }}
        />
      </div>
    </>
  );
}

export default PassForm;
