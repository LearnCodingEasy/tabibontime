// استيراد قاعدة البيانات
// Import getFirestore : =  Data Base

// استيراد المجموعة
// Import Collection

// استيراد بيانات المجموعة
// Import Data Of Collection
// getDocs

// استيراد كائن في لقطة
// Import Object onSnapshot

// Object Add Doc استيراد
// Import Object Add Doc

// Object delete Doc استيراد
// Import Object delete Doc

// Object Doc استيراد
// Import Object Doc

// Object Query استيراد
// Import Object Query

// Object Where استيراد
// Import Object Where

// Object orderBy استيراد
// Import Object orderBy

// Object serverTimestamp استيراد
// Import Object serverTimestamp

// استيراد بيانات عنصر من المجموعة
// Import Data Of Collection Element

// Object updateDoc استيراد
// Import Object updateDoc

// لتمكين البيانات المتصلة بالشبكة وغير المتصلة بالشبكة
// To enable networked and offline data
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
  enableIndexedDbPersistence,
  // enablePersistence,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// init services ( Database )
// تهيئة خدمات قاعدة بيانات
const Database = getFirestore();
// console.log("Database: ", Database);

// Get The Collection From Database by Collection Name
// احصل على المجموعة من قاعدة البيانات حسب اسم المجموعة
// collection ref
const colRef = collection(Database, "collectionName");
// console.log("colRef: ", colRef);

// Fetching Data
// جلب البيانات
// getDocs(colRef)
//   .then((snapshot) => {
//     console.log("snapshot: ", snapshot.docs);
//     let items = [];
//     snapshot.docs.forEach((doc) => {
//       items.push({ ...doc.data(), id: doc.id });
//     });
//     console.log("items: ", items);
//     showItems(items);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

/*
<form class="Search">
    <input type="text" name="Title" id="InputSearch" required />
    <button class="btn-search">Search</button>
</form>
*/
let SearchForm = document.querySelector(".Search");

SearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputSearch = document.getElementById("InputSearch");
  console.log("Input Search: ", inputSearch.value);
});

// استفسارات
// Queries
const queries = query(colRef, orderBy("createdAt"));
// const queries = query(colRef, where("title", "==", "Ip"));
// const queries = query(colRef, where("title", "==", InputSearch.value));
// const queries = query( colRef, where( "imgUrl", "==", "https://images.hdqwalls.com/download/ip-man-4-the-finale-q0-1280x800.jpg" ) , orderBy('createdAt'));
// console.log("queries: ", queries);

//
//
if ("indexedDB" in window) {
  console.log("IndexedDB is supported in this browser");

  enableIndexedDbPersistence(Database)
    //   // enableIndexedDbPersistence(, { synchronizeTabs: true })
    //   // enablePersistence(Database)
    .then(() => {
      // enable offline data successful
      // تمكين البيانات غير المتصلة بالإنترنت
      // تمكين التخزين في IndexedDB بنجاح
      console.log(`// Enable Offline Data Successful`);
    })
    .catch((err) => {
      if (err.code === "failed-precondition") {
        // لا يمكن تمكين الثبات الفاشل إلا في علامة تبويب واحدة في وقت واحد.
        console.log(
          "failed persistence can only be enabled in one tab at a time."
        );
      } else if (err.code === "unimplemented") {
        // لا يدعم المتصفح الحالي جميع الميزات المطلوبة لتمكين الثبات
        console.log(
          "The current browser does not support all of the features required to enable persistence."
        );
      }
    });
} else {
  // IndexedDB is not supported
  console.error("IndexedDB is not supported in this browser");
}

// بيانات جمع الوقت الحقيقي
// Realtime Collection Data
// Real-time listener
// Listen to offline data
onSnapshot(queries, { includeMetadataChanges: true }, (snapshot) => {
  console.log("snapshot: ", snapshot.docs);
  // let items = [];
  // snapshot.docs.forEach((doc) => {
  //   items.push({ ...doc.data(), id: doc.id });
  // });
  // showItems(items);
  // console.log("items: ", items);
  // console.log("snapshot docChanges(): ", snapshot.docChanges());
  snapshot.docChanges().forEach((change) => {
    // console.log("Change: ", change, change.doc.data());
    if (change.type === "added") {
      // add the document data to the web page
      console.log("New recipe added: ", change.doc.data());
      showItems(change.doc.data(), change.doc.id);
    }
    if (change.type === "removed") {
      // remove the document data from the web page
      console.log("Recipe removed: ", change.doc.data());
      removeItem(change.doc.id);
    }
    const source = snapshot.metadata.fromCache ? "local cache" : "server";
    console.log("Data came from " + source);
  });
});

// **************

// حدد العنصر
// Select Element
let inner = document.getElementById("inner");
const showItems = (items, id) => {
  // items.forEach((item) => {
  const { title, description } = items;
  let itemEl = document.createElement("div");
  itemEl.classList.add("className");
  itemEl.innerHTML = `
    <div class="card-panel recipe white row" data-id="${id}">
      <img src="image/dish.png" alt="recipe thumb">
      <div class="recipe-details">
        <div class="recipe-title">${title}</div>
        <div class="recipe-ingredients">${description}</div>
      </div>
      <div class="recipe-delete">
        <i class="material-icons"  data-id="${id}">delete_outline</i>
      </div>
    </div>
    `;
  inner.appendChild(itemEl);
  // });
};
// وظيفة لإظهار العناصر
// Function To Show Items
// function showItems(items) {
//   items.forEach((item) => {
//     const { title, description, id } = item;
//     let itemEl = document.createElement("div");
//     itemEl.classList.add("className");
//     itemEl.innerHTML = `

//     <div class="card-panel recipe white row" data-id="${id}">
//       <img src="image/dish.png" alt="recipe thumb">
//       <div class="recipe-details">
//         <div class="recipe-title">${title}</div>
//         <div class="recipe-ingredients">${description}</div>
//       </div>
//       <div class="recipe-delete">
//         <i class="material-icons" data-id="${id}">delete_outline</i>
//       </div>
//     </div>
//     `;
//     inner.appendChild(itemEl);
//   });
// }
// const showItems = (items, id) => {
//   // items.forEach((item) => {
//   const { title, description } = items;
//   let itemEl = document.createElement("div");
//   itemEl.classList.add("className");
//   itemEl.innerHTML = `
//     <div class="card-panel recipe white row" data-id="${id}">
//       <img src="image/dish.png" alt="recipe thumb">
//       <div class="recipe-details">
//         <div class="recipe-title">${title}</div>
//         <div class="recipe-ingredients">${description}</div>
//       </div>
//       <div class="recipe-delete">
//         <i class="material-icons" data-id="${id}">delete_outline</i>
//       </div>
//     </div>
//     `;
//   inner.appendChild(itemEl);
//   // });
// };
/*
<form class="add">
    <input type="text" id="title" name="'title" required />
    <input type="text" id="description" name="'description" required />
    <button class="btn-add ">Add Item</button>
</form>
*/
// إضافة عنصر
// Adding Documents
let addItemForm = document.querySelector(".add");
addItemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addItemForm.title.value,
    description: addItemForm.description.value,
    createdAt: serverTimestamp(),
  })
    .then(() => {
      addItemForm.reset();
    })
    .catch((error) => console.log(error));
});

/*
<form class="delete">
    <input type="text" name="id" id="id" required />
    <button class="btn-delete">Delete Item</button>
</form>
*/
// حذف عنصر
// Deleting Documents
// let deleteItemForm = document.querySelector(".delete");
// deleteItemForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let colRef = doc(Database, "collectionName", deleteItemForm.id.value);
//   deleteDoc(colRef).then(() => {
//     deleteItemForm.reset();
//   });
// });

let innerItems = document.querySelector(`.recipes`);
console.log("innerItem: ", innerItems);
innerItems.addEventListener(`click`, (event) => {
  // console.log("event: ", event);
  if (event.target.tagName === `I`) {
    // console.log(`Yes`);
    const id = event.target.getAttribute(`data-id`);
    // console.log("id: ", id);
    let colRef = doc(Database, "collectionName", id);
    console.log("colRef: ", colRef);
    deleteDoc(colRef).then(() => {
      console.log(`Item Is Delete`);
    });
  }
});
const removeItem = (id) => {
  const item = document.querySelector(`.recipe[data-id="${id}"]`);
  item.remove();
};
// (GetDoc & RealTime) جلب عنصر واحدة
// fetching a single document ( getDoc & realtime)
// const docRef = doc(Database, "collectionName", "hl9vtv3PWok4uXLt0waV");
// let singleItem = document.getElementById(`singleItem`);
// getDoc(docRef).then((doc) => {
//   console.log(`single document: `, doc.data(), doc.id);
//   singleItem.innerHTML = showItem(doc.data());
// });
// هرجع اشغلها فيها مشكلة
// onSnapshot(docRef, (doc) => {
//   console.log(`doc.data() =>`, doc.data());
//   console.log(`doc.id`, doc.id);
//   console.log(doc.data(), doc.id);
//   console.log(`doc.data() =>`, doc.data());
//   singleItem.innerHTML = showItem(doc.data());
// });

// وظيفة لإظهار العنصر
// Function To Show Item
// function showItem(item) {
//   const { title, description, id } = item;
//   let itemEl = document.createElement("div");
//   itemEl.classList.add("className");
//   itemEl.innerHTML = `
//         <div class="title">${title}</div>
//         <div class="title">${description}</div>
//         <span class='delete-icon' data-id='${id}'>
//             <i class="fas fa-trash"></i>
//         </span>
//         `;
//   inner.appendChild(itemEl);
// }

/*
<form class="update">
    <input type="text" name="id" required />
    <button class="btn-update">Update Item</button>
</form>
*/
// تحديث عنصر
// updating a document
const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let docRef = doc(Database, "collectionName", updateForm.id.value);

  updateDoc(docRef, {
    title: updateForm.title.value,
  }).then(() => {
    updateForm.reset();
  });
});
