/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; ++i) {
        document
            .getElementsByTagName('body')[0]
            .insertAdjacentHTML(
                'beforeend',
                '<' + tag + '>' + content + '</' + tag + '>',
            );
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/

function createRoot(prevDiv, childrenCount, currentLevel, finalLevel) {
    for (let i = 0; i < childrenCount; ++i) {
        const newDiv = document.createElement('div');
        newDiv.className = 'item_' + currentLevel;
        prevDiv.insertAdjacentElement('beforeend', newDiv);
        if (currentLevel < finalLevel) {
            createRoot(newDiv, childrenCount, currentLevel + 1, finalLevel);
        }
    }
}
export function generateTree(childrenCount, level) {
    const treeDiv = document.createElement('div');
    treeDiv.className = 'item_1';
    createRoot(treeDiv, childrenCount, 2, level);
    return treeDiv;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const lev = 3,
        childNum = 2;
    let treeDiv = generateTree(childNum, lev);
    for (let i = 0; i < childNum; ++i) {
        let child = treeDiv.children[i];
        let newChild = document.createElement('SECTION');
        newChild.className = 'item_2';
        newChild.innerHTML = child.innerHTML;
        child.parentNode.replaceChild(newChild, child);
    }
    return treeDiv;
}
