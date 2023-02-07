import { OpenDoc } from "./src/OpenDoc.js";
import { CreateDocButton } from "./src/CreateDoc/CreateDocButton/CreateDocButton.js";
import { DocCreatePage } from "./src/CreateDoc/DocCreatePage/DocCreatePage.js";


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

if (location.pathname === '/bitrix/admin/fileman_file_edit.php') {
    DocCreatePage();
}