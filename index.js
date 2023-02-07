import { OpenDoc } from "./src/Components/OpenDoc.js";
import { CreateDocButton } from "./src/Components/CreateDoc/CreateDocButton/CreateDocButton.js";
import { DocCreatePage } from "./src/Components/CreateDoc/DocCreatePage.js";
import { CreateFolder } from "./src/Components/CreateFolder.js";

// страница список файлов и папок
if (location.pathname === '/bitrix/admin/fileman_admin.php') {

    CreateDocButton();

    // добавляем кнопку открытия документа в новой вкладке
    setInterval(() => {
        let taskList = document.querySelector('.adm-btn.open');

        if (!taskList) {
            OpenDoc();
        }
    }, 1000);
}

// страница создания файла
if (location.pathname === '/bitrix/admin/fileman_file_edit.php') {
    DocCreatePage();
}

// страница создания папки
if (location.pathname === '/bitrix/admin/fileman_newfolder.php') {
    CreateFolder();
}
