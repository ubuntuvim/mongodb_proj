## create db

```
db.createCollection('user', {size: 20, capped: 5, max: 100});