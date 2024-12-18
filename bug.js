```javascript
const pipeline = [
  {
    $match: { user_id: 'some_user_id' }
  },
  {
    $lookup: {
      from: 'orders',
      localField: '_id',
      foreignField: 'user_id',
      as: 'orders'
    }
  }
];

db.users.aggregate(pipeline).toArray((err, result)=>{//Error Handling is missing
  if (err){
    console.error("Failed to aggregate data:", err);
  } else {
    console.log(result);
  }
});
```