import { FileName } from "./FileName/FileName.js";

/*
 * страница создания файла
 */
export const DocCreatePage = async () => {
    // генерируем название для файла
    let { name, extension } = await FileName();

    let fileNameNode = document.querySelector('input[name="filename"]');

    fileNameNode.value = name;

    if (extension === '') fileNameNode.focus();


    // сохранение файла при нажатие Ctrl+S
    document.addEventListener('keydown', event => {
        if (event.code == 'KeyS' && event.ctrlKey) {
            event.preventDefault();

            let save = document.querySelector('[type="submit"][name="save"]');

            save.click();
        }
    });
}