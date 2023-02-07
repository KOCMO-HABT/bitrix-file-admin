

/*
 * задержка до момента появления элемента на страницы
 */
const IsExistElem = async ({ selector }) => {

    let promise = await new Promise((resolve, reject) => {

        let time = setInterval(() => {

            let node = document.querySelector(selector);

            if (node !== null) {
                clearInterval(time);
                resolve(node);
            }

        }, 1);

    });

    return promise
}