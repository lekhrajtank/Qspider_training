// //!1) to display all databases or to switch between databases
// // ==> show dbs or show databases

// //! 2) to create a new database
// // ==> use database-name

// //! 3) to create a new collection
// // ==> db.createCollection("collection-name") // ?explicitly
// // ==> db.collection-name.insertOne({}) or db.collection-name.insertMany() //? implicitly

// //! 4) to display all the collections
// // ==> show collections

// //! 5) to insert a document
// // ==> db.collection-name.insertOne({})

// //! 6) to insert multiple documents
// // ==> db.collection-name.insertMany([ {doc1} , {doc2} , {doc3} ])

// //? create a school database inside that database create two collections students and teachers and insert at least two documents each.

// db.students.insertMany([
//   { name: "abc", age: 15 },
//   { name: "xyz", age: 14 },
// ]);

// //! 7) to delete a collection
// // ==> db.collection-name.drop()

// //! 8) to delete a database
// // ==> db.dropDatabase()

// //! 9) to see your current db
// // ==> db

// //! 10) to check the version of database
// // db.version()

// //! 11) to fetch single document
// // ==> db.collection-name.findOne()
// // findOne() will fetch only the top most document in the collection

// //! 12) to fetch all the documents
// // ==> db.collection-name.find()

// //? find or findOne  ( {filter/target}, {projection}, {options} )
// // filter or target ==> key:value

// //! 13) to delete a single document
// // ==> db.collection-name.deleteOne({})

// //! 14) to delete multiple documents
// // ==> db.collection-name.deleteMany({})

// //! 15) to update a single document
// // ==> db.collection-name.updateOne({target/filter}, {updating value}, {options})
// db.emp.updateOne({ empNo: 12345 }, { $set: { age: 23 } }, { upsert: true });

// //~======================================

// // db.students.findOne({ "address.city": "New York" });

// // //! find the details of students who opted maths as a subject
// // db.students.find({ subject: "maths" }); //todo

// // //! update the name of the student with roll no 103 with new name alice stark
// // db.students.updateOne({ rollNo: "103" }, { $set: { isMonitor: false } });

// // //! update the sector to "B" of the student with roll no 103
// // db.students.updateOne({ rollNo: "103" }, { $set: { "address.sector": "B" } });

// // db.students.updateMany({ "address.sector": "A" }, { $set: { busAvailable: true } });

// //! address and subjects of teacher whose name is Michael Johnson and gender is male
// db.teachers.findOne({ name: "Michael Johnson", gender: "male" }); // implicit and operator

// //! details of teacher who are male and female
// db.teachers.find({ gender: "Female", gender: "Male", sal: 2500 }); // if we use different conditions on same field then it will consider the last condition

// db.emp.findOne({ eName: { $eq: "jones" } });

// db.emp.find({ job: { $in: ["clerk", "salesman"] } });

// db.emp.find({ hireDate: { $lt: new Date("1987-01-01") } });

// db.emp.find({ sal: { $lt: 2000 }, sal: { $gt: 1000 } });

// db.emp.find({ job: { $in: ["clerk", "manager"] } });

// db.emp.find({ job: { $in: ["clerk"] }, sal: { $in: [1000] } });

// db.emp.find({ $or: [{ eName: "ward" }, { job: "manager" }] });

// db.emp.find({ $and: [{ eName: { $eq: "ward" } }, { job: { $eq: "manager" } }] });

// db.emp.find({ job: { $not: { $eq: "manager" } } });

// db.emp.find({ $and: [{ job: "clerk" }, { sal: { $gt: 1000 } }] });

// db.emp.find({ $and: [{ $or: [{ job: "clerk" }, { job: "manager" }] }, { deptNo: 10 }] });

// db.emp.find(
//   { $and: [{ job: "clerk" }, { $or: [{ deptNo: 10 }, { deptNo: 20 }] }] },
//   { eName: 2, job: 1, deptNo: 1, _id: 0 }
// );

// db.emp.find({
//   $and: [
//     { $or: [{ job: "manager" }, { job: "clerk" }] },
//     { $or: [{ deptNo: 10 }, { deptNo: 30 }] },
//   ],
// });

// db.emp.find({ $or: [{ job: "analyst" }, { deptNo: 30 }] });

// db.students.find({ subject: { $all: ["Math", "History"] } });

// db.students.find({
//   subject: { $elemMatch: { $or: [{ subject: "Maths" }, { subject: "History" }] } },
// });

// db.students.find({ subject: { $size: 2 } });

//! fetch the details of the students which are studying both maths and history.\
db.students.find({ subject: { $all: ["Maths", "History"] } });

db.students.find({ subject: { $eleMatch: { $eq: "Maths", $eq: "History" } } });

db.students.find({ subject: { $size: 3 } });

db.students.find({ "subject.1": "Maths" });

//! find the details of emp having initial char "a" in their name.
// regex ==> regular expression
db.emp.find({ eName: { $regex: /^n$/ } });

//! find the details of emp having ending char "n" in their name.

//! find the details of emp having char "s" in their name.
db.emp.find({ eName: { $regex: /n/ } });

//! details of emp whose second char is "a" from start
db.emp.find({ eName: { $regex: /^.a/ } });

//! details of emp whose second char is "a" from last
db.emp.find({ eName: { $regex: /n..$/ } });

db.emp.find().forEach((document) => {
  console.log(document.eName);
});

db.emp.find().limit(2);

//! find the number of emp having sal 1100 and 2000
db.emp.find({ sal: { $in: [1100, 2000] } }).count();
db.emp.find({ $or: [{ sal: 1100 }, { sal: 1200 }] });

//! find the number of emp working as manager in dept 10 and 30
db.emp.find({ $and: [{ job: "manager" }, { deptNo: { $in: [10, 30] } }] }).count();

//! find the number of emp hired before 1987 (count)
db.emp.find({ hireDate: { $lt: new Date("1-jan-1987") } });

//! find the number of emp hired before 1981 and after 1970 (count)
db.emp.find({
  $and: [
    { hireDate: { $lte: new Date("1-jan-1980") } },
    { hireDate: { $gte: new Date("1-jan-1971") } },
  ],
});

//! find the details of students studying maths or economics
db.students.find({ subject: { $in: ["Maths", "Economics"] } });

// findOne({ filter }, { projection });
// find({ filter }, { projection });

// updateOne and updateMany({ filter }, { value }, { options });

db.createCollection("myCollection", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "password"],
      properties: {
        username: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        password: {
          bsonType: "Number",
          description: "must be a string and is required",
        },
      },
    },
  },
});

db.myCollection.insertOne({ username: "abc", password: "xyz", email: "abc@xyz" });

db.users.insertOne({
  name: "ishika",
  age: 25,
  _id: 125,
  address: {
    city: "banglore",
    state: "karnataka",
  },
});

db.loc.insertOne({ loc: "Noida", state: "Karnataka" });

db.users.updateOne({ name: "varun" }, { $set: { address: ObjectId("66b4aec8448d8812d2c4e49b") } });

db.users.updateOne({ name: "ashwin" }, { $set: { address: ObjectId("66b4aed9448d8812d2c4e49c") } });

db.loc.updateOne({ loc: "Noida" }, { $set: { empDetails: 123 } });

db.movies.insertMany([{ name: "Deadpool " }, { name: "Deadpool 2" }, { name: "Deadpool 3" }]);

db.year.insertMany([{ year: "2014" }, { year: "2018" }, { year: "2024" }]);

db.movies.updateOne(
  { name: "Deadpool 2" },
  { $set: { releaseDate: ObjectId("66b4b16a448d8812d2c4e4a1") } }
);

// db.movies.insertOne({
//   name: "Deadpool and Wolverine",
//   releaseDate: ObjectId("66b4b16a448d8812d2c4e4a2"),
//   ratings: 7.5,
// });

// db.movies.aggregate([
//   { $lookup: { from: "year", localField: "releaseDate", foreignField: "_id", as: "releaseDate" } },
// ]);

db.createCollection("myColl3", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "releaseDate", "rating"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        releaseDate: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        rating: {
          bsonType: "number",
          description: "must be a number and is required",
        },
      },
    },
  },
});

db.myColl3.insertOne({ releaseDate: "2025", rating: 8.5 });

db.createCollection("myUsers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "id", "skills", "address"],
      properties: {
        name: {
          bsonType: 2,
          description: "must be a string and is required",
        },
        age: {
          bsonType: "int",
        },
        id: {
          bsonType: "int",
        },
        skills: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
        },
        address: {
          bsonType: "object",
          required: ["city", "state"],
          properties: {
            city: {
              bsonType: "string",
            },
            state: {
              bsonType: "string",
            },
          },
        },
      },
    },
  },
});

//Data modelling ==> how data is stored and what is the relation between the data
// relation ==> embed and reference
// {
//   name:
//   age:
//   loc:{

//   },
// contact:{
// }
// embed 1 to 1
// }

db.users.insertOne({ name: "ishika", age: 25, id: 123 });
//  ObjectId('66b5ffc9df44321107c4e49b'), bson hexadecimal string 12 bytes
db.users.find({ name: "ishika" }); //json

db.users.insertOne({ name: "ashwin", age: 24, _id: 111 }); // integer _id
db.users.find({ _id: ObjectId("111") });
// if _id field is generated by mongodb then in query we have to include ObjectId,
// if it is user defined then ObjectId is not required.

db.loc.insertMany([
  {
    city: "Noida",
    state: "UP",
  },
  {
    city: "Banglore",
    state: "Karnataka",
  },
  {
    city: "Chennai",
    state: "TN",
  },
]);

db.users.updateOne({ name: "varun" }, { $set: { empLoc: ObjectId("66b60249df44321107c4e49f") } });

db.loc.updateOne({ city: "Banglore" }, { $set: { empDetails: 111 } });

/*

{
  name:string,
  age:number,
  skills:{
    frontend:[string],
    backend:[string],
    database:[string],
  }
}

*/

db.createCollection("myUsers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "skills"],
      properties: {
        name: {
          bsonType: "string",
        },
        age: {
          bsonType: "int",
        },
        skills: {
          bsonType: "object",
          required: ["frontend", "backend", "database"],
          properties: {
            frontend: {
              bsonType: "array",
              items: {
                bsonType: "string",
              },
            },
            backend: {
              bsonType: "array",
              items: {
                bsonType: "string",
              },
            },
            database: {
              bsonType: "array",
              items: {
                bsonType: "string",
              },
            },
          },
        },
      },
    },
  },
});

db.myUsers.insertOne({
  name: "chetna",
  age: 25,
  skills: {
    frontend: ["html", "css"],
    backend: ["java", "nodejs"],
    database: ["sql", "mongo"],
    automation: ["selenium", "cypress"],
  },
  loc: "banglore",
});

// $set ==> update
//! two conditions  ==> 1) you can update existing field   2) you can add new fields (both can be performed simultaneously)

// change the sal of ward to some other value and add isMarried to false
db.emp.updateOne({ eName: "ward" }, { $set: { sal: 2500, isMarried: true } }, { upsert: true });

db.emp.updateOne({ eName: "ward" }, { $unset: { isMarried: "" } });
//({ updating part ==> $unset:{ field-name: "" } })

db.emp.updateOne({ eName: "ward" }, { $inc: { totalHoursWorked: null } });
