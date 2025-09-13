const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me'
}

function createRoot(container){
    container.render = (reactElement) => {
        const domElement = document.createElement(reactElement.type);
        domElement.innerHTML = reactElement.children;

        for(const prop in reactElement.props){
            domElement[prop] = reactElement.props[prop];
        }
        container.appendChild(domElement);
    }

    return container;
}

createRoot(document.getElementById('root')).render(
    reactElement
)