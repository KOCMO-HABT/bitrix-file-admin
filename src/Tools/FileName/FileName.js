import { GetClipBoard } from "./GetClipBoard.js";
import { FirstUpperCase } from "./FirstUpperCase.js";

/*
 * генерируем название для файла
 */
export const FileName = async (type = 'file') => {
    // расширение файла
    let extension = '';

    // под до папки  которой создаём файл
    let url = new URL(window.location.href);
    let path = url.searchParams.get('path');

    if (/\/src\/{0,1}/.test(path)) extension = 'js';
    if (/\/server\/{0,1}/.test(path)) extension = 'php';

    // получаем текст из буфера обмена
    let name = await GetClipBoard();
    // разделяем на слова
    name = name.split(' ');

    // удаляем пустые строки из массива
    name = name.filter(elem => elem !== '');

    // возводим первую букву в верхний регистр
    for (const key in name) name[key] = FirstUpperCase(name[key].trim());

    name = name.join('');

    // если имя для файла, а не для папки, то добавляем расширение к названию
    if (type === 'file') name = `${name}.${extension}`;

    return { name, extension };
}