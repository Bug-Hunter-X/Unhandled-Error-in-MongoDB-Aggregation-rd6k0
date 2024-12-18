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

db.users.aggregate(pipeline).toArray((err, result)=>{ 
  if (err) {
    console.error("Failed to aggregate data:", err); //Proper error handling
    //Consider more sophisticated error handling like throwing a custom error, or using a centralized logging system
  } else {
    console.log(result);
  }
});
```