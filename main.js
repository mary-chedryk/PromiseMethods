//Task1
function delayedPromise(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  

  const promises = [
    delayedPromise("Проміс 1", 1000),
    delayedPromise("Проміс 2", 2000),
    delayedPromise("Проміс 3", 1500),
    delayedPromise("Проміс 4", 2500),
    delayedPromise("Проміс 5", 500)
  ];
  

  Promise.all(promises)
    .then((results) => {
      console.log("Усі проміси виконані:");
      console.log(results);
    })
    .catch((error) => {
      console.error("Сталася помилка:", error);
    });


    
//Task2
function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000; // 1000-5000 мс
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${value} (затримка ${delay} мс)`);
      }, delay);
    });
  }
  

  const racePromises = [
    randomDelay("Проміс A"),
    randomDelay("Проміс B"),
    randomDelay("Проміс C"),
    randomDelay("Проміс D"),
    randomDelay("Проміс E")
  ];
  

  Promise.race(racePromises)
    .then((result) => {
      console.log("Найшвидший проміс:", result);
    })
    .catch((error) => {
      console.error("Сталася помилка:", error);
    });
  