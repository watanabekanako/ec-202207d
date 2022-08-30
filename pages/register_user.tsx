import { lstat } from "fs/promises";
import { stringify } from "querystring";
import React from 'react';
import {Title,clear, Form} from "../compornents/register_user"
// import styles from "../styles/register.module.css"
import { useRouter } from "next/router";

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
  const router = useRouter();

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
            
            let getNameId = document.getElementById('inputName')  as HTMLInputElement;
            let getZipId = document.getElementById('inputZipcode')  as HTMLInputElement;
            let getMailId = document.getElementById('inputEmail')  as HTMLInputElement;
            let getAddrId = document.getElementById('inputAddress')  as HTMLInputElement;
            let getTelId = document.getElementById('inputTel')  as HTMLInputElement;
            let getPassId = document.getElementById('inputPassword')  as HTMLInputElement;
            let getPassConfId = document.getElementById('inputConfirmationPassword')  as HTMLInputElement;

            list.map((list) => {
              let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
              let echo = tag.style.display="none"
              })
              
        if(
              !getNameId.value && 
              !getMailId.value && 
              !getZipId.value && 
              !getAddrId.value && 
              !getTelId.value && 
              !getPassId.value &&
              !getPassConfId.value 
        ){
              list.map((list) => {
              let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
              let echo = tag.style.display="inline-block"
              let alart = tag.innerHTML= `${list.item}を入力してください`
              })
   
        }else if(
              getNameId.value && 
              getMailId.value && 
              getZipId.value && 
              getAddrId.value && 
              getTelId.value && 
              getPassId.value &&
              getPassConfId.value 
        ){

          let flagMailFormat = "true"
          let flagMailDup = "true"
          let flagZip = "true"
          let flagTel = "true"
          let flagPassLength = "true"
          let flagPassConf = "true"

          if(!getMailId.value.includes('@')){
            let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
            let echo = tag.style.display="inline-block"
            let alart = tag.innerHTML= "メールアドレスの形式が不正です"
            flagMailFormat = ""
          }

          if(!(getZipId.value.match(/^\d{3}-\d{4}$/))){
            let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
            let echo = tag.style.display="inline-block"
            let alart = tag.innerHTML= "郵便番号はXXX-XXXXの形式で入力してください"
            flagZip = ""
          }

          if(!(getTelId.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))){
            let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
            let echo = tag.style.display="inline-block"
            let alart = tag.innerHTML= "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
            flagTel = ""
          }

          if(!(getPassId.value.length <= 16 && getPassId.value.length >= 8)){
            let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
            let echo =tag.style.display="inline-block"
            let alart = tag.innerHTML= "パスワードは８文字以上１６文字以内で設定してください"
            flagPassLength  = ""
          }

          if(!(getPassId.value === getPassConfId.value)){
            let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
            let echo = tag.style.display="inline-block"
            let alart = tag.innerHTML= "パスワードと確認用パスワードが不一致です"
            flagPassConf  = ""
          }
      
              if(
                flagMailFormat &&
                flagZip &&
                flagTel  &&
                flagPassLength  &&
                flagPassConf  
                ){     
                  
            const post = async() => {     
            await fetch('http://localhost:8000/users')
              .then(response => response.json())
              .then((data) =>{ 
                data.map((data: any) => {                  
                   if(data.mail === getMailId.value){
                     let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                     let echo = tag.style.display="inline-block"
                     let alart = tag.innerHTML= "そのメールアドレスはすでに使われています"
                     flagMailDup = ""
                   }
                })
  
              });
           
              const data = {
                  name: getNameId.value,
                  mail: getMailId.value,
                  zip: getZipId.value,
                  address: getAddrId.value,
                  tel: getTelId.value,
                  pass: getPassId.value,
                };

              if(flagMailDup){
                await fetch(`http://localhost:8000/users`,{
                  method: "POST" , 
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                }).then((response) => {
                  return response.json();
                }).then((data) => {
                  router.push("/");
                })
                
                list.map((list) => {
                  let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
                  let none = tag.style.display="none"
                })}
              }
              post();
            }
            

            }else{

          list.map((list) => {
            let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
            let echo = tag.style.display="none"
            })

              if(!getNameId.value){
                let tag = document.getElementsByClassName("control-label")[0] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "メールアドレスを入力してください"
              }

              if(!getMailId.value){
                let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "メールアドレスを入力してください"

              }else{
                if(!getMailId.value.includes('@')){
                  let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                  let echo = tag.style.display="inline-block"
                  let alart = tag.innerHTML= "メールアドレスの形式が不正です"
                }else{         
                  fetch('http://localhost:8000/users')
                  .then(response => response.json())
                  .then((data) =>{ 
                    data.map((data: any) => {
                      if(data.mail === getMailId.value){
                        let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
                        let echo = tag.style.display="inline-block"
                        let alart = tag.innerHTML= "そのメールアドレスはすでに使われています"
                      }
                    })
                  });  
                 
                }
            }

            
              if(!getZipId.value){
                let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = document.getElementsByClassName("control-label")[2].innerHTML= "郵便番号を入力してください"
              }else{
                if(!(getZipId.value.match(/^\d{3}-\d{4}$/))){
                  let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
                  let echo = tag.style.display="inline-block"
                  let alart = tag.innerHTML= "郵便番号はXXX-XXXXの形式で入力してください"
                }
              }


              if(!getAddrId.value){
                let tag = document.getElementsByClassName("control-label")[3] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "住所を入力してください"
              }
              
              if(!getTelId.value){
                let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "電話番号を入力してください"
              }else{
                if(!(getTelId.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))){
                  let tag = document.getElementsByClassName("control-label")[4] as HTMLElement;
                  let echo = tag.style.display="inline-block"
                  let alart = tag.innerHTML= "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
                }
              }

              if(!getPassId.value){
                let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "パスワードを入力してください"
              }else{
                if(!(getPassId.value.length <= 16 && getPassId.value.length >= 8)){
                  let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
                  let echo = tag.style.display="inline-block"
                  let alart = tag.innerHTML= "パスワードは８文字以上１６文字以内で設定してください"
                }
              }


              if(!getPassConfId.value){
                let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
                let echo = tag.style.display="inline-block"
                let alart = tag.innerHTML= "確認用パスワードを入力してください"
              }else{
                if(!(getPassId.value === getPassConfId.value)){
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
