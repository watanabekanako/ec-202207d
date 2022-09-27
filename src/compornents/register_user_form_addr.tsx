import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";

export const addrJudge = (addrFlag: any) => {
  if (addrFlag === "empty") {
    let tag = document.getElementsByClassName("control-label")[3] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "住所を入力してください"
  }
}

export const AddrForm = (props: any) => {

  if (props.test === "true") {
    useEffect(() => {
      props.SetAddrFlag("ok")

      if (!props.addrValue) {
        props.SetAddrFlag("empty")
      }
    })
  }

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="addrForm"  >
        <label htmlFor="inputAddrcode" className={styles.title}>住所</label>
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
          placeholder="住所"
          onChange={(ev) => {
            if (props.test === "true") {
              props.SetAddrValue(ev.target.value);
            }
          }}
        />
      </div>
    </>
  );
}

export default AddrForm;
