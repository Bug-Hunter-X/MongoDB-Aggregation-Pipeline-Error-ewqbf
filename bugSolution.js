```javascript
//Corrected aggregation pipeline
db.collection('data').aggregate([
  {
    $group: {
      _id: "$field",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10
  }
])
```