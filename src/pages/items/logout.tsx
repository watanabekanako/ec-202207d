import Link from 'next/link';

const Logout = () => {

const logoutClick = () => {
    // document.cookie = "userId=1; max-age=60";
    // // document.cookie = "userId=; max-age=0";
    // alert(document.cookie);
    // const cookie = document.cookie;
    // alert(cookie);
    var dt = new Date('1999-12-31T23:59:59Z');
    document.cookie = "name=; value=; path=; expires=" + dt.toUTCString();
    console.log(document.cookie);

    let result = cookieStore.delete('userId');
console.log(result);
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
