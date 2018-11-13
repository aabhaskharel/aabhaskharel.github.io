var main = new Vue({
    el: '#main',
    data: {
        // displayMid: true,
        j: 0,
        speed: 40,
        scroll: 0,
        scrollPosition: 0,
        showResume: false,
        showGithub: false,
        searchDisabled: false,
        input: '',
        output: '',
        out: '',
        greetings: [
            'hi', 'hello', 'hey'
        ],
        resume: [
            'resume', 'cv', 'about', 'aabhas', 'kharel'
        ],
        github: [
            'github', 'code', 'programming', 'hack'
        ],
        education: [
            'school', 'uni', 'college', 'edu', 'graduate', 'study', 'studied', 'junior', 'texas', 'arlington', 'uta', 'who', 'education'
        ],
        projects: [

        ],
        skills: [

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
            this.speed = 40
            this.output = 'Hmm..'
            this.out = ''

            //blank response
            if (this.input == '') {
                this.out = ''
                this.output = ''
                this.j = 0;
            }

            if (this.input == 'lol') {
                this.out = 'I wonder what is so funny.'
                this.output = ''
                this.typeWriter();
            }

            //greetings response
            for (var i in this.greetings) {
                if (this.input.toLowerCase().indexOf(this.greetings[i]) > -1) {
                    this.out = 'Hey There!'
                    this.output = ''
                    this.typeWriter();
                }
            }

            //resume response
            for (var i in this.resume) {
                if (this.input.toLowerCase().indexOf(this.resume[i]) > -1) {
                    this.out = 'Here is my '
                    this.output = ''
                    this.typeWriter();
                    this.showResume = true
                }
            }

            //github response
            for (var i in this.github) {
                if (this.input.toLowerCase().indexOf(this.github[i]) > -1) {
                    this.out = 'Here is my '
                    this.output = ''
                    this.typeWriter();
                    this.showGithub = true
                }
            }

            //education response
            for (var i in this.education) {
                if (this.input.toLowerCase().indexOf(this.education[i]) > -1) {
                    this.out = 'I am a junior at The University of Texas at Arlington studying Software Engineering.'
                    this.output = ''
                    this.speed = 20;
                    this.typeWriter();
                }
            }

            //projects response

            //skills response

            //help response
            for (var i in this.help) {
                if (this.input.toLowerCase().indexOf(this.help[i]) > -1) {
                    this.out = 'Available search terms: Resume, Education, Projects, Skills.'
                    this.output = ''
                    this.speed = 20;
                    this.typeWriter();
                }
            }

            //other response

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
        },
        typeWriter: function () {
            this.searchDisabled = true;
            if (this.j < this.out.length) {
                this.output += this.out.charAt(this.j);
                this.j++;
                setTimeout(this.typeWriter, this.speed);
            } else {
                this.searchDisabled = false;
            }
        }
    },
    created: function () {
        window.addEventListener('scroll', this.scrollHandler);
    }
});