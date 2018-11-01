document.addEventListener("DOMContentLoaded", event => {

  const app = firebase.app();
  // console.log(app);

  // items = document.getElementById('loadcollection');

  // const db = firebase.firestore();
  // const productsRef = db.collection('products');

  // const query = productsRef.where('price', '>=', 20).orderBy('price', 'asc').limit(1);

  // query.get().then( products => {
  //   products.forEach( doc => {
  //     data = doc.data();
  //     items.appendChild(document.createTextNode(`${data.name} == ${data.price} baht`));
  //     items.appendChild(document.createElement("br"));
  //     // document.write(`${data.name} at ${data.price} baht <br>`);
  //   });
  // })

});

function uploadFile(files) {
  const storageRef = firebase.storage().ref();
  const imgRef = storageRef.child('img.jpg');

  const file = files.item(0);
  
  const task = imgRef.put(file);
  task.then( snapshot => {
    console.log(snapshot);
    const url = snapshot.ref.getDownloadURL();
    console.log(url);
    document.querySelector('#imgupload').setAttribute('src', url);
  });
}

function googleLogout() {

  console.log('googleLogout()');

  firebase.auth().signOut();

  var displayname = document.getElementById('displayname');
  console.log(displayname);

  displayname.textContent = 'Google Account: please login...';

  document.getElementById('loginbutton').disabled = false;
  document.getElementById('logoutbutton').disabled = true;
  document.getElementById('loadpost').disabled = true;

}

function googleLogin() {

  console.log('googleLogin()');

  const provider = new firebase.auth.GoogleAuthProvider();

  // Async operation returns a promise
  firebase.auth().signInWithPopup(provider).then( result => {

    console.log(result);

    const user = result.user;
    var displayname = document.getElementById('displayname');
    console.log(displayname);

    displayname.textContent = 'Google Account: ' + user.displayName;

    document.getElementById('loginbutton').disabled = true;
    document.getElementById('logoutbutton').disabled = false;
    document.getElementById('loadpost').disabled = false;

    // document.write(`Hello ${user.displayName}`);

  }).catch( error => {
    console.error('Authentication error:', error);
  });

}

function loadPost() {
  
  console.log('loadPost()');

  var itemList = document.getElementById('items');
  
  const db = firebase.firestore();
  const mypost = db.collection('posts').doc('firstpost');

  // mypost.get().then( doc => {
  //   console.log(doc);
  //   const data = doc.data();

  //   // Create new <li> element
  //   var li = document.createElement('li');

  //   // Add text node with input value
  //   var postdata = data.title + ' - ' + data.createdAt;
  //   li.appendChild(document.createTextNode(postdata));

  //   // Append li to list
  //   itemList.appendChild(li);
  // });

  mypost.onSnapshot( doc => {

    const data = doc.data();

    // Create new <li> element
    var li = document.createElement('li');

    // Add text node with input value
    var postdata = data.title + ' - ' + data.createdAt;
    li.appendChild(document.createTextNode(postdata));

    // Append li to list
    itemList.appendChild(li);
  });

}

function updatePost(e) {
  const db = firebase.firestore();
  const mypost = db.collection('posts').doc('firstpost');
  
  mypost.update( {title: e.target.value, createdAt: new Date() })

}