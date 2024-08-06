//!  1) to display all the databases
//==> show dbs or show databases

//! 2) to create a database or to switch to a database
//==> use databaseName

//! 3) to create a collection
//==> db.createCollection("collectionName") //? explicitly
// ==> db.collection-name.insertOne() or db.collection-name.insertMany() //? implicitly

//! 4) to display all the collections
//==> show collections or show tables

//? create a school database and make two collections namely students and teachers

//! ================inserting data ==================

//! 5) to insert one document
// ==> db.collection-name.insertOne({})
// db.students.insertOne({ name: "vijay", class: "12" });
// db.students.insertOne({ name: "ajay", class: "11" });

//66a07b697ad127e2b2c4e49b ==> this is object ID which is unique for every document, which is handled by mongoDB. this object id is a datatype of Binary JSON.
// total size of this id is 12 bytes which contains hexadecimal values.

//! 6)  to insert many documents
// ==> db.collection-name.insertMany([ { doc1 } , { doc2} , { doc3 } ,.....])
// db.students.insertMany([
//   { name: "chetna", rollNo: 12 },
//   { name: "ashwin", sec: "b" },
//   { rollNo: 123, email: "ac@gmail.com" },
// ]);

//! 7) to display the current db
// ==> db

//! 8) to fetch one document
// ==> db.collection-name.findOne()
// this method will fetch the top most document present inside the collection

//! 9) to fetch all the documents
// ==> db.collection-name.find()

// find/findOne( {filter/target}, {projection} )
// if we use projection, by default _id field will be displayed.

//! 10) to delete a collection
// ==> db.collection-name.drop()

//! 11) to delete a single document
// ==> db.collection-name.deleteOne({filter/target})

//! 12) to delete multiple documents
// ==> db.collection-name.deleteMany({filter})

//! 13) to update a single document
// ==> db.collection-name.updateOne({filter}, {updating value}, {options})

db.emp.updateOne(
  { empNo: 7369 },
  { $set: { skills: ["html", "css"] } },
  {
    upsert: true,
  }
);

//! 14) to update multiple documents
// ==> db.collection-name.updateMany({filter}, { value}, {options})

db.emp.updateOne({ eName: "allen" }, { $unset: { skills: "" } });

db.emp.updateOne({ eName: "jones" }, { $set: { Salary: 5000 } });

db.students.findOne({ "address.pincode": "90001" });

//! find the emp working as manager and salesman

db.emp.find({ job: "clerk", job: "manager", sal: 1000 });
$eq;

db.emp.find({ sal: { $eq: 1100 } });

db.emp.find({ job: { $eq: "clerk" } }, { eName: 1, job: 1, _id: 0 });
