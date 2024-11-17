db.test.find({
    skills: { $elemMatch: {
        name: "JAVASCRIPT",
        level: "Intermidiate"
    }}
}).project({skills: 1})
