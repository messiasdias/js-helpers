const mask = (e) => {
    let value = e?.target?.value ? unmask(e.target.value) : unmask(e);
    let cleaned = ('' + value).replace(/\D/g, '');
    let match = cleaned?.match(/^(\d{2})(\d{2})(\d{4}|\d{5})(\d{4})$/);

    if(!match?.length && value?.length) {
        cleaned = ('+55' + value?.trim()).replace(/\D/g, '');
        match = cleaned.match(/^(\d{2})(\d{2})(\d{4}|\d{5})(\d{4})$/);
    }

    let formated = match?.length ? `(${match[2]}) ${match[3]}-${match[4]}` : value
    if (e?.target?.value) { return e.target.value = formated }
    return formated
}

const unmask = (value) => {
    return value?.length ? value
        ?.replaceAll('(', '')
        ?.replaceAll(')', '')
        ?.replaceAll('-', '')
        ?.replaceAll(' ', '')
        ?.trim() : value;
}

module.exports = { mask, unmask }