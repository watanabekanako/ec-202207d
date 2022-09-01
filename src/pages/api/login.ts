import type { NextApiRequest, NextApiResponse } from 'next';

export default function LoginApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  let dataItem = JSON.parse(req.body);
  console.log(dataItem.email);
  console.log(dataItem.pass);
  const url = `http://localhost:8000/users?mail=${dataItem.email}&pass=${dataItem.pass}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].id);
      if (data.length > 0 && data.length <= 1) {
        res.setHeader('Set-Cookie', [`userId=${data[0].id}`]);
        res.status(200).json({});
      } else if (data.length < 2) {
        console.log('複数取得されました');
      } else {
        console.log('1人も取得できませんでした');
      }
    })
    .catch((error) => {
      console.log('失敗');
      res.status(404)
      // res.status(404).send("メールとパスワードが間違っています");
    });
}





// api 側から返すレスポンスの内容を分けます。

// 成功時
// * status: 200
// * body: ユーザのJSON

// 失敗時（一例です）
// * status: 404 <- HTTPステータス404は対象が見つからない場合のコードです
// * body: { "message": "ユーザが見つかりませんでした" }

// 画面側ではステータスを見て成功か失敗か判定したあと、失敗であればエラーメッセージを表示するといった対応をとればよいです。（レスポンスのエラーメッセージは使わなくても問題ありません）
