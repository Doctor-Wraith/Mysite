const options = {
    root: document.querySelector("[data-scroll-root]"),
    rootMargin: '0px',
    threshold: 1.0
}

const callback = (entries, observer) => {
    entries.forEach((entry) => console.log(entry))
}

const observer = new IntersectionObserver(callback, options)