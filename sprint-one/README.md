PERFORMACE TESTING
==================

## Functional Style
This is the **slowest** of the four types of object creation methods.

## Functional-Shared
This takes about 0.66 the time as the Functional Style. This is perhaps because instead of creating new functions for each object we are only adding references to existing functions.

## Prototypal
This seems to take about the same time as Functional-Shared. (In our case it was about 5% slower) This seems to stem from the fact that instead of creating three new references to functions it is only creating one new reference to one object. At the same time, Object.create seems to be a slower than a simple key assignment, and the real benefits of Prototypal over Functional-Shared will probably come into play when the prototype has a very large number of keys.

## Pseudo-Classical
This is the **fastest**. This seems to take about 33% of the time as Functional and almost 50% less time than Functional Shared. * We have no idea why this is happening *.


### Please Note
* All test are extremely un-mathematical. We have used Chrome Timeline to test the amount of time the code takes to run. (we accounted by removing the time taken by layout and painting.)

* That said, all tests are on Stacks. We created 10,000 stacks with each method. Called size() on each of them. pushed two objects on it and called size again.

* We look forward to learning more about profiling to do better tests in the future.