import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";

export const mailJudge = (mailFlag: any) => {
  if (mailFlag === "empty") {
    let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "メールアドレスを入力してください"
  }

  if (mailFlag === "format-incorrect") {
    let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "メールアドレスは@を含む形式で入力してください"
  }

  if (mailFlag === "registered") {
    let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "そのメールアドレスはすでに使われています"
  }

}

export const MailForm = (props: any) => {

  if (props.test === "true") {
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
  }

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="mailForm"  >
        <label htmlFor="inputEmail" className={styles.title}>メールアドレス</label>
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
            if (props.test === "true") {
              props.SetMailValue(ev.target.value);
            }
          }}
        />
      </div>
    </>
  );
}

export default MailForm;
