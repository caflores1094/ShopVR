var connection = new RTCMultiConnection();
connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

connection.session = {
    audio: 'two-way', // merely audio will be two-way, rest of the streams will be oneway
    screen: true,
    oneway: true
};
connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
};
connection.videosContainer = document.getElementById('videos-container');

connection.onstream = function(event) {
    var mediaElement = getMediaElement(event.mediaElement, {
        title: event.userid,
        buttons: ['full-screen'],
        width: 200,
        showOnMouseEnter: false
    });
    connection.videosContainer.appendChild(mediaElement);

    mediaElement.media.play();
    mediaElement.id = event.streamid;
};
connection.onstreamended = function(event) {
    var mediaElement = document.getElementById(event.streamid);
    if(mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);
    }
};

connection.getScreenConstraints = function(callback) {
    getScreenConstraints(function(error, screen_constraints) {
        if (!error) {
            screen_constraints = connection.modifyScreenConstraints(screen_constraints);
            callback(error, screen_constraints);
            return;
        }
        throw error;
    });
};
