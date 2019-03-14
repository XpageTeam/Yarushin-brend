document.addEventListener("DOMContentLoaded", e => {

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
})