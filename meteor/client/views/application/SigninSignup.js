Template.SigninSignup.events({
    'click #reg_submit_btn':function(){
        var reg_email_txt  = $('#reg_email_txt').val() ;
        var reg_name_txt = $('#reg_name_txt').val() ;
        var reg_password_txt = $('#reg_password_txt').val() ;
        var reg_password_confirm_txt = $('#reg_password_confirm_txt').val() ;

        // alert(reg_email_txt+'/'+reg_name_txt+'/'+reg_password_txt+'/'+reg_password_confirm_txt);

        HTTP.call( 'POST', 'http://192.168.1.200:53600/api/register', {
                data: {'name': reg_name_txt,'email': reg_email_txt,'password': reg_password_txt,'password_confirmation': reg_password_confirm_txt
                }
        }, function( error, response ) {
        if ( error ) {
                console.log( error );
        } else {
                console.log( response.content );
                alert( response );
        }
        });
    },

    'click #log_submit_btn':function(){
        var log_email_txt  = $('#log_email_txt').val() ;
        var log_password_txt = $('#log_password_txt').val() ;

        //  alert(log_email_txt+'/'+log_password_txt);

        HTTP.call( 'POST', 'http://192.168.1.200:53600/api/login', {
            data: { email: log_email_txt,  password: log_password_txt}
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