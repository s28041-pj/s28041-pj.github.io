function toggleItem(itemId) {
    var item = document.querySelector('.item.active');
    var content = document.querySelector('.content.show');

    if (item) {
        item.classList.remove('active');
    }

    if (content) {
        content.classList.remove('show');
    }

    var newItem = document.querySelector('.item:nth-child(' + (itemId * 2 - 1) + ')');
    var newContent = document.getElementById('item' + itemId + 'Content');

    if (newItem && newContent) {
        newItem.classList.add('active');
        newContent.classList.add('show');
    }
}
