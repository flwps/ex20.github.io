function setMenu(_menu) {
    var filterButtons = document.querySelectorAll("nav li");
    filterButtons.forEach(function (filterButton) {
        filterButton.classList.remove("on");
        }
    );
    document.querySelector("nav li." + _menu).classList.add("on");
    document.querySelector("main").className = _menu;
}
  