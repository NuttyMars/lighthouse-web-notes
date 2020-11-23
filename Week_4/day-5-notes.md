## Binary search

= when searching for a value in an ordered array, half the range of the search by determining whether the value we are looking for is smaller or greater than the middle
-> reduces the number of steps needed as the size of the array grows(as opposed to linear search, that grows with the array) 
  => reduces time complexity in worst case scenarios, meaning:

  ! if the input data for an algorithm doubles in size, and the number of steps only increases by one, then the algorithm's running time is logarithmic

## Quadratic search

Steps:
Compare the largest and smallest numbers
If the result is the one you looking for, stop
If the result is larger, go back to step one with the second largest number
If the result is smaller, go back to step one with the second smallest number

! We are making only n comparisons at most. This means that if we double our input, the amount of time will also only just double. The complexity scales linearly in comparison to the input.

## Big O notation O()

>! Big O notation is used to describe how an algorithm's complexity grows relative to its input. It is not used to describe the exact running time of an algorithm.

When we evaluate an algorithm using Big O notation, there are three main things to remember:

1. We only care about arbitrarily large input.
  - What does the run time of binary search look like when we give it an array of one million items?
  - What does linear search look like for the same input?
2. We drop the non-dominant terms.
  - When our algorithm had a running time of (n^2+n)/2, it was the n^2 that was hurting us. So we'll just forget about everything else.
  - If our algorithm had a running time of n^0 + n^1 + n^2 + n^3 + n^4, it would simply be O(n^4)
  - For a running time of 1000n + n^2 we would simply have O(n^2)
3. We drop constant terms.
  - If you graph (n^3)/2 or (n^3)*2, it has pretty much the same curve as n^3, so let's just get rid of the constant 2.
  - when an algorithm grows linearly, it is said to have O(n) ("O n") complexity
    = Multiplying a constant by an algorithm's run time will only affect the growth rate by a constant amount. While adding a constant won't affect the growth rate at all. Adding or multiplying algorithms by constants will shift or rotate the graph of the growth rate, but it will not change its overall shape. A linear algorithm will still grow linearly, a logarithmic algorithm will still grow logarithmically, and an exponential algorithm will still grow exponentially.

    Examples:

    2n + 3 will grow linearly, O(n)
    100n^2 will grow exponentially, O(n^2)
    log n + 1000000000 will grow logarithmically, O(log n)

Types of O notations:
- **Constant O(1)** = An algorithm that will always take the same amount of time to execute, no matter what the input is, runs in constant time.
  - when we target an exact element in an array it doesn't matter how the array changes, the number of operations will always be the same
  - examples:
    - Check if the last element in an array is even
    - Tell me how many pages are in a phone book

- **Linear O(n)** = When the number of operations an algorithm has to perform grows linearly relative to its input, then that algorithm runs in linear time.
  - when we add one extra element to its input, the number of operations will increase by a constant amount
  - examples:
    - Summing every number in an array
    - Count all the even numbers in an array
    - Find someone in a phone book by flipping through every page. Or two pages at a time. Or three pages at a time

- **Quadratic O(n^2)** = If the number of operations that an algorithm has to perform is directly proportional to the square of the size of the input, then that algorithm runs in quadratic time.
  - when we add one more element to the array, the runtime increases by n*number of operations
  - examples:
    - Checking if an array of numbers contains a sum
    - Find all duplicates in an array.
    - Find the first unique number in an array.
    - Manually find duplicate phone numbers written on a sheet of paper.

- **Logarithmic O(log n)** = If the number of operations that an algorithm has to do is directly proportional to the logarithm of the size of the input, then that algorithm runs in logarithmic time.
  - doubling the size of the input only increases the runtime by only one
  - examples:
    - Binary search is a logarithmic algorithm
