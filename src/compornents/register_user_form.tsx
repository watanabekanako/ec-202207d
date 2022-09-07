import { Btn } from "./register_user"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'

export const Form = (props:any) => {
  return (
    <>
      {
        props.list.map((list: any, index:number) => {
          let formType = "text";
          if(list.item === "パスワード" || list.item === "確認用パスワード" ){
            formType = "password"
          }
          return (
            <div className={`form-group ${styles.formGroup}`} key={index} >
              <label htmlFor={list.id} className={styles.title}>{list.item}:</label>
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
                className="form-control"
                placeholder={list.place}
              />
            </div>
          );
        })
      }
    </>
  );
}
