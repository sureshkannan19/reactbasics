**Javascript asynchronous:**

```
1. When we call a timer or use the fetch API, JavaScript delegates these tasks to Web APIs.
2. These tasks are removed from the call stack, allowing the JavaScript engine to continue executing other code synchronously.
3. Once the Web API completes its task (like the timer expiring or a network request finishing), it places the callback function or promise resolution in the appropriate(callback(setTimeout) or microtask(Promises)) queue.
4. The event loop ensures these callbacks are executed in the correct order after the call stack is clear.


Example:
console.log('First')
setTimeout(() => console.log('Checking timeout'), 2000);
console.log('last')
```

```
Promise.all([p1, p2, p3])
  .then(messages => console.log(messages))
  .catch(error => console.log(error));

Promise.allSettled([p1, p2, p3]).then(response => {
  console.log(response);
});

Promise.any([p1, p2, p3]).then(response => {
  console.log(response);
})

Promise.race([p1, p2, p3])
  .then(response => console.log(response))
  .catch(reason => console.log(reason));
```
