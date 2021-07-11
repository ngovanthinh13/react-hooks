  const [joinList, setJoinList] = useState(['Oliver' ,'Harry' ,'George' ,'Noah' ,'Jack' ,'Jacob' ]);
  const addTodo = (item) =>{
    // let name = e.target.value;
    setJoinList([...joinList, item]);
    console.log(joinList)
  };
  const removeTodo = (e) =>{
    let name = e.target.value;
    setJoinList(joinList.filter((e)=>(e !== name)))
  };
