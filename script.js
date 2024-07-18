document.addEventListener('DOMContentLoaded', () => {
    const picture = document.getElementById('picture');
    const fullscreenButton = document.getElementById('fullscreenButton');

    fullscreenButton.addEventListener('click', () => {
        // Check for screen availability and go fullscreen on the external screen
        if ('getScreens' in window) {
            // Experimental API
            navigator.getScreens().then(screens => {
                // Assuming the second screen is the external one
                const externalScreen = screens[1];
                if (externalScreen && externalScreen.requestFullscreen) {
                    picture.requestFullscreen({ screen: externalScreen });
                } else if (externalScreen && externalScreen.webkitRequestFullscreen) { /* Safari */
                    picture.webkitRequestFullscreen({ screen: externalScreen });
                } else if (externalScreen && externalScreen.msRequestFullscreen) { /* IE11 */
                    picture.msRequestFullscreen({ screen: externalScreen });
                }
            });
        } else {
            // Fallback: Use the primary screen if getScreens is not supported
            if (picture.requestFullscreen) {
                picture.requestFullscreen();
            } else if (picture.webkitRequestFullscreen) { /* Safari */
                picture.webkitRequestFullscreen();
            } else if (picture.msRequestFullscreen) { /* IE11 */
                picture.msRequestFullscreen();
            }
        }
    });
});

