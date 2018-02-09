function test(){
    if(!localStorage.getItem("Key") === null){  
        document.getElementById('NONCONNECT_History_page_user').style.display = "none";
        document.getElementById('affiche_History_page_user').style.display = "block";
    };
}


Template.history.helpers({
    setDATA: function(){
        return '<b><i>Secure by HotSecurityTeam</i></b>';
    }
});



  Template.history.events({
    'click #loadScan':function(){
           
            var link_github = $('#link_github_report').val()  ;


            HTTP.call( 'POST', 'http://192.168.1.200:53600/api/getReport', {
                    data: {git_repository: link_github}
            }, function( error, response ) {
            if ( error ) {
                    console.log( error );
            } else {
                   
                     alert('toto');
            }
            });
    }
});