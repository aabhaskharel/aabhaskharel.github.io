var main = new Vue({
    el: '#main',
    data: {
        // displayMid: true,
        scroll: 0,
        scrollPosition: 0,
        showResume: false,
        showGithub: false,
        input: '',
        output: '',
        greetings: [
            'hi', 'hello', 'hey'
        ],
        resume: [
            'resume', 'cv', 'about', 'aabhas', 'kharel'
        ],
        github:[
            'github','code','programming','hack'
        ],
        education: [
            'school', 'uni', 'college', 'edu', 'graduate', 'study', 'studied', 'junior', 'texas', 'arlington', 'uta', 'who'
        ],
        projects:[
            
        ],
        skills:[

        ],
        help: [
            'help', 'confused', 'how', 'what'
        ]

    },
    mounted() {
        this.scrollHandler();
        this.scrollPosition = window.scrollY;
    },
    watch: {
        input: function (newInput, oldInput) {
            this.showResume = false
            this.showGithub = false
            this.output = 'Hmm..'
            //blank response
            if (this.input == '')
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

            //github response
            for (var i in this.github) {
                if (this.input.toLowerCase().indexOf(this.github[i]) > -1) {
                    this.showGithub = true
                    return this.output = 'Here is my '
                }
            }

            //education response
            for (var i in this.education) {
                if (this.input.toLowerCase().indexOf(this.education[i]) > -1) {
                    return this.output = 'I am currently a junior majoring in Software Engineering at The University of Texas at Arlington.'
                }
            }

            //projects response

            //skills response

            //help response
            for (var i in this.help) {
                if (this.input.toLowerCase().indexOf(this.help[i]) > -1) {
                    return this.output = 'Available search terms: Resume, Education, Projects, Skills.'
                }
            }

            //other response
            if (this.input == ' ')
                this.output = 'Hmm..a space?'

        }
    },
    methods: {
        searchBoxClicked: function () {
            document.getElementById("aboutMeArea").className += " blurText";
            document.getElementById("myImage").className += " blurImage";
            document.getElementById("logoArea").className += " blurLogo";
            // this.displayMid = false;
        },
        searchBoxLeave: function () {
            document.getElementById("aboutMeArea").className -= " blurText";
            document.getElementById("myImage").className -= " blurImage";
            document.getElementById("logoArea").className -= " blurLogo";
            // this.displayMid = true;
        },
        scrollHandler: function (e) {
            if (this.scrollPosition > window.scrollY) {
                this.scroll--;
            } else {
                this.scroll++;
            }
        }
    },
    created: function () {
        window.addEventListener('scroll', this.scrollHandler);
    }
});