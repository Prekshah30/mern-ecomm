import React,{useState} from 'react'

const Addproduct = () => {
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');
    const[error,setError]=useState(false);

    const addProduct=async()=>{

      console.warn(!name);
      if(!name || !price|| !category || !company){
        setError(true)
        return false;
      }
        console.log(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result= await fetch('http://localhost:5000/addproduct',{
          method:'post',
          body:JSON.stringify({name,price,category,company,userId}),
          headers:{
            'Content-Type':'application/json'
          }
    });
     result= await result.json();
     console.warn(result);
  }

  return (
    <div className='Register'>
      <input type="text" placeholder="Enter Product Name" className='inputbox' value={name} onChange={(e)=>setName(e.target.value)}/>
      {error && !name && <span >Enter valid name</span>}

      <input type="text" placeholder="Enter Product Price" className='inputbox'  value={price} onChange={(e)=>setPrice(e.target.value)}/>
      {error && !price && <span>Enter valid Price</span>}

      <input type="text" placeholder="Enter Product Category" className='inputbox'  value={category} onChange={(e)=>setCategory(e.target.value)}/>
      {error && !category && <span>Enter valid Category</span>}

      <input type="text" placeholder="Enter Product Company" className='inputbox'  value={company} onChange={(e)=>setCompany(e.target.value)}/>
      {error && !company && <span>Enter valid Company</span>}

      <button className='appbtn' onClick={addProduct}>Add Product</button>
    </div>
  )
  }

export default Addproduct
