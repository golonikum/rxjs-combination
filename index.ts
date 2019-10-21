import { of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';

concat(
  of(1, 2, 3).pipe(delay(1000)),
  // subscribed after first completes 
  of(4, 5, 6), 
  // subscribed after second completes
  of(7, 8, 9)
)
// log: 1, 2, 3, 4, 5, 6, 7, 8, 9
.subscribe(console.log);