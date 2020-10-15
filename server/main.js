import { Meteor } from 'meteor/meteor';


// facebook

ServiceConfiguration.configurations.remove({
    service: "facebook"
});
ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '171127143484268',
    secret: 'bac6a6268806e5a098354bd52896f16b'
});


// ggogle


ServiceConfiguration.configurations.remove({
    service: "google"
});
ServiceConfiguration.configurations.insert({
    service: 'google',
    appId: '171127143484268',
    secret: 'bac6a6268806e5a098354bd52896f16b'
});




Accounts.onCreateUser(function (options, user) {

    if (typeof(user.services.facebook) != "undefined") {
        user.username = user.services.facebook.name;
        user.emails = [{ address: user.services.facebook.email }];    }
  

    // if (typeof(user.services.google) != "undefined") {
    //     user.email = user.services.google.email;
    //     user.profilePicture = user.services.google.picture;
    //     user.username = user.services.google.name;
    // }

    return user;
});



