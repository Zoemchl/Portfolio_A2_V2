// const imgContainer = document.querySelector(".parallax-container");

// const move = function(e) {
//     let x = e.pageX - this.offsetLeft - this.offsetWidth / 2;
//     let y = e.pageY - this.offsetTop - this.offsetHeight / 2;
//     let xPourcent = x * 100 / this.offsetWidth / 10;
//     let yPourcent = y * 100 / this.offsetHeight / 10;

//     this.style.transform = "rotateX("+ -yPourcent +"deg) rotateY("+ xPourcent +"deg)";
// };

// const reinit = function() {
//     setTimeout(() => {
//     this.style.transform = "";
//     }, 200);
// };

// imgContainer.addEventListener("mousemove", move);

// imgContainer.addEventListener("mouseleave", reinit);


[...document.querySelectorAll(".column_scroll")].map(column => {
    column.style.setProperty("--animation", "slide");
    column.style.setProperty("height", "200%");
    column.innerHTML = column.innerHTML + column.innerHTML;
});