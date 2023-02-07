

/*
 * добавляем кнопку для открытия документа в новой вкладке
 */
export const OpenDoc = () => {

    let btnSearch = document.querySelector('#btn_fileman_search');

    if (btnSearch) {
        btnSearch.insertAdjacentHTML('afterend', '<span class="adm-btn open">Открыть</span>');

        let btnOpen = document.querySelector('.adm-btn.open');

        btnOpen.addEventListener('click', event => {

            let checkbox = Array.from(document.querySelectorAll('#tbl_fileman_admin [type="checkbox"]'));
            let file = checkbox.find(elem => elem.checked);

            file = !!file ? file.value : '';

            let path = document.querySelector('#quick_path');
            let host = location.origin;

            let url = `${host}${path.value}/${file}`;

            window.open(url);
        });
    }
}