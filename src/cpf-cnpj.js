const cnpjMask = (value) => {
    return value
        ?.replace(/\D+/g, "")
        ?.replace(/(\d{2})(\d)/, "$1.$2")
        ?.replace(/(\d{3})(\d)/, "$1.$2")
        ?.replace(/(\d{3})(\d)/, "$1/$2")
        ?.replace(/(\d{4})(\d)/, "$1-$2")
        ?.replace(/(-\d{2})\d+?$/, "$1")
}

const cpfMask = (value) => {
    if (value?.target?.value) { value = value.target.value }
    return value
        ?.replace(/\D+/g, "")
        ?.replace(/(\d{3})(\d)/, "$1.$2")
        ?.replace(/(\d{3})(\d)/, "$1.$2")
        ?.replace(/(\d{3})(\d)/, "$1-$2")
        ?.replace(/(-\d{2})\d+?$/, "$1-$1")
}

const mask = (e, validate = 'all') => {
    let value = e?.target?.value ? unmask(e.target.value) : unmask(e) || ''

    if (value && value?.length <= 11 && ['all', 'cpf'].includes(validate?.toLocaleLowerCase())) {
        if (!e?.target?.value) { return cpfMask(value) }
        return (e.target.value = cpfMask(value))
    }

    if (value && value?.length > 11 && ['all', 'cnpj'].includes(validate?.toLocaleLowerCase())) {
        if (!e?.target?.value) { return cnpjMask(value) }
        e.target.value = cnpjMask(value)
    }
}

const unmask = (value) => {
    return value?.length ? value?.replaceAll('.', '')?.replaceAll('/', '')?.replaceAll('-', '') : value
}

module.exports = { cnpjMask, cpfMask, mask, unmask }