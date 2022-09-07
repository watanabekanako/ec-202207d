import Link from 'next/link';

const Logout = () => {

  const logoutClick = () => {
    document.cookie = 'userId=; max-age=0';
    document.cookie = 'userName=; max-age=0';

    let cookie = document.cookie;

    if (cookie.includes('status=shopping')) {
      document.cookie = 'status=shopping; max-age=0';
    }
  };

  return (
    <>
      <button onClick={logoutClick}>ログアウト</button>
      {/* <Link href={'/items/loginpage'}>
        <a>ログインページに戻る</a>
      </Link> */}
    </>
  );
};

export default Logout;
