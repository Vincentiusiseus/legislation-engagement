javascript:(function() {$("#tbody").on("mousedown","a",function(e){
    $(this).attr(
	    "href",
	    $(this).attr("href").replace("lgsltpaOngoing/view.do","lgsltpaOpn/forInsert.do").replace("lgsltpaOpn/list.do","lgsltpaOpn/forInsert.do")
    );
    const checkbox_el = $(this).parents("tr")[0].querySelector("input[type=checkbox]");
    if(! checkbox_el.checked) checkbox_el.click()
})})()