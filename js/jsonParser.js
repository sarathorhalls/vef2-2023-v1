import fs from 'node:fs/promises'

function createHtmlFile(name) {
    fs.writefile(`../dist/${name}`, (err) => {
        if(err) {
            console.warn(err);
        }
        console.info('file saved');
    })
}

async function readFromIndex() {
    let indexContent = null;
    const response = await fetch('../data/index.json');
    indexContent = await response.json();
    indexContent.forEach(deild => {
        createHtmlFile(deild.title);
    });
}

export { readFromIndex };