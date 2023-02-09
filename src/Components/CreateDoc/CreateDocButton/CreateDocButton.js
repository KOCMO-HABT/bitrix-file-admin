import { IsExistElem } from "./IsExistElem.js";

/*
 * заменяем ссылку в кнопке для создания нового документа
 */
export const CreateDocButton = async () => {
    // дожидаемся когда появится элемент с кнопками для создания файла
    await IsExistElem('.bx-core-popup-menu.bx-core-popup-menu-no-icons');

    // ссылка для создания файла
    let link = document.querySelector('a[href*="fileman_html_edit"]');

    // формируем новую ссылку
    let url = new URL(link.href);

    url.pathname = '/bitrix/admin/fileman_file_edit.php';

    url.searchParams.set('full_src', 'Y');

    // заменяем ссылку
    link.href = url.href;
}