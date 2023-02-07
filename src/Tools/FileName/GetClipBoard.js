


/*
 * получаем содержимое буфера обмена
 */
export const GetClipBoard = async () => {

    let promise = await new Promise((resolve, reject) => {

        navigator.clipboard.readText()
            .then(text => {
                resolve(text)
            })
            .catch(err => {
                // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
                // console.log('Something went wrong', err);
                reject(err)
            });

    });

    return promise

}