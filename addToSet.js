db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065")},
    {$addToSet: {
        interests: "Writing"
    }}
    
)
