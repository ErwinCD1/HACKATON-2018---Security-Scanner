var cpt = 0;
function myTokenFunction(string,string){
        console.log(token_user);
        if(token_user != "" || token_user != null){
                try{
                        window.localStorage.setItem("Content_Token_User"+cpt,token_user);
                }
                catch(err){
                        localStorageAvailable = false;
                }
        }
}

function myRemoveTokenFunction(string,string){
        try{
                window.localStorage.removeItem("Content_Token_User"+cpt,token_user);
        }
        catch(err){
                localStorageAvailable = false;
        }
}

Template.SigninSignup.events({
        'click #reg_submit_btn':function(){
                var reg_email_txt  = $('#reg_email_txt').val() ;
                var reg_name_txt = $('#reg_name_txt').val() ;
                var reg_password_txt = $('#reg_password_txt').val() ;
                var reg_password_confirm_txt = $('#reg_password_confirm_txt').val() ;

                var token_user = "";


                HTTP.call( 'POST', 'http://192.168.1.200:53600/api/register', {
                        data: {'name': reg_name_txt,'email': reg_email_txt,'password': reg_password_txt,'password_confirmation': reg_password_confirm_txt
                        }
                }, function( error, response ) {
                if ( error ) {
                        console.log( error );
                } else {
                        // console.log( response.data.access_token );
                        token_user = response.data.access_token;
                        cpt += 1;
                        myTokenFunction(cpt,token_user);
                        document.getElementById('link_logout').style.display = "block";
                         //redirigé vers history ou autres pages aprés connexion     
                }
                });
        },

        'click #log_submit_btn':function(){
                var log_email_txt  = $('#log_email_txt').val() ;
                var log_password_txt = $('#log_password_txt').val() ;

                HTTP.call( 'POST', 'http://192.168.1.200:53600/api/login', {
                data: { email: log_email_txt,  password: log_password_txt}
                }, function( error, response ) {
                if ( error ) {
                        console.log( error );
                } else {
                        // console.log( response.data.access_token );
                        token_user = response.data.access_token;
                        cpt += 1;
                        // alert(cpt);
                        myTokenFunction(cpt,token_user);
                        document.getElementById('link_logout').style.display = "block";
                        //redirigé vers history ou autres pages aprés connexion        
                }
                });
        },
});