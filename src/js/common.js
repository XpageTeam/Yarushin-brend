import "./top-message.js"
import "./jquery.fancybox.js"

document.addEventListener("DOMContentLoaded", e => {

	require("../css/jquery.fancybox.css")

	;(function(){
		let titles = document.querySelectorAll(".od__title-cont");

		if (!titles.length)
			return

		for (var title of titles)
			title.addEventListener("click", function(){
				let parent = this.closest(".od");

				if (parent.classList.contains("js__opened"))
					parent.classList.remove("js__opened")
				else
					parent.classList.add("js__opened")
			})
	})()

	;(function(){
		$(".customers-slider").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			responsive: [
				{
					breakpoint: 660,
					settings: {
						slidesToShow: 1,
						autoplay: true,
						dots: true
					}
				}
			]
		})
	})()

	;(function(){
		const bxFilterTitle = document.querySelectorAll(".bx-filter-parameters-box");

		if (!bxFilterTitle.length)
			return

		let i = 0; 

		for (var title of bxFilterTitle){
			title.index = i

			title.addEventListener("click", function(){
				if (this.classList.contains("bx-active"))
					for (var title of bxFilterTitle)
						if (this.index != title.index)
							title.classList.remove("bx-active")
			})

			i++
		}
	})()

	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "slideShow", "close"],
	})

	// $(".customers-slider").each(function(){
	// 	let $this = $(this);

	// 	$this.slick({
	// 		slidesToShow: 5,
	// 		slidesToScroll: 1,
	// 		appendArrows: $this.closest(".bestsellers__cont").find(".new__title-cont"),
	// 		responsive: [
	// 			{
	// 				breakpoint: 1100,
	// 				settings: {
	// 					slidesToShow: 4,
	// 				}
	// 			},
	// 			{
	// 				breakpoint: 1000,
	// 				settings: {
	// 					slidesToShow: 3
	// 				}
	// 			},
	// 			{	
	// 				breakpoint: 660,
	// 				settings: {
	// 					slidesToShow: 2
	// 				}
	// 			}
	// 		]
	// 	})
	// })
})