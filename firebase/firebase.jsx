import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARufLd_kXVwGn9SfhjLIXsL0R0wY6zH3E",
	authDomain: "fidas-99abd.firebaseapp.com",
	projectId: "fidas-99abd",
	storageBucket: "fidas-99abd.appspot.com",
	messagingSenderId: "1173540567",
	appId: "1:1173540567:web:78baf195ae49f4d3f16a92"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;