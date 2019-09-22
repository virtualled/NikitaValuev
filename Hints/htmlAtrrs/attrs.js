link.hasAttribute();
link.getAttribute();
link.setAttribute('alt', 'lgogotype');
link.removeAttribute('alt');

link.className = 'new_link second_class';
link.classList.add('class');
link.classList.remove('class');
link.classList.toggle('class'); // добавлять удалять класс
link.classList.contains('new_link'); //true

link.dataset.aboutHeader = 'HEader';
