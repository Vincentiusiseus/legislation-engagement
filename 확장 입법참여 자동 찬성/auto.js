const sjInput = document.querySelector("#txt_sj");
const cnInput = document.querySelector("#txt_cn");
const captchaInput = document.querySelector("#catpchaAnswer");
const submitButton = document.querySelector("#btn_opnReg");

let script_ran = false

window.onload = () => { window.onfocus = () => {
  if(script_ran) return; else script_ran = true
  
  sjInput.value = "찬성합니다";
  cnInput.value = "이 법률안을 찬성합니다";
  captchaInput.value = '1111'
  submitButton.click()
}}