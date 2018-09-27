var main = new Vue({
    el: '#main',
    data: {
        displayMid: true,
        input: '',
        output: '',
        greetings: [
            'hi', 'hello', 'hey'
        ],
        resume: [
            'resume', 'cv', 'about', 'aabhas', 'kharel'
        ],
        education:[
            'school','uni','college','edu','graduate','study','studied','junior','texas','arlington','uta'
        ],
        showResume: false
    },
    watch: {
        input: function (newInput, oldInput) {
            this.showResume = false
            this.output = 'Hmm..I wonder what that means.'
            if(this.input == '')
                this.output = ''
            if (this.input == 'lol')
                this.output = 'Hmm..I wonder what is so funny.'
            
            //greetings response
            for (var i in this.greetings) {
                if (this.input.toLowerCase().indexOf(this.greetings[i]) > -1)
                    return this.output = 'Hey There!'
            }

            //resume response
            for (var i in this.resume) {
                if (this.input.toLowerCase().indexOf(this.resume[i]) > -1) {
                    this.showResume = true
                    return this.output = 'Here is my '
                }
            }

            //education response
            for (var i in this.education) {
                if (this.input.toLowerCase().indexOf(this.education[i]) > -1) {
                    return this.output = 'I am currently a junior majoring in Software Engineering at The University of Texas ar Arlington.'
                }
            }

            //
        }
    },
    methods:{
        searchBoxClicked: function(){
            this.displayMid = false;
        },
        searchBoxLeave: function(){
            this.displayMid = true;
        }
    }
});