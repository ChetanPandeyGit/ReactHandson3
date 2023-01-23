import React, { useState } from 'react';
import "./Styles.css";

const First = () => {
  const [dataOne, setDataOne] = useState([])
  const [dataCheck, setData] = useState(false)
  const [record, setRecord] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataOne(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecord = { ...dataOne }
    setRecord([...record, newRecord]);
    setDataOne({ Name: "", Department: "", Rating: "" });
    setData(true)
  };
  
  const goBack = () => {
    setData(false);
  }

  return (
    <>
      <div>{dataCheck ? null :
        <form onSubmit={handleSubmit}>
          <br />
          <div ><h1> EMPLOYEE FEEDBACK FORM </h1></div>
          <br /> <br />
          <label> <b>Name  : </b>
            <input type="text" placeholder='Enter your name' name="Name" value={dataOne.name} onChange={handleChange} />
          </label><br /> <br />
          <label><b>Department  : </b>
            <input type="text" placeholder='Enter department' name="Department" value={dataOne.dept} onChange={handleChange} />
          </label><br /> <br />
          <label> <b>Rating  : </b>
            <input type="number" placeholder='Rate here.' name="Rating" value={dataOne.rat} onChange={handleChange} />
          </label><br /> <br /> <br />
          <button ><b>SUBMIT</b></button>
        </form>
      }
      </div>
      {dataCheck ?
        <div>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <div className='result'>
            {
              record.map((item) => {

                return (
                  <div className='data'>
                    <b> Name : </b><p> {item.Name} ||</p>
                    <b>Department :</b><p>{item.Department} || </p>
                    <b>Rating : </b><p>{item.Rating}</p>
                  </div>)
              })
            }
            <br />
          </div>
          {dataCheck ? <input id="submit" onClick={goBack} type="button" value="Go Back " /> : null}
        </div> : null}
    </>
  );
}

export default First
