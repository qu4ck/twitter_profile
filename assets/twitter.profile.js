/**
  *
  * Author  : Airlangga bayu seto
  * Email   : qu4ck@iso.web.id
  * Twitter : qu4cks0ft
  * Version : 1.0
  *
  */
  
(function($){
    $.fn.tweetProfile = function(user){
        $.ajax({
             url        : "http://twitter.com/users/"+ user +".json?callback=?"
            ,type       : "get"
            ,dataType   : "json" 
            ,success    : function(data){                    
               if(data.id != ""){
                    var html = "";                            
                    $("#account").text(data.screen_name);
                    html = "<div class=\"profile_name\"> \
                                <a href=\"http://www.twitter.com/"+data.screen_name +"\"><img src=\""+data.profile_image_url+"\" alt=\""+ data.screen_name +"\" class=\"size32\" /> \
                                <div class=\"fullname\">"+ data.name +" <small class=\"metadata\">Lihat halaman profile saya</small></div> \
                                </a> \
                            </div> \
                            <div class=\"profile_stats\"> \
                                <ul class=\"stats\"> \
                                    <li><a href=\"http://www.twitter.com/"+ data.screen_name +"\"><strong>"+ data.statuses_count +"</strong></a> Tweet</li> \
                                    <li><a href=\"http://www.twitter.com/"+ data.screen_name +"/followers\"><strong>"+ data.followers_count +"</strong></a> Mengikuti</li> \
                                    <li><a href=\"http://www.twitter.com/"+ data.screen_name +"/following\"><strong>"+ data.friends_count +"</strong></a> Pengikut</li> \
                                </ul> \
                                <div class=\"clear\"></div> \
                            </div>";
                    $("#profile").html(html);
                }else{
                    alert("No data Found.");
                }
            }
            ,error : function(){
                alert("error Ajax Cross Domain");
            }
        });
    }
})(jQuery);