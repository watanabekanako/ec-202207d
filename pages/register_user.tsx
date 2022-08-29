import { lstat } from "fs/promises";
import { stringify } from "querystring";
import React from 'react';
import {Title,clear, Form} from "../compornents/register_user"
// import styles from "../styles/register.module.css"


let nameA = "";
let zipA = "";
let mailA = "";
let addressA = "";
let telA = "";
let passA = "";


const list = [
  {
    num:0,
    item: "名前",
     id:"inputName",
    place: "Name"
  },
  {
    num:1,
    item: "メールアドレス",
     id:"inputEmail",
    place: "Email"
  },
  {
    num:2,
    item: "郵便番号",
     id:"inputZipcode",
    place: "Zipcode"
  },
  {
    num:3,
    item: "住所",
     id:"inputAddress",
    place: "Address"
  },
  {
    num:4,
    item: "電話番号",
     id:"inputTel",
    place: "Tel"
  },
  {
    num:5,
    item: "パスワード",
     id:"inputPassword",
    place: "Password"
  },
  {
    num:6,
    item: "確認用パスワード",
     id:"inputConfirmationPassword",
    place: "Confirmation Password"
  },

]



const Show = () => {

  return (
<div className="container" >
<nav className="navbar navbar-default">
  <div className="container-fluid">
    {/*  <!-- Brand and toggle get grouped for better mobile display -->  */}
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
        aria-expanded="false"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span> <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">
        {/* <!-- 企業ロゴ -->  */}
        <img
          alt="main log"
          // src="../static/img_pizza/header_logo.png"
          height="35"
        />
      </a>
    </div>

    {/*  Collect the nav links, forms, and other content for toggling   */}
    <div
      className="collapse navbar-collapse"
      id="bs-example-navbar-collapse-1"
    >
      <p className="navbar-text navbar-right">
        <a href="cart_list.html" className="navbar-link">ショッピングカート</a
        >&nbsp;&nbsp;
      </p>
    </div>
    {/*<!-- /.navbar-collapse -->  */}
  </div>
  {/* !-- /.container-fluid -->  */}
</nav>


{/* <!-- login form --> */}
<div className="row">
  <div
    className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-10 col-xs-12"
  >
    <div className="well">
      <form method="post" action="#">
        <fieldset>
          <Title  title="ユーザ登録" />
          <Form />
          <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={() => {
            
            let nameS = document.getElementById('inputName')  as HTMLInputElement;
            let zipS = document.getElementById('inputZipcode')  as HTMLInputElement;
            let mailS = document.getElementById('inputEmail')  as HTMLInputElement;
            let addressS = document.getElementById('inputAddress')  as HTMLInputElement;
            let telS = document.getElementById('inputTel')  as HTMLInputElement;
            let passS = document.getElementById('inputPassword')  as HTMLInputElement;
            let confPassS = document.getElementById('inputConfirmationPassword')  as HTMLInputElement;

            list.map((list) => {
              let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
              let echo = tag.style.display="none"
              })
              
        if(
              !nameS.value && 
              !mailS.value && 
              !zipS.value && 
              !addressS.value && 
              !telS.value && 
              !passS.value &&
              !confPassS.value 
        ){
              list.map((list) => {
              let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
              let echo = tag.style.display="inline-block"
              let alart = tag.innerHTML= `${list.item}を入力してください`
              })
   
        }else if(
              nameS.value && 
              mailS.value && 
              zipS.value && 
              addressS.value && 
              telS.value && 
              passS.value &&
              confPassS.value 
        ){

          let flagM1 = "true"
          let  flagM2 = "true"
          let  flagZ = "true"
          let  flagT = "true"
          let flagP = "true"
          let  flagC = "true"

          if(!mailS.value.includes('@')){
            let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
            let echo = tag.style.display="inline-block"
            let alart = tag.innerHTML= "メールアドレスの形式が不正です"
            flagM1 = ""
          }

          if(!(zipS.value.match(/^\d{3}-\d{4}$/))){
            let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
            let echo = tag.style.display="inline-block"
            let alart = tag.innerHTML= "郵便番号はXXX-XXXXの形式で入力してください"
            flagZ = ""
          }

          if(!(telS.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))){
            let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
            let echo = tag.style.display="inline-block"
            let alart = tag.innerHTML= "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
            flagT = ""
          }

          if(!(passS.value.length <= 16 && passS.value.length >= 8)){
            let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
            let echo =tag.style.display="inline-block"
            let alart = tag.innerHTML= "パスワードは８文字以上１６文字以内で設定してください"
            flagP  = ""
          }

          if(!(passS.value === confPassS.value)){
            let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
            let echo = tag.style.display="inline-block"
            let alart = tag.innerHTML= "パスワードと確認用パスワードが不一致です"
            flagC  = ""
          }
      
              if(
                flagM1 &&
                flagZ &&
                flagT  &&
                flagP  &&
                flagC  
                ){     
                  
            const last = async() => {     
            await fetch('http://localhost:8000/info')
              .then(response => response.json())
              .then((data) =>{ 
                data.map((data: any) => {                  
                   if(data.mail === mailS.value){
                     let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                     let echo = tag.style.display="inline-block"
                     let alart = tag.innerHTML= "そのメールアドレスはすでに使われています"
                     flagM2 = ""
                   }
                })
  
              });
           
              const data = {
                  name: nameS.value,
                  mail: mailS.value,
                  zip: zipS.value,
                  address: addressS.value,
                  tel: telS.value,
                  pass: passS.value,
                };
              if(flagM2){
                await fetch(`http://localhost:8000/info`,{
                  method: "POST" , 
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                }).then((response) => {
                  return response.json();
                }).then((data) => {
    
                })
                
                list.map((list) => {
                  let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
                  let none = tag.style.display="none"
                })}
              }
              last();
            }
            

            }else{

          list.map((list) => {
            let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
            let echo = tag.style.display="none"
            })

              if(!nameS.value){
                let tag = document.getElementsByClassName("control-label")[0] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "メールアドレスを入力してください"
              }

              if(!mailS.value){
                let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "メールアドレスを入力してください"

              }else{
                if(!mailS.value.includes('@')){
                  let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                  let echo = tag.style.display="inline-block"
                  let alart = tag.innerHTML= "メールアドレスの形式が不正です"
                }else{         
                  fetch('http://localhost:8000/info')
                  .then(response => response.json())
                  .then((data) =>{ 
                    data.map((data: any) => {
                      if(data.mail === mailS.value){
                        let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                        let echo = tag.style.display="inline-block"
                        let alart = tag.innerHTML= "そのメールアドレスはすでに使われています"
                      }
                    })
                  });  
                 
                }
            }

            
              if(!zipS.value){
                let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = document.getElementsByClassName("control-label")[2].innerHTML= "郵便番号を入力してください"
              }else{
                if(!(zipS.value.match(/^\d{3}-\d{4}$/))){
                  let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
                  let echo = tag.style.display="inline-block"
                  let alart = tag.innerHTML= "郵便番号はXXX-XXXXの形式で入力してください"
                }
              }


              if(!addressS.value){
                let tag = document.getElementsByClassName("control-label")[3] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "住所を入力してください"
              }
              
              if(!telS.value){
                let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "電話番号を入力してください"
              }else{
                if(!(telS.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))){
                  let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
                  let echo = tag.style.display="inline-block"
                  let alart = tag.innerHTML= "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
                }
              }

              if(!passS.value){
                let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "パスワードを入力してください"
              }else{
                if(!(passS.value.length <= 16 && passS.value.length >= 8)){
                  let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
                  let echo = tag.style.display="inline-block"
                  let alart = tag.innerHTML= "パスワードは８文字以上１６文字以内で設定してください"
                }
              }


              if(!confPassS.value){
                let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "確認用パスワードを入力してください"
              }else{
                if(!(passS.value === confPassS.value)){
                  let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
                  let echo = tag.style.display="inline-block"
                  let alart = tag.innerHTML= "パスワードと確認用パスワードが不一致です" 
                }
              }
              
            }
            
 
            }}>登録</button>
            <button type="reset" className="btn btn-primary" onClick={()=>{
              clear ();
              list.map((list) => {
                let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
                let none = tag.style.display="none"
              })
              
            }}>クリア</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</div>
</div> 
    
  );

}

{/* 
  空欄の場合、empty
  形式が不正の場合、format-incorrect
  問題なしの場合、ture
  登録済みの場合、registered
  8文字以上16文字以内でなかった場合、pass-incorrect
  パスワードと不一致の場合、pass-mismatch
*/}

export default Show;
