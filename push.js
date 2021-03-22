let push = require('web-push');

let vapidKeys = {
    publicKey: 'BDS7wfFjADNgFIweflcK1cpVty2pmwJcrASezwJda4QSkH1WlM27C7ej3Y77raQ90nJKsAWr6D92ZXMkDRbDQNU',
    privateKey: 'a2xgcz3CHcK5lB_53Df50VF9cG0ZW1ESe_toDKaOuxc'
}

push.setVapidDetails('mailto:jb.choi@deepfine.ai', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {

};

push.sendNotification(sub, 'test message');
