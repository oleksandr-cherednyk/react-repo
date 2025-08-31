function ShopingList({list}) {
  return (
    <ul>
        <h2>List:</h2>
      {list.map((item, index) => (
        <li key={index}>{item}</li> 
      ))}
    </ul>
  );
}

export default ShopingList;