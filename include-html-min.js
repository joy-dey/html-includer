/**
 * include-html.js
 * v2.0
 *  */
// Handle Intersection
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const url = entry.target.dataset.include;
            fetchAndIncludeContent(entry.target, url);
            observer.unobserve(entry.target);
        }
    });
}
// Fetch and Include Data
const fetchAndIncludeContent = async (element, url) => {
    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error(`Failed to fetch ${url}`)
        const html = await response.text();
        const fragment = document.createRange().createContextualFragment(html);
        element.appendChild(fragment);

    } catch (error) {
        console.error(`ERROR: ${error.message}`);
    }
}

// Intersection Observer Configuration
const observerOptions = {
    root: null,
    margin: '0px',
    threshold: 0.1
}

// Initialize Intersection Observer
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Observe elements with [data-include]
document.querySelectorAll("[data-include]").forEach(element => {
    observer.observe(element)
});