var main = new Vue({
    el: '#main',
    data: {
        input: '',
        output: '',
        hello: [
            'hi', 'hello', 'hey'
        ],
        resume: [
            'resume', 'cv'
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
                this.output = 'hahaha!'
            for (var i in this.hello) {
                if (this.input.toLowerCase().indexOf(this.hello[i]) > -1)
                    return this.output = 'Hey There!'
            }
            for (var i in this.resume) {
                if (this.input.toLowerCase().indexOf(this.resume[i]) > -1) {
                    this.showResume = true
                    return this.output = 'Here is my '
                }
            }
        }
    }
});