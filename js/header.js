{
    const refs = {
        openHeaderBtn: document.querySelector("[data-open-header]"),
        closeHeaderBtn: document.querySelector("[data-close-header]"),
        backdrop: document.querySelector("[data-backdrop]"),
    };

    refs.openHeaderBtn.addEventListener("click", toggleHeader);
    refs.closeHeaderBtn.addEventListener("click", toggleHeader);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleHeader() {
        refs.backdrop.classList.toggle("is-hidden");
    }

    function logBackdropClick() {
        console.log("Это клик в бекдроп");
    }
}