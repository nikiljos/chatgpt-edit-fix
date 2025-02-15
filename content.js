const style = document.createElement("style");

style.innerHTML = `
.relative.bg-token-message-surface:hover > .hidden{
    display: block !important;
}
`;

document.head.appendChild(style);
