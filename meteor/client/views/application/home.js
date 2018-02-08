import { HTTP } from 'meteor/http';


Template.home.events({
        "submit form":function(e, template) {
                e.preventDefault();

                var email_send  = $('#email_send').val()  ;
                var link_github = $('#link_github').val()  ;
                

                HTTP.call( 'POST', 'http://192.168.1.200:53600/api/report', {
                data: { email: email_send,  git_repository: link_github}
                }, function( error, response ) {
                if ( error ) {
                        console.log( error );
                } else {
                        console.log( response.content );
                        alert( response );
                }
                });
                }
});


