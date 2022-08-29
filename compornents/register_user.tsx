import React from 'react';

export const Title = (props: {title: string}) => {
  return (
    <legend>{props.title}</legend>
  );
}

export const Btn = (props:{item: string}) => {
  if(props.item === "住所"){
   return  (<input type="button" value="住所検索" />)  ;
  }else{
    return null;
  }
}

export const clear = () => {
  let nameS = document.getElementById('inputName')  as HTMLInputElement;
  let zipS = document.getElementById('inputZipcode')  as HTMLInputElement;
  let mailS = document.getElementById('inputEmail')  as HTMLInputElement;
  let addressS = document.getElementById('inputAddress')  as HTMLInputElement;
  let telS = document.getElementById('inputTel')  as HTMLInputElement;
  let passS = document.getElementById('inputPassword')  as HTMLInputElement;
  let confPassS = document.getElementById('inputConfirmationPassword')  as HTMLInputElement;

  nameS.value = ""
  zipS.value = ""
  mailS.value = ""
  addressS.value = ""
  telS.value = ""
  passS.value = ""
  confPassS.value = ""
}

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

export const Form = () => {


  const [err, SetErr] = React.useState(["true","true","true","true","true","true","true"]);
  
  
  // const mailCheck = (props,num) => {
    
  //   if(!props.includes('@')){
  //     SetErr(err.map((err,index) =>(index === num ? "format-incorrect" : err  )));     
  //   }else{
  //     SetErr(err.map((err,index) =>(index === num ? "true" : err  )))
  //   }  }

  // const judge = (props) => {
  //   if(!props){
  //     SetErr(err.map((err,index) =>(index === num ? "format-incorrect" : err  )));     
  //   }else{
    //     SetErr(err.map((err,index) =>(index === num ? "true" : err  )))
  //   }  
  // }

  return (
  <>
  {
    list.map((list,index) => {
      return (
        <div className="form-group" key={index} >
        <label htmlFor={list.id}>{list.item}:</label>
        <label
          id={list.place}
          className="control-label"
          style={{color: "red" , 
          display:"none"
        }} 
          htmlFor="inputError"
          >{list.item}を入力してください</label>
        <Btn item={list.item} />
        <input
          type="text"
          id={list.id}
          className="form-control"
          placeholder={list.place}
          onChange={(e)=>{

          }}
          />
          </div>
      );
    })
  }
  </>
  );
}
