import Vue from 'vue/dist/vue.esm'

Vue.filter('truncate', (value, length = 100, omission = '...') => {

    if (value.length < length) {
        return value
    } else {
        return value.substring(0, length) + omission
    }
})

new Vue({
    el: '#app',
})