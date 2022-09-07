import Link from 'next/link';
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  const logoutClick = () => {
    document.cookie = 'userId=; max-age=0';

    let cookie = document.cookie;

    if (cookie.includes('status=shopping')) {
      document.cookie = 'status=shopping; max-age=0';
    }
    router.push("/items/order_finished");
  };

  return (
    <>
      {/* <button onClick={logoutClick}>ログアウトする</button> */}
      <Link href={'#'} onClick={logoutClick}>
        <a>ログインページに戻る</a>
      </Link>
    </>
  );
};

export default Logout;
