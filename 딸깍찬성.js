javascript:(function(){
	document.querySelector("#txt_sj").value = "찬성합니다";
	document.querySelector("#txt_cn").value = "이 법률안을 찬성합니다";
	const captcha_el = document.querySelector("#catpchaAnswer");
	const submit_el = document.querySelector("#btn_opnReg");
	const submit_click = () => setTimeout(() => submit_el.click(),10);
	captcha_el.value = "1111";
	captcha_el.addEventListener("input", () => {
		if(captcha_el.value.length == 5) {
			submit_click()
		}
	});
	submit_click()
})()