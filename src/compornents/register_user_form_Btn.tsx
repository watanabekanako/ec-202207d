import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import useSWR, { useSWRConfig } from 'swr'
import { useState } from "react"
import style from "../styles/register_user.module.css";


export const Btn = (props: { zipFlag: string, zipValue: string }) => {
    return (
    <input 
    type="button" 
    value="住所検索" 
    className={style.btnSearch} 
    onClick={() => {
      let getAddrId = document.getElementById('inputAddress') as HTMLInputElement;
      let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
      tag.style.display = "none"

      console.log(props.zipFlag)
      
      if(props.zipFlag === "ok"){
        fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${props.zipValue}`)
        .then(response => response.json())
        .then((json) => {
          getAddrId.value = `${json.results[0].address1}${json.results[0].address2}${json.results[0].address3}`;
          let tag = document.getElementsByClassName("control-label")[3] as HTMLElement;
          tag.style.display = "none"
        })
        .catch((error) => {
          let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;;
          tag.style.display = "inline-block"
          tag.innerHTML = "この郵便番号は存在しません"
        });
      }

      if(props.zipFlag === "empty" || props.zipFlag === "init"){
        let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
        tag.style.display = "inline-block"
        tag.innerHTML = "郵便番号を入力してください"
      }

      if(props.zipFlag === "format-incorect"){
        let tag = document.getElementsByClassName("control-label")[2] as HTMLElement;
        tag.style.display = "inline-block"
        tag.innerHTML = "郵便番号はXXX-XXXXの形式で入力してください"
      }

    }}
    />
    );
}

export default Btn;
