import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} =useContext(StoreContext)
  return <>
    <div className='pt-20 '>
    <form >
    <div className=' flex justify-between items-center mb-14'>
      <div className='flex flex-col gap-3'>
        <p className=' mb-16 text-4xl font-bold'>Delivery Information</p>
        <div className='flex gap-3'>
        <input className='border-2 border-black p-1 rounded-lg' type='text' placeholder='First name'/>
        <input className='border-2 border-black p-1 rounded-lg' type='text' placeholder='Last name'/>
        </div>
        <input className='border-2 border-black p-1 rounded-lg' type='email' placeholder='Email address'/>
        <input className='border-2 border-black p-1 rounded-lg' type='text' placeholder='Street'/>
        <div className='flex gap-3'>
          <input className='border-2 border-black p-1 rounded-lg' type='text' placeholder='City'/>
          <input className='border-2 border-black p-1 rounded-lg' type='text' placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border-2 border-black p-1 rounded-lg' type='text' placeholder='Pin code'/>
          <input className='border-2 border-black p-1 rounded-lg' type='text' placeholder='Country'/>
        </div>
        <input className='border-2 border-black p-1 rounded-lg' text='number' placeholder='Phone'/>
      </div>



      <div className=' flex flex-col gap-5 w-96' >
          <h2 className='text-2xl font-semibold py-3'>Cart Totals</h2>
          <div>
            <div className='flex justify-between my-2 '>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='flex justify-between my-2'>
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount()===0?0:20}</p>
            </div>
            <hr/>
            <div className='flex justify-between my-2'>
              <b>Total</b>
              <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div>
          </div>
            <button className='border bg-blue-600 p-2 text-white rounded-3xl mt-3 px-3 mb-7' onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
    </div>
    </form>
    </div>
    </>
}

export default PlaceOrder
