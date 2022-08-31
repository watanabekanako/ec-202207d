
export const clear = () => {
  let getNameId = document.getElementById('inputName') as HTMLInputElement;
  let getZipId = document.getElementById('inputZipcode') as HTMLInputElement;
  let getMailId = document.getElementById('inputEmail') as HTMLInputElement;
  let getAddrId = document.getElementById('inputAddress') as HTMLInputElement;
  let getTelId = document.getElementById('inputTel') as HTMLInputElement;
  let getPassId = document.getElementById('inputPassword') as HTMLInputElement;
  let getPassConfId = document.getElementById('inputConfirmationPassword') as HTMLInputElement;

  getNameId.value = ""
  getZipId.value = ""
  getMailId.value = ""
  getAddrId.value = ""
  getTelId.value = ""
  getPassId.value = ""
  getPassConfId.value = ""
}
