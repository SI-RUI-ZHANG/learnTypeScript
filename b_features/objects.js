var profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
// const {age} = profile;
var age = profile.age;
// const {coords: {lat, lng}} = profile;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
