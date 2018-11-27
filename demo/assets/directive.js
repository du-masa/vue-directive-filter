import Vue from 'vue/dist/vue.esm'

Vue.directive('imageError', {
    bind (el, binding, vnode) {

        let src
        switch (binding.value) {
            case 'alternative1':
                src = 'https://placehold.jp/100x100.png'
                break
            case 'alternative2':
                src = 'https://placehold.jp/150x150.png'
                break
            default:
                src = 'https://placehold.jp/200x200.png'
                break
        }

        el.onerror = () => {
            el.setAttribute('src', src)
        }
    }
})

new Vue({
    el: '#app',
})