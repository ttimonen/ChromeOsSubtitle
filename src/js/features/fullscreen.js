(function($) {
    var fullscreenText = mejs.i18n.t('Fullscreen');
    
    MediaElementPlayer.prototype.fullscreen = function() {
        var t = this,
            fullscreenBtn = $('<div class="mejs-button mejs-fullscreen-button">' +
                    '<button type="button" title="' + fullscreenText + '" aria-label="' + fullscreenText + '"></button>' +
                '</div>');
        
        fullscreenBtn.on('click', function() {
            t.toggleFullscreen();
        });
        
        t.rightControls.append(fullscreenBtn);
        
        document.addEventListener("webkitfullscreenchange", function() {
            fullscreenBtn.toggleClass('mejs-unfullscreen-button');
        }, false);
    };
    
    MediaElementPlayer.prototype.toggleFullscreen = function() {
        document.webkitIsFullScreen ? document.webkitCancelFullScreen() : this.container[0].webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    };
})(mejs.$);
