// mongo db logical queries : $not, $nor

// Explicit $or
// db.test.find({
//     $or: [
//         { 'skills.name': "JAVASCRIPT" },
//         { 'skills.name' : 'PYTHON' }
//     ]
// }).project({
//     skills: 1
// }).sort({
//     age: 1
// })


// db.test.find({ 'skills.name' : { $in : ['JAVASCRIPT', "PYTHON" ]}}).project({
//     skills: 1
// }).sort({
//     age: 1
// })


// logical query : $not 
// db.test.find({ age: { $not : { $eq : 18 }} }).project({
//     age: 1
// }).sort({ age: 1 })


// logical query : $nor
db.test.find({ $nor : [
    { age: 18},
    { gender: "Female"}
 ]}).project({ age: 1, gender: 1}).sort({age: 1})
 
 
 