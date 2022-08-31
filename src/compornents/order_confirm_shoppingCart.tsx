
// 仮表示
export const ShoppingCart = () => {
  return (
    <div className="row">
      <div
        className="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12"
      >
        <h3 className="text-center">注文内容確認</h3>
        <table className="table table-striped item-list-table">
          <tbody>
            <tr>
              <th>
                <div className="text-center">商品名</div>
              </th>
              <th>
                <div className="text-center">サイズ、価格(税抜)、数量</div>
              </th>
              <th>
                <div className="text-center">トッピング、価格(税抜)</div>
              </th>
              <th>
                <div className="text-center">小計</div>
              </th>
            </tr>
            <tr>
              <td>
                <div className="center">
                  <img
                    src="../static/img_pizza/1.jpg"
                    className="img-responsive img-rounded item-img-center"
                    width="100"
                    height="300"
                  /><br />
                  じゃがバターベーコン
                </div>
              </td>
              <td>
                <span className="price">&nbsp;Ｌ</span>&nbsp;&nbsp;2,380円
                &nbsp;&nbsp;1個
              </td>
              <td>
                <ul>
                  <li>ピーマン300円</li>
                  <li>オニオン300円</li>
                  <li>あらびきソーセージ300円</li>
                </ul>
              </td>
              <td>
                <div className="text-center">3,280円</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}
