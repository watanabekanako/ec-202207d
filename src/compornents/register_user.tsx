import React from 'react';
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Title = (props: { title: string }) => {
  return (
    <legend>{props.title}</legend>
  );
}

export const Btn = (props: { item: string }) => {
  if (props.item === "住所") {
    return (<input type="button" value="住所検索" />);
  } else {
    return null;
  }
}


export const loginCheck = () =>{
  const router = useRouter();
  let cookie = document.cookie;
  if(cookie.includes("userId")){
    router.push("/items/order_confirm");
  }else{
    router.push("/items/loginpage");
    document.cookie="status=shopping"
  }
}

export const cartLogin = () =>{
  const router = useRouter();
  let cookie = document.cookie;
  if(cookie.includes("status=shopping")){
    router.push("/items/order_confirm");
  }else{
    document.cookie="status=shopping; max-age=0"
  }
}

// res.setHeader('Set-Cookie', [`userId=${data[0].id};path=/items`]);

// let cookie = document.cookie;
// if(cookie.includes("status=shopping")){
//   document.cookie="status=shopping; max-age=0"
// }
