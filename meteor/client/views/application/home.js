import { HTTP } from 'meteor/http';


Template.home.events({
        "submit form":function(e, template) {
                e.preventDefault();
            
                // var email_account = $('input[name="link_github"]').val();

                var email_send  = $('#email_send') ;
                var link_github = $('#link_github');
                var CountryName_value = "France";

                // try {
                //     const result = HTTP.call('GET', 'http://www.webservicex.net/globalweather.asmx/GetCitiesByCountry', {
                //       params: { CountryName: CountryName_value }
                //     });
              
                //     return alert(result);
                //   } catch (e) {
                //     // Got a network error, timeout, or HTTP error in the 400 or 500 range.
                //     return alert("REQUETE NON EXECUTEE ! ERREUR ! ");
                //   }
            

                // const result = HTTP.call('POST', 'http://www.webservicex.net/globalweather.asmx/GetCitiesByCountry', {
                //     data: { CountryName: CountryName_value }
                //     }, (error, result) => {
                //     if (!error) {
                //         Session.set('twizzled', true);
                //     }
                //     alert (result);
                //     });


                // var test = document.getElementById('affiche_result_link');
                // // alert("On est bien passé dans le formulaire ! \n\n Notre Lien : " + link_github.val());          
          
                // setTimeout(function() {test.innerHTML = "Lien transmis avec succès !"}, 500w);
                
                
                // function masquernotification()
                // {
                //   test.innerHTML= "";
                // }
                // window.setTimeout(masquernotification, 2000);
            
            
              }
});


