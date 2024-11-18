db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000066")},
    { $pullAll: { friends: ["Fahim Ahammed Firoz", "Nahid Hasan Bulbul"]} }
)
