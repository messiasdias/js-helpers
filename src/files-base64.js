const encode = async file => new Promise((resolve, reject) => {
    if(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    }
});

function decode(base64String, filename = "picture.png") {
    if (!base64String) return ''
    const mimeType = base64String.match(/^data:(.*);base64,/)[1];
    const base64Data = base64String.replace(/^data:(.*);base64,/, "");
    const byteCharacters = atob(base64Data);
    const byteArray = new Uint8Array(
        new Array(byteCharacters.length)
            .fill()
            .map((_, i) => byteCharacters.charCodeAt(i))
    );
    const blob = new Blob([byteArray], { type: mimeType });
    return new File([blob], filename, { type: mimeType });
}

async function setInputFile(fileBase64, input, filename = 'picture.png') {
    let dataTransfer = new DataTransfer();
    let file = await encode(fileBase64, filename)
    dataTransfer.items.add(file);
    if(input) {input.files = dataTransfer.files;}
    return file
}

module.exports = {encode, decode, setInputFile}