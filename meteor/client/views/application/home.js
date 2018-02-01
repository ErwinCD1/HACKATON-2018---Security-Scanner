import { HTTP } from 'meteor/http';


Template.home.events({
        "submit form":function(e, template) {
                e.preventDefault();
            
                // var email_account = $('input[name="link_github"]').val();

                
                var link_github = $('#link_github');
                var CountryName_value = "France";

                try {
                    const result = HTTP.call('GET', 'http://www.webservicex.net/globalweather.asmx/GetCitiesByCountry', {
                      params: { CountryName: CountryName_value }
                    });
              
                    return alert(result);
                  } catch (e) {
                    // Got a network error, timeout, or HTTP error in the 400 or 500 range.
                    return alert("REQUETE NON EXECUTEE ! ERREUR ! ");
                  }
            

                // const result = HTTP.call('POST', 'http://www.webservicex.net/globalweather.asmx/GetCitiesByCountry', {
                //     data: { CountryName: CountryName_value }
                //     }, (error, result) => {
                //     if (!error) {
                //         Session.set('twizzled', true);
                //     }
                //     alert (result);
                //     });




                // alert("On est bien passé dans le formulaire ! \n\n Notre Lien : " + link_github.val());          
            }
});


