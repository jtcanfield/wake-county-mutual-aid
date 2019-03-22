import Vue from 'vue';
import firebase from 'firebase';
import 'firebase/functions';
import App from './App.vue';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBxF-kdsFqqxEQ83HnoD_-eDpcdPeHFyFQ',
  authDomain: 'wake-county-mutual-aid.firebaseapp.com',
  databaseURL: 'https://wake-county-mutual-aid.firebaseio.com',
  projectId: 'wake-county-mutual-aid',
  storageBucket: 'wake-county-mutual-aid.appspot.com',
  messagingSenderId: '363954067119',
});

// app.functions().useFunctionsEmulator('http://localhost:5000');

Vue.config.productionTip = false;
Vue.prototype.$fireFunctions = {
  sendMail: app.functions().httpsCallable('sendMail'),
};

new Vue({
  render: h => h(App),
}).$mount('#app');
