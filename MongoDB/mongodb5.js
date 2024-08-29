// //!  1) to display all the databases
// //==> show dbs or show databases

// //! 2) to create a database or to switch to a database
// //==> use databaseName

// //! 3) to create a collection
// //==> db.createCollection("collectionName") //? explicitly
// // ==> db.collection-name.insertOne() or db.collection-name.insertMany() //? implicitly

// //! 4) to display all the collections
// //==> show collections or show tables

// //? create a school database and make two collections namely students and teachers

// //! ================inserting data ==================

// //! 5) to insert one document
// // ==> db.collection-name.insertOne({})
// // db.students.insertOne({ name: "vijay", class: "12" });
// // db.students.insertOne({ name: "ajay", class: "11" });

// //66a07b697ad127e2b2c4e49b ==> this is object ID which is unique for every document, which is handled by mongoDB. this object id is a datatype of Binary JSON.
// // total size of this id is 12 bytes which contains hexadecimal values.

// //! 6)  to insert many documents
// // ==> db.collection-name.insertMany([ { doc1 } , { doc2} , { doc3 } ,.....])
// // db.students.insertMany([
// //   { name: "chetna", rollNo: 12 },
// //   { name: "ashwin", sec: "b" },
// //   { rollNo: 123, email: "ac@gmail.com" },
// // ]);

// //! 7) to display the current db
// // ==> db

// //! 8) to fetch one document
// // ==> db.collection-name.findOne()
// // this method will fetch the top most document present inside the collection

// //! 9) to fetch all the documents
// // ==> db.collection-name.find()

// // find/findOne( {filter/target}, {projection} )
// // if we use projection, by default _id field will be displayed.

// //! 10) to delete a collection
// // ==> db.collection-name.drop()

// //! 11) to delete a single document
// // ==> db.collection-name.deleteOne({filter/target})

// //! 12) to delete multiple documents
// // ==> db.collection-name.deleteMany({filter})

// //! 13) to update a single document
// // ==> db.collection-name.updateOne({filter}, {updating value}, {options})

// db.emp.updateOne(
//   { empNo: 7369 },
//   { $set: { skills: ["html", "css"] } },
//   {
//     upsert: true,
//   }
// );

// //! 14) to update multiple documents
// // ==> db.collection-name.updateMany({filter}, { value}, {options})

// db.emp.updateOne({ eName: "allen" }, { $unset: { skills: "" } });

// db.emp.updateOne({ eName: "jones" }, { $set: { Salary: 5000 } });

// db.students.findOne({ "address.pincode": "90001" });

// //! find the emp working as manager and salesman

// db.emp.find({ job: "clerk", job: "manager", sal: 1000 });
// $eq;

// db.emp.find({ sal: { $eq: 1100 } });

// db.emp.find({ job: { $eq: "clerk" } }, { eName: 1, job: 1, _id: 0 });

// db.emp.find({ job: { $nin: ["clerk", "salesman"] } });

// db.emp.find({ job: { $eq: "clerk" }, job: { $eq: "manager" } });
// db.emp.find({ job: "clerk", job: "manager" });

// db.createCollection("loc", { capped: true, max: 2, size: 1000, autoIndexId: true });

// db.emp.find({ job: { $eq: "smith" } });

// db.emp.find({ job: { $eq: "salesman" } }, { eName: 1, job: 1, _id: 0 });

// db.emp.find({ comm: { $eq: 1400 } }, { mgr: 1, sal: 1, job: 1, _id: 0 });

// db.emp.findOne({ job: "manager", sal: 1100 });

// db.emp.find({ sal: { $lt: 2000 }, sal: { $gt: 1000 } });

// db.emp.find({ $and: [{ job: { $eq: "clerk" } }, { sal: 1100 }] });

// db.emp.find({ sal: { $not: { $gt: 1000 } } });

// db.emp.find({ $and: [{ job: "manager" }, { sal: { $lt: 1100 } }] });

// db.emp.find({ $and: [{ job: "manager" }, { deptNo: 30 }] }, { eName: 1, hireDate: 1, _id: 0 });

// db.emp.find({ $or: [{ sal: { $gte: 1500 } }, { sal: { $lte: 1100 } }] });

// //! find the details of the students who are studying history and economics.
// db.students.find({ subject: { $all: ["History", "Economics"] } });

// db.students.find({ subject: { $elemMatch: { $eq: "History", $eq: "Economics", $eq: "Maths" } } });

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// db.data.find({ interests: { $all: ["painting", "gardening"] } });

db.data.find({ interests: { $elemMatch: { $eq: "painting" } } });

db.students.find({ subject: { $size: 2 } });

// array
// []

db.survey.find({
  results: { $elemMatch: { product: { $eq: "abc" }, product: { $eq: "xyz" }, score: { $gt: 7 } } },
});

//! list of students who are studying history
db.students.find({ "subject.3": "History" }); //  $

//! find the list of emp who were hired after 1987

db.emp.find({ hireDate: { $gt: new Date("1-jan-1987") } });

//! find the list of emp who were hired before 1987 and after 1982

db.emp.find({
  $and: [
    { hireDate: { $lt: new Date("1-jan-1987") } },
    { hireDate: { $gte: new Date("1-jan-1981") } },
  ],
});

db.emp.insertOne({ name: "chetna", _id: 123 });

db.emp.find({ _id: ObjectId("66a23517b5c6990483c4e49e") });

//! find the details of emp having letter a at starting position in their name.
db.emp.find({ eName: { $regex: /^a/ } }); //cap symbol ^

//! find the details of emp having letter a at ending position in their name.
//! dollar symbol
db.emp.find({ eName: { $regex: /s$/ } });

db.emp.find({ eName: { $regex: /es/ } });

//! find the details of emp which are having char 'a" as second place in their name.
db.emp.find({ eName: { $regex: /^..a/ } });

//! find the details of emp which are having char 'a" as second place in their name from last.
db.emp.find({ eName: { $regex: /a..$/ } });

// new Date("1-jan-1987")

db.emp.find().forEach((doc) => {
  console.log(doc.sal);
});

db.emp.find().limit(3);

//! find the details of emp who were hired before 1987 and after 1981.
db.emp
  .find({
    $and: [
      { hireDate: { $lt: new Date("1-jan-1987") } },
      { hireDate: { $gte: new Date("1-jan-1982") } },
    ],
  })
  .count();

// find/findOne({filter}, {projection})
// updateOne/updateMany({filter}, {updating value}, {options})

//! data modelling:==> how data is stored and what is the relation between the data.

//! embed 1 to 1
db.myCol.insertOne({
  name: "abc",
  age: 12,
  address: {
    city: "delhi",
  },
});

db.myCol.insertOne({
  name: "Chetna",
  age: 34,
});

db.myCol2.insertOne({
  city: "Noida",
});

db.myCol.updateOne(
  { name: "Chetna1" },
  { $set: { address: ObjectId("66b4486f991e68ee93c4e49f") } }
);

db.myCol.insertOne({ name: "Ishika", age: 24, myAddress: ObjectId("66b4483f991e68ee93c4e49d") });

//! to populate the address field
// db.myCol.aggregate({
//   $lookup: {
//     from: "myCol2",
//     localField: "myAddress",
//     foreignField: "_id",
//     as: "address",
//   },
// });

db.users.insertMany([
  { name: "ashwin", id: 123 }, //_id: mongodb bson hexadecimal string, id: number
  { name: "ishika", id: 124 },
]);

db.users.insertOne({
  name: "chetan",
  id: 111,
  skills: {
    frontend: ["html", "css"],
    backend: ["java", "nodejs"],
    database: ["sql", "mongo"],
  },
  loc: {
    city: "delhi",
  },
});

db.skills.insertMany([
  {
    frontend: ["html", "css"],
    backend: ["java", "nodejs"],
    database: ["sql", "mongo"],
  },
  {
    frontend: ["react", "angular"],
    backend: ["java", "python"],
    database: ["pl/sql", "mysql"],
  },
]);

db.users.updateOne({ id: 123 }, { $set: { newSkillsField: ObjectId("66b591f0ac32af1c7ac4e49f") } });

db.users.updateOne({ id: 124 }, { $set: { newSkillsField: ObjectId("66b591f0ac32af1c7ac4e49e") } });

db.users.insertOne({
  name: "chetna",
  id: 121,
  newSkillsField: ObjectId("66b591f0ac32af1c7ac4e49f"),
});

//! data modelling ==> relation and structure
db.createCollection("formData", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "haveExperience"],
      properties: {
        name: {
          bsonType: "string",
        },
        email: {
          bsonType: "string",
        },
        password: {
          bsonType: "int",
        },
        haveExperience: {
          bsonType: "bool",
        },
      },
    },
  },
});

db.formData.insertOne({
  name: "ishika",
  email: "ishika@xyz",
  password: 123,
  haveExperience: true,
});

db.createCollection("users1", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "id", "skills", "address"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        age: {
          bsonType: "int",
          description: "must be a number and is required",
        },
        id: {
          bsonType: "int",
          description: "must be a number and is required",
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

db.createCollection("users2", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "skills"],
      properties: {
        name: {
          bsonType: "string",
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

db.users2.insertOne({
  name: "varun",
  age: 24,
  skills: {
    frontend: ["html", "css"],
    backend: ["java", "nodejs"],
    database: ["sql", "mongo"],
    automation: ["selenium", "cypress"],
  },
});

/*
{
  name:string
  age:number
  skills:[
    {backend:
    frontend:
    },
    {string},
    ...
  ]
}

*/
db.createCollection("c1", {
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
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["frontend", "backend"],
            properties: {
              frontend: {
                bsonType: "string",
              },
              backend: {
                bsonType: "string",
              },
            },
          },
        },
      },
    },
  },
});

db.c1.insertOne({
  name: "abc",
  age: 12,
  skills: [
    { frontend: "html", backend: "java" },
    {
      frontend: "css",
      backend: "python",
      database: "mongodb",
    },
  ],
});

db.c1.updateOne({ name: "abc1" }, { $set: { age: 31 } }, { upsert: true });

// updateOne/ updateMany({filter}, {updating value}, {options})
//! $set, $unset, $inc, $max, $min

// {  $max/min:{ field-name: value }   }

db.emp.updateOne({ eName: "ward" }, { $inc: { totalHoursWorked: "" } });

db.emp.updateOne({ eName: "ward" }, { $max: { comm: 200 } });

db.students.updateOne(
  { _id: ObjectId("66a77a66961b0be6e0f25832") },
  { $set: { "address.city": "San Francisco", "address.country": "USA" } }
);

db.students.updateOne(
  { _id: ObjectId("66a77a66961b0be6e0f25832") },
  {
    $set: { "subject.0": "maths" },
  }
);

// update all the documents by adding a new field "sec"

db.students.updateMany({}, { $set: { sec: "a" } });

db.emp.updateOne({ eName: "ward1" }, { $set: { sal: 12000 } }, { upsert: true });
/*
{
_id:
  eName:'ward1',
  sal:1200
}

*/

db.students.find({ subject: { $all: ["Maths", "English"] } });

db.students.find({ subject: { $elemMatch: { $eq: "Economics", $eq: "English" } } });

//! $in
// {field name : {$in : [value1, value2, value3]}}

db.students.find({ subject: { $in: ["Economics", "English"] } });

// db.survey.insertMany( [
//   { "_id": 1, "results": [ { "product": "abc", "score": 10 },
//                            { "product": "xyz", "score": 5 } ] },
//   { "_id": 2, "results": [ { "product": "abc", "score": 8 },
//                            { "product": "xyz", "score": 7 } ] },
//   { "_id": 3, "results": [ { "product": "abc", "score": 7 },
//                            { "product": "xyz", "score": 8 } ] },
//   { "_id": 4, "results": [ { "product": "abc", "score": 7 },
//                            { "product": "def", "score": 8 } ] },
//   { "_id": 5, "results": { "product": "xyz", "score": 7 } }
// ] )

// db.survey.find({ results: { $elemMatch: { product: { $eq: "abc" } },  });

db.survey.find({ results: { $elemMatch: { product: { $eq: "abc" }, score: { $gt: 7 } } } });

db.survey.find({ "results.product": "def" });

db.students.find({ "subject.$": "Economics" });

// db.emp.find();
// db.emp.aggregate([ {stage1 }, {stage2}, {stage3} ......]);

db.emp.aggregate([
  {
    $match: {
      job: "clerk",
    },
  },
]);
// db.emp.find({$or:[{}, {}]})

db.emp.aggregate([
  {
    $match: {
      $or: [{ deptNo: 10 }, { deptNo: 20 }],
    },
  },
]);

db.emp.aggregate([
  {
    $addFields: {
      annualSalary: { $multiply: ["$sal", 12] },
    },
  },
]);

// details of emp who are working as clerk in dept 10 and 20 and having annualSal greater than 10000

db.emp.aggregate([
  {
    $addFields: {
      anSal: { $multiply: ["$sal", 12] },
    },
  },
  {
    $match: {
      $and: [{ job: "clerk" }, { deptNo: { $in: [10, 20] } }, { anSal: { $gt: 9000 } }],
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      numberOfEmp: { $sum: 1 },
      // totalSal: { $sum: "$sal" },
      // maxSal: { $max: "$sal" },
      // minSal: { $min: "$sal" },
      // avgSal: { $avg: "$sal" },
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      totalSalary: { $sum: "$sal" },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      eName: { $regex: /a/ },
    },
  },
  {
    $group: {
      _id: "$job",
      count: { $sum: 1 },
      avgSalary: { $avg: "$sal" },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      sal: { $gt: 2000 },
    },
  },
  {
    $group: {
      _id: "$deptNo",
      count: { $sum: 1 },
      avgSal: { $sum: "$sal" },
      maxSal: { $max: "$sal" },
      minSal: { $min: "$sal" },
    },
  },
  {
    $match: {
      maxSal: { $gt: 3000 },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      job: "manager",
    },
  },
  {
    $project: {
      eName: 1,
      hireDate: 1,
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      count: { $sum: 1 },
      maxSal: {
        $sum: "$sal",
      },
    },
  },
  {
    $match: {
      maxSal: { $gt: 5000 },
    },
  },
]);

//! display the emp names of emp in asc/desc order
db.emp.aggregate([
  {
    $sort: {
      eName: 1,
    },
  },
  {
    $project: {
      eName: 1,
      _id: 0,
    },
  },
]);

//! display the sal of emp in desc order

db.emp.aggregate([
  {
    $sort: {
      sal: -1,
    },
  },
  {
    $project: {
      sal: 1,
      _id: 0,
    },
  },
]);

//! display the second highest sal of emp in desc order
db.emp.aggregate([
  {
    $sort: {
      sal: -1,
    },
  },
  {
    $limit: 2,
  },
  {
    $skip: 1,
  },
  {
    $project: {
      sal: 1,
      _id: 0,
    },
  },
]);

//! display the details of emp having fourth lowest salary
db.emp.aggregate([
  {
    $sort: {
      sal: -1,
    },
  },
  {
    $limit: 4,
  },
  {
    $skip: 3,
  },
]);

//! display the details of emp having highest salary
db.emp.aggregate([
  {
    $sort: {
      sal: -1,
    },
  },
  {
    $limit: 1,
  },
]);

db.emp.aggregate([
  {
    $match: {
      sal: { $gt: 2000 },
    },
  },
  {
    $group: {
      _id: "$deptNo",
      count: { $sum: 1 },
      avgSal: { $sum: "$sal" },
      maxSal: { $max: "$sal" },
      minSal: { $min: "$sal" },
      EmpNames: { $push: "$eName" },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      sal: { $gt: 2000 },
    },
  },
  {
    $group: {
      _id: "$deptNo",
      count: { $sum: 1 },
      avgSal: { $avg: "$sal" },
      jobs: { $push: "$job" },
      jobsWithoutDuplicates: { $addToSet: "$job" },
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      noOfEmp: { $sum: 1 },
      jobs: { $addToSet: "$job" },
    },
  },
  {
    $project: {
      _id: 0,
      idJob: "$_id",
      myJobs: "$jobs",
    },
  },
]);

//! display maximum salary of all emp in each dept along with jobs
db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      maxSal: { $max: "$sal" },
      job: { $addToSet: "$job" },
    },
  },
  {
    $project: {
      _id: 0,
      departmentNum: "$_id",
      maxSal: 1,
      newJobs: "$job",
      job: 1,
    },
  },
]);

//! total salary needed to pay to employee working as clerk.
db.emp.aggregate([
  {
    $match: {
      job: "clerk",
    },
  },
  {
    $group: {
      _id: null,
      totalSal: { $sum: "$sal" },
    },
  },
]);

//! avg salary needed to pay to all the employees
db.emp.aggregate([
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$sal" },
      avgSal: { $avg: "$sal" },
    },
  },
]);

db.emp.find().sort({ sal: -1 }).limit(3).skip(1);

//! lookup ==> join two collections

/*
db.collection1.aggregate([{   collection1 ==> local collection
  $lookup:{
        from:"collection2",   collection2 ==> foreign collection  
        localField:"",
        foreignField:"",
        as:""                 aliasing
    }
}
*/
//! details of emp along with their department details
db.emp.aggregate([
  {
    $lookup: {
      from: "dept",
      localField: "deptNo",
      foreignField: "deptNo",
      as: "deptNo",
    },
  },
]);

//! display the details of emp name, dept loc who are working in new York and Dallas
db.emp.aggregate([
  {
    $lookup: {
      from: "dept",
      localField: "deptNo",
      foreignField: "deptNo",
      as: "deptDetails",
    },
  },

  {
    $match: {
      "deptDetails.loc": { $in: ["new york", "dallas"] },
    },
  },
]);

//! display the names of emp in ascending order.
db.emp.aggregate([
  {
    $project: {
      eName: 1,
      _id: 0,
    },
  },
  {
    $sort: {
      eName: 1,
    },
  },
]);

//! display the eName, sal, hireDate of emp along with dept loc who are working as clerk
db.emp.aggregate([
  {
    $match: {
      job: "clerk",
    },
  },

  {
    $lookup: {
      from: "dept",
      localField: "deptNo",
      foreignField: "deptNo",
      as: "deptDetails",
    },
  },
  { $unwind: "$deptDetails" },
]);

//! display the names of emp along with their location and dept names
db.dept.aggregate([
  {
    $lookup: {
      from: "emp",
      localField: "deptNo",
      foreignField: "deptNo",
      as: "empDetails",
    },
  },
  { $unwind: "$empDetails" },
  {
    $project: {
      loc: 1,
      dName: 1,
      _id: 0,
      "empDetails.eName": 1,
    },
  },
]);
