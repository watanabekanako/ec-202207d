import Link from 'next/link';

const Logout = () => {

const logoutClick = () => {
    // document.cookie = "userId=1; max-age=60";
    // // document.cookie = "userId=; max-age=0";
    // alert(document.cookie);
    // const cookie = document.cookie;
    // alert(cookie);
    document.cookie = "userId=; max-age=0";
    console.log(document.cookie);
}



  return (
    <>
    <button onClick={logoutClick}>ログアウトする</button>
    <Link href={'/items/loginpage'}>
        <a>ログインページに戻る</a>
    </Link>
    </>
  )
}

export default Logout;
