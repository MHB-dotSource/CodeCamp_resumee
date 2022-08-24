function changeDisplay(element, id) {
    let content = document.getElementById(id);
    if (content.style.display != 'none') {
        element.innerHTML = '&#8595';
        content.style.display = 'none';
    } else {
        element.innerHTML = '&#8593';
        content.style.display = 'block';
    }
}