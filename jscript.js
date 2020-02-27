
				let link = document.querySelector(".link"); 
				let popup = document.querySelector(".feedback--form"); 
				let close = document.querySelector(".close");

				if (link) {
					link.addEventListener("click", function (evt) {
						evt.preventDefault();
						console.log("должен подгрузиться попам");
						console.log(popup)
						popup.classList.remove("none");
				});}

				if (close) {
					close.addEventListener("click", function (evt) {
						evt.preventDefault();
						console.log("должен подгрузиться попам");
						popup.classList.add("none");
				});}




				let slideOne = document.querySelector(".slide--one--input");
				let slideTwo = document.querySelector(".slide--two--input");
				let slideThree = document.querySelector(".slide--three--input");


				let slideOneSmena = document.querySelector(".slide--one");
				let slideTwoSmena = document.querySelector(".slide--two");
				let slideThreeSmena = document.querySelector(".slide--three");


				if (slideOne) {
					slideOne.addEventListener("click", function (evt) {
					evt.preventDefault();

					slideOneSmena.classList.remove("none");	
					slideTwoSmena.classList.add("none");	
					slideThreeSmena.classList.add("none");
				});}

				if (slideTwo) {
					slideTwo.addEventListener("click", function (evt) {
					evt.preventDefault();
						console.log("должен подгрузился второй слайд");					
					slideTwoSmena.classList.remove("none");	
					slideOneSmena.classList.add("none");	
					slideThreeSmena.classList.add("none");
				});}

				if (slideThree) {
					slideThree.addEventListener("click", function (evt) {
					evt.preventDefault();
						console.log("должен подгрузился третий слайд");						
					slideThreeSmena.classList.remove("none");	
					slideOneSmena.classList.add("none");	
					slideTwoSmena.classList.add("none");
				});}


				let cobeOneActive = document.querySelector(".button--grey--cube--one");
				let cobeTwoActive = document.querySelector(".button--grey--cube--two");
				let cobeThreeActive = document.querySelector(".button--grey--cube--three");


				let cobeActive = document.querySelector(".button--grey--cube--active");
				if (cobeOneActive) {
					cobeOneActive.addEventListener("click", function (evt) {
						
					cobeOneActive.classList.add("button--grey--cube--active");
					cobeTwoActive.classList.remove("button--grey--cube--active");
					cobeThreeActive.classList.remove("button--grey--cube--active");
				
				});}

				if (cobeTwoActive) {
					cobeTwoActive.addEventListener("click", function (evt) {
					
					cobeTwoActive.classList.add("button--grey--cube--active");					
					cobeOneActive.classList.remove("button--grey--cube--active");
					cobeThreeActive.classList.remove("button--grey--cube--active");
				});}

				if (cobeThreeActive) {
					cobeThreeActive.addEventListener("click", function (evt) {

					cobeThreeActive.classList.add("button--grey--cube--active");					
					cobeTwoActive.classList.remove("button--grey--cube--active");
					cobeOneActive.classList.remove("button--grey--cube--active");
				});}