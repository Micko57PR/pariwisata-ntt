export default function Pagination({
    changePageNo,
    data,
    dataPerPage,
    currentPage
  }) {
    let numbers = [];
    for (let i = 1; i <= Math.ceil(data/dataPerPage) ;i++){
      numbers.push(i);
    }
    return <div>
    {numbers && numbers.map((no) =>{
      return <button key={no}
      // Adding active and normal state
      className={no === currentPage?"active mr-2 btn btn-danger shadow-0":"normal btn btn-light"}
      onClick={() =>{
        changePageNo(no);
      }}
      >{no}</button>
    })}
  </div>;
  }