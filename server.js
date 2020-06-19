const mongoose = require("mongoose");
const data = require("./data.json");

mongoose.connect("mongodb://localhost:27017/fs09-course", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connect to DB successfully"))
  .catch(console.log)

// Tao Schema
const CourseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String], // ["Math", "Chemistry"]
  date: Date,
  isPublished: Boolean,
  price: Number
})

// Tao model
const Course = mongoose.model("Course", CourseSchema, "Course")
// Course => courses
// Category => categories

// Tao instance
// const course_1 = new Course({
//   name: "Fullstack JS",
//   author: "Cybersoft",
//   tags: ["NodeJS", "MongoDB", "VueJS"],
//   isPublished: false,
//   price: 20
// })

// tao moi khoa hoc
// course_1.save()
//   .then(console.log)
//   .catch(console.log)

// query
// Course.find()
//   .then(console.log)
//   .catch(console.log)

// for (let i = 0; i < data.length; i++) {
//   const course = data[i];
//   const newCourse = new Course({
//     name: course.name,
//     author: course.author,
//     tags: course.tags,
//     date: course.date,
//     isPublished: course.isPublished,
//     price: course.price
//   })

//   // const newCourse = new Course(course)

//   newCourse.save()
// }

// Course.find({ author: "Mosh", name: "ExpressJS" })
//   .then(console.log)
//   .catch(console.log)

// Course.find({
//   author: "Mosh",
//   // price: { $in: [10, 20] }
//   price: { $gt: 10, $lte: 20 }
// })
//   .select("name author price")

//   // .select({ name: 1, author: 1, price: 1 })
//   // .select("name author price -_id")
//   // .limit(3)
//   .then(console.log)
//   .catch(console.log)

// Course.find()
//   // .and([{ author: "Mosh" }, { price: 15 }])
//   .or([{ author: "Mosh" }, { price: 15 }])
//   .select("name author price")
//   .then(console.log)
//   .catch(console.log)

// Course.find({ name: /^node/i }) // in-sensitive
//   .select("name author price")
//   .then(console.log)
//   .catch(console.log)

// Course.find({ name: /js$/i }) // in-sensitive
//   .select("name author price")
//   .then(console.log)
//   .catch(console.log)

// Course.find({ name: /.*js.*/i }) // in-sensitive
//   .select("name author price")
//   .then(console.log)
//   .catch(console.log)

// Course.find({
//   tags: "backend",
//   isPublished: true
// })
//   .select("name author tags")
//   .sort({ name: "asc" })
//   .then(console.log)
//   .catch(console.log)

// Course.find({
//   tags: { $in: ["frontend", "backend"] },
//   isPublished: true
// })
//   .select("name author price")
//   .sort({ price: -1 })
//   .then(console.log)
//   .catch(console.log)

// Course.find({
//   price: { $lte: 15 },
//   isPublished: true,
//   name: /.*by.*/i
// })
//   .select("name author price")
//   .sort({ price: -1 })
//   .then(console.log)

// UPDATE document
Course.findById("5ee3842357a42e4bc0923418")
  .then(course => {
    if (!course) return Promise.reject({
      msg: "Course not found"
    })

    course.name = "Angular 2"
    return course.save()
  })
  .then(course => {
    console.log("==========")
    console.log(course)
    console.log("Save thanh cong: ", course.name)
  })
  .catch(console.log)


