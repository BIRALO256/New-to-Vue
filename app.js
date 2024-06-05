

const app = Vue.createApp({

    // data , functions  and other things happen here 

    // template: '<h2>I am  the template</h2>'

    data(){
        return{
            showBooks : false,
            title: 'jovic empire',
            age: '34',
            x:0,
            y:0,
            books: [
                {title: ' the wire ',author: 'patric jovic', isFav: true},
                {title: 'viking ',author: 'ragina', isFav: false},
                {title: 'game of throns',author: 'micheal', isFav: true},
            ]
        }
    },

    methods:  {
        changeTitle (title){
            this.title =title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },

        changecolor(jovic){
            this.jovic.isFav =!this.jovic.isFav
        },

        // handlevent(){
        //     this.showBooks = !this.showBooks
        // },

        handleventLeave(){
            this.showBooks = !this.showBooks
        },

        handleMousemove(){
            this.x =e.offsetX
            this.y=e.offsetY
        }

    }


}) //creating the app which can contorl the whole website or just a section

app.mount('#app') // then we use the mount mehtode found in the create app  methode under vue library to tell where this section of contetn shuold be displayed and here we are saying the app id ... it's like a selector