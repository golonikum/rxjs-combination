import { of, concat } from 'rxjs';

concat(
  of(1, 2, 3).pipe,
  // subscribed after first completes 
  of(4, 5, 6), 
  // subscribed after second completes
  of(7, 8, 9)
)
// log: 1, 2, 3, 4, 5, 6, 7, 8, 9
.subscribe(console.log);