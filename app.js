const app = Vue.createApp({
    data() {
        return {
            firstName: 'Noah',
            lastName: 'Ball',
            email: 'noah@noahball.com',
            gender: 'male',
            picture: 'https://noahball.com/img/me.jpg'
        }
    }
})

app.mount('#app')