import { Btn } from "./register_user"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'

export const Form = (props:any) => {
  return (
    <>
      {
        props.list.map((list: any, index:number) => {
          return (
            <div className={styles.formGroup} key={index} >
              <label htmlFor={list.id}>{list.item}:</label>
              <label
                id={list.place}
                className="control-label"
                style={{
                  color: "red",
                  display: "none"
                }}
                htmlFor="inputError"
              >{list.item}を入力してください</label>
              <Btn item={list.item} />
              <input
                type="text"
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
