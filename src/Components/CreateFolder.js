import { FileName } from "./../Tools/FileName/FileName.js";

/*
 * подставляем название папки
 */
export const CreateFolder = async () => {

    let { name } = await FileName('folder');

    let folderNameNode = document.querySelector('input[name="foldername"]');

    folderNameNode.value = name;

    // убираем чекбоксу для создания индексной страницы 
    document.querySelector('[name="mkindex"]').labels[0].click()

    // сохранение файла при нажатие Ctrl+S
    document.addEventListener('keydown', event => {
        if (event.code == 'KeyS' && event.ctrlKey) {
            event.preventDefault();

            let save = document.querySelector('[type="submit"][name="save"]');

            save.click();
        }
    });

}