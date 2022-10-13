import React,{useState, useEffect} from 'react';
import List from "../components/List"
import { useRouter } from "next/router"
import axios from "axios"

function Forms() {
  // const {register, handleSubmit, } =  useForm();

  // const onSubmit =(data) => {
  //   console.log(data)
  

  const [data, setData] = useState({
    name: "",
    type: "",
    amount: "",
  });
  const [error, setError] = useState("")
  const [transactions, setTransactions] = useState([])
  
  const getTransactions = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/transactions`)
    const data = res.data.transactions

    setTransactions(data)
  }
  
  useEffect(() => {
    getTransactions()
  }, [])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(data)

    try {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/transactions`,
                data
        );


        await getTransactions()

        // router.push("/transact")
    } catch (error) {
        setError(error.message);
    }

  };

  return (
    <div className='form max-w-sm mx-auto w-96'>
      <h1 className='font-bold pb-4 text-xl'>Transactions</h1>
      {error && (
          <h3 className="pb-6 text-left text-md text-gray-800">{error}</h3>
        )}
        <form id='form' onSubmit={handleSubmit}    /*handleSubmit(onSubmit)*/>
          <div className='grid gap-4'>
            <div className='input-group'>
              <input type="text" /*{...register('name')} */ name='name' onChange={handleChange} placeholder="Name of Activity" className="form-input" />
            </div >
            <select className='form-input' name='type' onChange={handleChange} >
              <option value="" defaultValue>-------Select Option--------</option>
              <option value="Investment" defaultValue>Income</option>
              <option value="Expense" defaultValue>Expenses</option>
            </select>
            <div className='input-group'>
              <input type='number' name='amount' onChange={handleChange} placeholder="Amount" className="form-input" />
            </div >
            <div className='submit-btn'>
              <button className='border py-2 text-white bg-indigo-500 w-full'>Submit Transaction</button>
            </div>
          </div>

        </form>
        <List transactions={transactions} />
    </div>
  )
}

export default Forms