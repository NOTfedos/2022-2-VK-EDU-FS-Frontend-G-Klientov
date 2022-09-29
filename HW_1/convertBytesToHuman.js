/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
	if (typeof(bytes) !== "number") return false;
    if (isNaN(bytes)) return false;

    if (bytes < 0) return false;

    if (bytes < 1024) {
        return String(bytes)+ " B";
    }
    if (bytes < 1024*1024) {
        if (bytes % 1024 === 0) {
            bytes = String(bytes / 1024)
        } else {
            bytes = (bytes / 1024).toFixed(2)
        }
        return bytes + " KB";
    }
    if (bytes % (1024*1024) === 0) {
        bytes = String(bytes / 1024 / 1024)
    } else {
        bytes = (bytes / 1024 / 1024).toFixed(2)
    }
    return bytes + " MB";   
}
