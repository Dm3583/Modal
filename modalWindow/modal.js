const div1 = {
    tag: 'div',
    class: ['box', 'position'],
    attr: [['data-test', 'test']],
};

const div2 = {
    tag: 'div',
    class: ['box2', 'position2'],
    attr: [['data-test-two', 'test2']],
};

const div3 = {
    tag: 'div',
    class: ['box3', 'position3'],
    attr: [['data-test-two', 'test3'], ['id', 'root-blue']],
};

const div4 = {
    tag: 'div',
    class: ['box4', 'position4'],
    attr: [['data-test-two', 'test4']],
};

const div5 = {
    tag: 'div',
    class: ['box5', 'position5'],
    attr: [['data-test-two', 'test5']],
};

const ul = {
    tag: 'ul',
    class: ['list'],
    attr: [['id', 'list']]
};

const li = {
    tag: 'li',
    class: ['item']
};

const data = [
    'mango',
    'poly',
    'peter',
    'shurik'
];

const root = document.body;

function isElements(elements) {
    if (elements.length === 0) {
        console.log("NO ELEMENTS");
        return true;
    }
    return elements.find(e => !e.tag) ? false : true;
}

function addClasses(classes, node) {
    if (!classes || classes.length === 0) {
        return;
    };
    classes.forEach(c => {
        node.classList += `${c} `;
    });
};

function setAttributes(attr, node) {
    if (!attr || attr.length === 0) {
        return
    };
    attr.forEach(a => {
        node.setAttribute(a[0], a[1]);
    });
};

function siblingElements(rootNode, elements) {
    elements.forEach(e => {
        let node = document.createElement(e.tag);
        addClasses(e.class, node)
        setAttributes(e.attr, node)
        rootNode.appendChild(node);
    });
};

function nestedElements(rootNode, elements) {
    let root = rootNode;
    while (elements.length) {
        let e = elements[0];
        let node = document.createElement(e.tag);
        addClasses(e.class, node)
        setAttributes(e.attr, node)
        root.appendChild(node);
        elements.shift();
        nestedElements(node, elements);
    }
};

function renderElements(rootNode, nested, ...elements) {
    if (!isElements(elements)) {
        return;
    };
    if (!nested) {
        siblingElements(rootNode, elements);
    } else {
        nestedElements(rootNode, elements)
    };
};

// function insertText(elObj, func)

// renderElements();

renderElements(root, false, div1, div2);

renderElements(root, true, div3, div4, div5, ul);

const modal = document.querySelector('#root-blue');
const list = document.querySelector('#list');

data.forEach((e, i) => {
    renderElements(list, false, li);
    list.children[i].textContent = e;
});


// modal.parentNode.removeChild(modal);