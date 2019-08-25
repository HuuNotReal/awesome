import firebase from 'firebase';
import uuid from 'react-native-uuid';
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCsbXK4tlS4TOQGy3T4fpNAcRpchVhD1Sg",
    authDomain: "appchat-daa06.firebaseapp.com",
    databaseURL: "https://appchat-daa06.firebaseio.com",
    projectId: "appchat-daa06",
    storageBucket: "gs://appchat-daa06.appspot.com",
    messagingSenderId: "788358597569",
    appId: "1:788358597569:web:d50fa82d04108be7"
  };

var name, email, photoUrl, uid, emailVerified;
class FirebaseSDK {
    constructor() {
      if (!firebase.apps.length) {
        //avoid re-initializing
        firebase.initializeApp(firebaseConfig);
      }
    }
    login = async (user, success_callback, failed_callback) => {
      await firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(success_callback);
    };
    register = async (user, success_callback, failed_callback) => {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(function(){
          success_callback();
          let userid = firebase.auth().currentUser.uid;
          firebase.auth().currentUser.updateProfile({ displayName: "Anonymous",photoURL: "https://www.mvp.microsoft.com/PublicProfile/Photo/5003148" })
          firestore.collection("users").doc(userid).set({
            email: user.email,
            id: userid,
            photoURL: "https://www.mvp.microsoft.com/PublicProfile/Photo/5003148",
            username: "Anonymous"
        });
      })
    }
    getUserInfo = async(a) => {
        user = firebase.auth().currentUser;
        
        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;  
          }
    }
    getAvatar = async() => {return firebase.auth().currentUser.photoURL}
    getUid= (a) => {
      let userid = firebase.auth().currentUser;
      var name, email, photoUrl, uid, emailVerified;
      if (uid != null) {
        name = userid.displayName;
        email = userid.email;
        photoUrl = userid.photoURL;
        emailVerified = userid.emailVerified;
        uid = userid.uid;  // The user's ID, unique to the Firebase project. Do NOT use               // you have one. Use User.getToken() instead.
      }
      a =  uid;
    }
    setUserEmail = async(a) =>{
        user = await firebase.auth().currentUser;
        user.updateEmail(a).then(function() {
          firestore.collection("users").doc(user.uid).set({
            email: user.email,
          });            
          }).catch(function(error) {
            alert(error);
          });
    }
    setUpdateprofile = async(email,username) =>{
    user = await firebase.auth().currentUser;
    user.updateEmail(email).then(function() {
      firestore.collection("users").doc(user.uid).set({
        email: email,
      });            
      }).catch(function(error) {
        alert(error);
      });
    user.updateProfile({
        displayName: username,
      }).then(function() {
        firestore.collection("users").doc(user.uid).set({
          username: username,
        }); 
      }).catch(function(error) {
        alert(error);
      });

    }
    setUsername = async(a,b) =>{
      user = await firebase.auth().currentUser;
      if (user.displayName != a)
      {
        user.updateProfile({
          displayName: a,
        })
        .then(firestore.collection("users").doc(user.uid).update({username: a }))
        .catch(function(error) {
          alert(error+"displayname");
        });
      }
      if (user.email != b)
      {
        user.updateEmail(b)
        .then(firestore.collection("users").doc(user.uid).update({email: b,}))
        .catch(function(error) {
          alert(error);
          });
      }
        

        console.log(user.email)
        


  }
    uploadImage = async uri => {
        console.log('got image to upload. uri:' + uri);
        try {
          const response = await fetch(uri);
          const blob = await response.blob();
          const ref = firebase
            .storage()
            .ref('avatar')
            .child(uuid.v4());
          const task = ref.put(blob);
      
          return new Promise((resolve, reject) => {
            task.on(
              'state_changed',
              () => {
      
              },
              reject,
              () => resolve(task.snapshot.ref.getDownloadURL())
            );
          });
        } catch (err) {
          console.log('uploadImage try/catch error: ' + err.message);
        }
      };
    updateAvatar = url => {
       // console.log(url);
        var user = firebase.auth().currentUser;
        if (user != null) {
          user.updateProfile({ photoURL: url }).then(
            function() {
              console.log('Updated avatar successfully. url:' + url);
              alert('Avatar image is saved successfully.');
              firestore.collection("users").doc(user.uid).update({photoURL: url,})
            },
            function(error) {
              console.warn('Error update avatar.');
              alert('Error update avatar. Error:' + error.message);
            }
          );
        } else {
          console.log("can't update avatar, user is not login.");
          alert('Unable to update avatar. You must login first.');
        }
      };

  }

  const firebaseSDK = new FirebaseSDK();
  export const firestore = firebase.firestore()
  export default firebaseSDK;
  export const firebaseGET = firebase.auth().currentUser;