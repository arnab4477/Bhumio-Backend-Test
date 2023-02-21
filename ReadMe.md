## Created the api endpoint /students for retrieving and searching student data

If no search query is provided then all students will be returned. There are 5 total query parameters that can be provided with the url. Each query can be provided by itself or be combined with the others. In the case of combined queries, the student that matches all the queries will be returned. If there are no matchinf queries, then an error will be returned with the 404 http status. Here are the examples of each of the 5 queries

### The queries ->

- Name: `/students?name={name-goes-here}`. This query returns all the students with the matching name. This query does not look for exat matching, instead it checks if the query is part of any student's name. For example, the query -> `/students?name=rakesh` will return students like Rakesh Patil, Rakesh Goenka (and all the other Rakesh if there are any)

- City: `/students?city={city-goes-here}`. This query returns all the students whose cities match with the query. This query looks for exact matching
- State: `/students?state={state-goes-here}`. This query returns all the students whose states match with the query. This query looks for exact matching
- Major: `/students?major={major-goes-here}`. This query returns all the students whose major match with the query. This query looks for exact matching
- Zip: `/students?zip={zip-goes-here}`. This query returns all the students whose zips match with the query. This query looks for exact matching

### Combining the Queries

Combine the queries like this -> `/students?query1=value&query2=value... and so on`

- `/students?major=bio&state=pb`
- `/students?name=rakesh&state=pb&major=maths`
