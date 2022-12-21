$(window).scroll(function() {
  $("header").css("opacity", 1 - $(window).scrollTop() / 500);
});


const Menu = document.querySelector('.menu i');
const Links = document.querySelector('nav ul');


Menu.addEventListener('click', () => {
  Links.classList.toggle('active');
})


const icon = document.querySelector('.menu i');
icon.addEventListener('click', function() {
	icon.classList.toggle('rotate');
});


var audio = {    
    init: function() {        
    var $that = this;        
        $(function() {            
            $that.components.media();        
        });    
    },
    components: {        
        media: function(target) {            
            var media = $('audio.fc-media', (target !== undefined) ? target : 'body');            
            if (media.length) {                
                media.mediaelementplayer({                    
                    audioHeight: 40,
                    features : ['playpause', 'current', 'duration', 'progress', 'volume'],
                    alwaysShowControls      : true,
                    timeAndDurationSeparator: '<span></span>',
                    iPadUseNativeControls: true,
                    iPhoneUseNativeControls: true,
                    AndroidUseNativeControls: true                
                });            
            }        
        },
            
    },
};
audio.init();
