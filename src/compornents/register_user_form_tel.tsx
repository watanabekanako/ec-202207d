import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";

export const telJudge = (telFlag : any) => {
  if (telFlag === "empty") {
    let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "電話番号を入力してください"
  }

  if (telFlag === "format-incorrect") {
    let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
  }  
}

export const TelForm = (props: any) => {

  useEffect(() => {
    props.SetTelFlag("ok")
    if (!props.telValue) {
      props.SetTelFlag("empty")
    } else if (!props.telValue.match(/^[0-9]*-[0-9]*-[0-9]*$/)) {
      props.SetTelFlag("format-incorrect")
    }
  })

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="telForm" >
        <label htmlFor="inputTel" className={styles.title}>電話番号</label>
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

export default TelForm;
