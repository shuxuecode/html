




// alert(234)  // 不允许alert

/*
 * Add or remove the bookmark on the current page.
 */
// function toggleBookmark() {
//     // if (currentBookmark) {
//     //     browser.bookmarks.remove(currentBookmark.id);
//     // } else {
//     //     browser.bookmarks.create({ title: currentTab.title, url: currentTab.url });
//     // }

//     var tree = browser.bookmarks.getTree()

//     console.log(tree)
// }

// browser.browserAction.onClicked.addListener(toggleBookmark);

//toggleBookmark()



function makeIndent(indentLength) {
    return ".".repeat(indentLength);
}

function logItems(bookmarkItem, indent) {
    if (bookmarkItem.url) {
        //   console.log(makeIndent(indent) + bookmarkItem.url);
        console.log(makeIndent(indent) + bookmarkItem.title);
    } else {
        console.log(makeIndent(indent) + "Folder");
        indent++;
    }
    if (bookmarkItem.children) {
        for (child of bookmarkItem.children) {
            logItems(child, indent);
        }
    }
    indent--;
}

function logTree(bookmarkItems) {
    logItems(bookmarkItems[0], 0);
}

function onRejected(error) {
    console.log(`An error: ${error}`);
}

var gettingTree = browser.bookmarks.getTree();
gettingTree.then(logTree, onRejected);
