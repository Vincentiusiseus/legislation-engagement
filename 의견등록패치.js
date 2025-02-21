javascript:(function() {$("#tbody").on("mousedown","a",function(e){
    $(this).attr(
	    "href",
	    $(this).attr("href").replace("lgsltpaOngoing/view.do","lgsltpaOpn/forInsert.do").replace("lgsltpaOpn/list.do","lgsltpaOpn/forInsert.do")
    )
})})()