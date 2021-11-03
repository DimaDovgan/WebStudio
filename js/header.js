{
    const refs = {
        openHeaderBtn: document.querySelector("[data-open-header]"),
        closeHeaderBtn: document.querySelector("[data-close-header]"),
        backdrop: document.querySelector("[data-backdrop-hedre]"),
    };

    refs.openHeaderBtn.addEventListener("click", toggleHeader);
    refs.closeHeaderBtn.addEventListener("click", toggleHeader);

    refs.backdrop.addEventListener("click", logbackdropClick);

    function toggleHeader() {
        refs.backdrop.classList.toggle("is-hidden");
    }

    function logbackdropClick() {
        console.log("Это клик в бекдроп");
    }
}