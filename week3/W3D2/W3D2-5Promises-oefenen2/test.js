const getRandomSucceedingOrFailingPromise = id => {
    // This randomly resolves to true or false
   let promiseShouldSucceed = () => {Math.random() >= 0.5};
    // This gets some semi-random amound of seconds under the 5seconds:
    let randomMillisecond = () => {Math.round(Math.random)*5000;

    }}

    console.log(getRandomSucceedingOrFailingPromise);