Vue.filter('uppercase', value => {
    if (!value) {
        return ''
    }

    return value.toUpperCase()
})