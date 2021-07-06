// Without the second parameter
useEffect(() => {
  console.log('I will run after every render');
});

// With the second parameter
useEffect(() => {
  console.log('I will run only when valueA changes');
}, [valueA]);

useEffect(() => {
  console.log('I will run only once');
}, []);
