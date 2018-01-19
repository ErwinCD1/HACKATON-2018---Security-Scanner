Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'home'
});

Router.route('/post/:_id', {
    name: "post",
    data: function(){
        return {
            id: this.params._id
        }
    }
});

Router.route('/posts', {
    name: 'posts',
    data: function(){
        return {
            posts: [
                {
                    title: "Premier post",
                    hide: true
                },
                {
                    title: "Deuxième post",
                    hide: false
                },
                {
                    title: "Troisième post",
                    hide: false
                },
            ]
        };
    }
});

Router.route('/SigninSignup', {
    name: 'SigninSignup'
});

Router.route('/contact', {
    name: 'contact'
});