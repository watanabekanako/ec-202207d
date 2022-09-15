import { Btn } from "./register_user"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'

export const Form = (props: any) => {
  return (
    <>
      {
        props.list.map((list: any, index: number) => {
          let formType = "text";
          if (list.item === "パスワード" || list.item === "確認用パスワード") {
            formType = "password"
          }

          if (list.item === "名前") {
            return (
              <div className={`form-group ${styles.formGroup}`} key={index} >
                <label htmlFor={list.id} className={styles.title}>{list.item}</label>
                <label
                  id={list.place}
                  className="control-label"
                  style={{
                    color: "red",
                    display: "none"
                  }}
                  htmlFor="inputError"
                >{list.item}を入力してください</label>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type={formType}
                      id={list.id}
                      className="form-control form-control-lg "
                      placeholder="姓"
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type={formType}
                      id="inputFirstName"
                      className="form-control form-control-lg "
                      placeholder="名"
                    />
                  </div>
                </div>
              </ div>
            );
          } else {
            return (
              <div className={`form-group ${styles.formGroup}`} key={index} >
                <label htmlFor={list.id} className={styles.title}>{list.item}</label>
                <Btn item={list.item} />
                <label
                  id={list.place}
                  className="control-label"
                  style={{
                    color: "red",
                    display: "none"
                  }}
                  htmlFor="inputError"
                >{list.item}を入力してください</label>
                <input
                  type={formType}
                  id={list.id}
                  className="form-control form-control-lg "
                  placeholder={list.place}
                />
              </div>
            );
          }
        })
      }
    </>
  );
}
