import {Nav} from "../compornents/order_confirm_nav"
import {ShoppingCart} from "../compornents/order_confirm_shoppingCart"

const Total = () => {
  return (
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="form-group text-center">
          <span id="total-price">消費税：8,000円</span><br />
          <span id="total-price">ご注文金額合計：38,000円 (税込)</span>
        </div>
      </div>
    </div>
  )
}

export const Show = () => {
  return (
    <>
      <div className="container">
        <Nav />
        {/*table */}
        {/* <ShoppingCart /> */}
        {/* <Total /> */}

        {/*table */}
        <form action="#">
          <div className="row">
            <div
              className="table-responsive col-lg-offset-3 col-lg-6 col-md-offset-1 col-md-10 col-sm-10 col-xs-12"
            >
              <h3 className="text-center">お届け先情報</h3>
              <table className="table table-striped item-list-table">
                <tbody>
                  <tr>
                    <td>
                      <div className="text-center">お名前</div>
                    </td>
                    <td>
                      <label
                        id="nameErr"
                        className="control-label"
                        style={{ color: "red", display: "none" }}
                        htmlFor="inputPeriod"
                      >名前を入力してください
                      </label>
                      <input type="text" id="name" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="text-center" >メールアドレス</div>
                    </td>
                    <td>
                      <label
                        id="mailErr"
                        className="control-label"
                        style={{ color: "red", display: "none" }}
                        htmlFor="inputPeriod"

                      >メールアドレスを入力してください
                      </label>
                      <input type="text" id="mail" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="text-center" >郵便番号</div>
                    </td>
                    <td>
                      <label
                        id="zipErr"
                        className="control-label"
                        style={{ color: "red", display: "none" }}
                        htmlFor="inputPeriod"
                      >郵便番号を入力してください
                      </label>
                      <input type="text" id="zip" />&nbsp;&nbsp;<button>住所検索</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="text-center" >住所</div>
                    </td>
                    <td>
                      <label
                        id="addrErr"
                        className="control-label"
                        style={{ color: "red", display: "none" }}
                        htmlFor="inputPeriod"
                      >住所を入力してください
                      </label>
                      <input type="text" id="address" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="text-center" >電話番号</div>
                    </td>
                    <td>
                      <label
                        id="telErr"
                        className="control-label"
                        style={{ color: "red", display: "none" }}
                        htmlFor="inputPeriod"
                      >電話番号を入力してください
                      </label>
                      <input type="text" id="tel" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="text-center" id="date">配達日時</div>
                    </td>
                    <td>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-12">
                            <label
                              id="dateErr"
                              className="control-label"
                              style={{ color: "red", display: "none" }}
                              htmlFor="inputPeriod"
                            >配達日時を入力してください</label
                            >
                          </div>
                          <div className="col-sm-5">
                            <input
                              type="date"
                              name="name"
                              id="name"
                              className="form-control input-sm"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="responsibleCompany"
                                defaultChecked={true}
                              />
                              10時
                            </label>
                            {
                              (() => {
                                const radioList = [];
                                for (let i = 11; i <= 18; i++) {
                                  radioList.push(
                                    <label className="radio-inline" key={i}>
                                      <input type="radio" name="responsibleCompany" />
                                      {i}時
                                    </label>
                                  )
                                }
                                return radioList;

                              })()
                            }
                            <br />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>
        <form action="#">
          {/*table */}
          <div className="row">
            <div
              className="table-responsive col-lg-offset-3 col-lg-6 col-md-offset-1 col-md-10 col-sm-10 col-xs-12"
            >
              <h3 className="text-center">お支払い方法</h3>
              <table className="table table-striped item-list-table">
                <tbody>
                  <tr>
                    <td>
                      <div className="text-center">代金引換</div>
                    </td>
                    <td>
                      <div className="row">
                        <div className="col-sm-12">
                          <label className="radio-inline">
                            <input
                              type="radio"
                              name="responsibleCompany"
                              defaultChecked={true}
                            />
                            代金引換
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="text-center">クレジットカード決済</div>
                    </td>
                    <td align="center">
                      <div className="row">
                        <div className="col-sm-12">
                          <label className="radio-inline">
                            <input
                              type="radio"
                              name="responsibleCompany"
                              defaultChecked={true}
                            />
                            クレジットカード </label
                          ><br /><br />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-offset-4 col-xs-4">
              <div className="form-group">
                <input
                  className="form-control btn btn-warning btn-block"
                  type="button"
                  value="この内容で注文する"
                  onClick={() => {
                    let getNameId = document.getElementById("name") as HTMLInputElement
                    let getMailId = document.getElementById("mail") as HTMLInputElement
                    let getZipId = document.getElementById("zip") as HTMLInputElement
                    let getAddrId = document.getElementById("address") as HTMLInputElement
                    let getTelId = document.getElementById("tel") as HTMLInputElement

                    let flagMail = "true"
                    let flagZip = "true"
                    let flagTel = "true"
                    let flag = "true"

                    // エラーを非表示
                    const errList = [
                      "",
                      "",
                      ""
                    ]
                    a.map((list) => {
                      let tag = document.getElementsByClassName("control-label")[list.num] as HTMLElement;
                      let echo = tag.style.display = "none"
                    })



                    if (
                      getNameId.value &&
                      getMailId.value &&
                      getZipId.value &&
                      getAddrId.value &&
                      getTelId.value
                    ) {
                      if (!getMailId.value.includes('@')) {
                        let tag = document.getElementById("mailErr") as HTMLInputElement;
                        let echo = tag.style.display = "inline-block"
                        let alart = tag.innerHTML = "メールアドレスの形式が不正です"
                        // flagMailFormat = ""
                      }

                      if (!(getZipId.value.match(/^\d{3}-\d{4}$/))) {
                        let tag = document.getElementById("zipErr") as HTMLInputElement;
                        let echo = tag.style.display = "inline-block"
                        let alart = tag.innerHTML = "郵便番号はXXX-XXXXの形式で入力してください"
                        // flagZip = ""
                      }

                      if (!(getTelId.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))) {
                        let tag = document.getElementById("telErr") as HTMLInputElement;
                        let echo = tag.style.display = "inline-block"
                        let alart = tag.innerHTML = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
                        // flagTel = ""
                      }
                    }else{

                      if(getMailId.value){
                        if (!getMailId.value.includes('@')) {
                          let tag = document.getElementById("mailErr") as HTMLInputElement;
                          let echo = tag.style.display = "inline-block"
                          let alart = tag.innerHTML = "メールアドレスの形式が不正です"
                        }
                        }else{
                          let tag = document.getElementById("mailErr") as HTMLInputElement;
                          let echo = tag.style.display = "inline-block"
                          let alart = tag.innerHTML = "メールアドレスを入力してください"
                        }

                        if(getZipId.value){
                          if (!(getZipId.value.match(/^\d{3}-\d{4}$/))) {
                            let tag = document.getElementById("zipErr") as HTMLInputElement;
                            let echo = tag.style.display = "inline-block"
                            let alart = tag.innerHTML = "郵便番号はXXX-XXXXの形式で入力してください"
                            // flagZip = ""
                          }
                        }else{
                          let tag = document.getElementById("zipErr") as HTMLInputElement;
                          let echo = tag.style.display = "inline-block"
                          let alart = tag.innerHTML = "郵便番号を入力してください"
                        }

                        if(getTelId.value){
                          if (!(getTelId.value.match(/^[0-9]*-[0-9]*-[0-9]*$/))) {
                            let tag = document.getElementById("telErr") as HTMLInputElement;
                            let echo = tag.style.display = "inline-block"
                            let alart = tag.innerHTML = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
                            // flagTel = ""
                          }
                        }else{
                          let tag = document.getElementById("telErr") as HTMLInputElement;
                          let echo = tag.style.display = "inline-block"
                          let alart = tag.innerHTML = "電話番号を入力してください"
                        }

                        if(!getNameId.value){
                          let tag = document.getElementById("nameErr") as HTMLInputElement;
                          let echo = tag.style.display = "inline-block"
                        }

                        if(!getAddrId.value){
                          let tag = document.getElementById("addrErr") as HTMLInputElement;
                          let echo = tag.style.display = "inline-block"
                        }

                    }
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>


    </>
  );

}
export default Show;
