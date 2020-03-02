
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




				let slideOne = document.querySelector(".slide-one-button");
				let slideTwo = document.querySelector(".slide-two-button");
				let slideThree = document.querySelector(".slide-three-button");

				let slideOneNext = document.querySelector(".slide-one");
				let slideTwoNext = document.querySelector(".slide-two");
				let slideThreeNext = document.querySelector(".slide-three");

				let slideActive = document.querySelector(".slide-active");


				if (slideOne) {
					slideOne.addEventListener("click", function (evt) {
					evt.preventDefault();

					slideOneNext.classList.remove("none");
					slideTwoNext.classList.add("none");
					slideThreeNext.classList.add("none");

					slideTwo.classList.remove("slide-active");
					slideThree.classList.remove("slide-active");
					slideOne.classList.add("slide-active");

				});}

				if (slideTwo) {
					slideTwo.addEventListener("click", function (evt) {
					evt.preventDefault();
						console.log("должен подгрузился второй слайд");
					slideTwoNext.classList.remove("none");
					slideOneNext.classList.add("none");
					slideThreeNext.classList.add("none");

					slideOne.classList.remove("slide-active");
					slideThree.classList.remove("slide-active");
					slideTwo.classList.add("slide-active");
				});}

				if (slideThree) {
					slideThree.addEventListener("click", function (evt) {
					evt.preventDefault();
						console.log("должен подгрузился третий слайд");
					slideThreeNext.classList.remove("none");
					slideOneNext.classList.add("none");
					slideTwoNext.classList.add("none");

					slideTwo.classList.remove("slide-active");
					slideOne.classList.remove("slide-active");
					slideThree.classList.add("slide-active");
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