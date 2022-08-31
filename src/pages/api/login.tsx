export default function LoginApi() {

    const request = {
        method: 'GET',
        
    }

    fetch('http://localhost:8000/users')

}




// import Link from 'next/link';
// import React, { useState } from 'react';
// import { useRouter } from "next/router";

// export default function Login() {      

    
// const router = useRouter();
//     // let emailItem = document.getElementById('email') as HTMLInputElement;
//     // let passItem = document.getElementById('pass') as HTMLInputElement;


//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
  
//   const HandleSubmit = (e:any) => {

//     e.preventDefault();

//     fetch('http://localhost:8000/users?mail={emailItem}')
//       .then((response) => response.json())
//       .then((data) => {
//         // router.push('/items/profile')
//         console.log(data);
//     //     if(data[0].mail === emailItem && data[0].pass === passItem) {
//     //         // alert('ログイン成功しました');
//     //         router.push('/items/profile')
//     //     } else {
//     //         alert('メールアドレス、またはパスワードが間違っています');
//     //     }
//     //   })
//     //   .catch((error) => {
//     //     alert('ログインエラー');
//         // return (
//         //     <Login />
//         // );
//       });
//   };

//   return (
//     <form action="#" method="POST" onSubmit={HandleSubmit}>
//       <p>メールアドレス</p>
//       <input
//         id="email"
//         type="email"
//         name="email"
//         // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//         //     const emailItem = (event.target.value);
//         //     console.log(emailItem);}}
//         value={email}
//         onChange={(event) => {
//           console.log(email);
//           setEmail(event.target.value);
//         }}
//       />
//       <p>パスワード</p>
//       <input
//         id="pass"
//         type="password"
//         name="pass"
//         // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//         //     const passItem = (event.target.value);
//         //     console.log(passItem);}}
//         value={pass}
//         onChange={(event) => {setPass(event.target.value)}}
//       />
//       <br />
//       <button type="submit">送信</button>
//     </form>
//   );
// }









// const handleSubmit = (e) => {
//     e.preventDefault();

//     const items = {
//       email: email,
//       pass: pass,
//     };

//     const request = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json; charset=utf-8',
//       },
//       body: JSON.stringify(items),
//     };

//     fetch('http://localhost:8000/login',request)
//     .then((response) => response.json())
//     .catch((error) => {
//         alert('エラーが発生しました');
//     })
//   };
