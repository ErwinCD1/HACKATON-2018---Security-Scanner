import { HTTP } from 'meteor/http';


Template.home.events({
        "submit form":function(e, template) {
                e.preventDefault();
            
                // var email_account = $('input[name="link_github"]').val();

                var email_send  = $('#email_send') ;
                var link_github = $('#link_github');
                var CountryName_value = "France";

                // HTTP.call( 'GET', 'http://www.webservicex.net/globalweather.asmx/GetCitiesByCountry?CountryName='+CountryName_value, {
                // }, function( error, response ) {
                // if ( error ) {
                //         console.log( error );
                // } else {
                //         console.log( response.content);
                //         alert( response.content);
                // }
                // });
            
            

                HTTP.call( 'GET', 'https://swapi.co/api/people/1', {
                }, function( error, response ) {
                if ( error ) {
                        console.log( error );
                } else {
                        console.log( response.data.name);
                        alert( response.content);
                        // alert( response.data.name);
                }
                });
            
        }
});


