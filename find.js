db.test.find({
    skills: {
        name: "JAVASCRIPT",
        level: 'Intermidiate',
        isLearning: false
    }
}).project({skills: 1})


