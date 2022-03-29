        Notification.requestPermission(); // => request Permission for Show Notfication
        function SendNotification(title, text, img) { // => send Notif Function :)
            let myNtofi = new Notification(
                title, {
                    body: text,
                    icon: img
                }
            );
        };
        SendNotification('Sahbaee.ir', 'THIS MESSAGE FOR YOU :)', './img/logo.jpg'); // => Call function with 3-arg
        // source : Github.com/sahbaee :)