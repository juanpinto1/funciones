function pintar(ele, color = 'yellow') {
    ele.style.backgroundColor = color
}

let ele = document.getElementById("ele1")
ele.addEventListener("click", () => {
    pintar(ele)
});