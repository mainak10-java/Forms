import { useState } from 'react';


function Form(){
    const [formData, setData] = useState({firstName : "", lastName : "", email : "", address : "", city : "", state : "",
    country : "" , comments: false, candidates: false, others : false, mode : ""})
  
  
    function changeHandler(e){
      const {name, type, value, checked} = e.target
      setData(prevFormData => {
        return{
          ...prevFormData,
          [name]: type === 'checkbox' ? checked : value
        }
      })
    }

    function submitHandler(e){
        e.preventDefault();
        console.log('Printing form data ....')
        console.log(formData);
    }

      return(
        <div className='flex flex-col justify-center items-center mx-auto'>
          <div className='w-[300px] md:w-[800px] bg-white px-10 py-5 flex flex-col gap-4 rounded-md shadow-lg'>
            
                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold text-[#191D88]'>First Name</h4>
                
                    <input
                        type='text'
                        placeholder='Enter your First Name'
                        name='firstName'
                        id='first-name'
                        onChange={changeHandler}
                        value={formData.firstName}
                        className='py-2 px-2 border-2 rounded-md border-t-[#337CCF]'/>
                </div>
                
                
                <div className='flex flex-col gap-2'>  
                    <h4 className='font-bold text-[#191D88]'>Last Name</h4>
                    
                    <input
                        type='text'
                        placeholder='Enter your last Name'
                        name='lastName'
                        id='last-name'
                        onChange={changeHandler}
                        value={formData.lastName}
                        className='py-2 px-2 border-2 rounded-md border-t-[#337CCF]'/>
                </div>
    
                
                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold text-[#191D88]'>Email</h4>
                                
                    <input
                        type='text'
                        placeholder='Enter your email'
                        name='email'
                        id='email-id'
                        onChange={changeHandler}
                        value={formData.email} 
                        className='py-2 px-2 border-2 rounded-md border-t-[#337CCF]'/>
                </div>

                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold text-[#191D88]'>Street Address</h4>
        
                    <input
                        type='text'
                        placeholder='Flat No./Street Name/Locality'
                        name='address'
                        id='address-'
                        onChange={changeHandler}
                        value={formData.address} 
                        className='py-2 px-2 border-2 rounded-md border-t-[#337CCF]'/>
                </div>
    
                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold text-[#191D88]'>City</h4>
        
                    <input
                        type='text'
                        placeholder='Enter your city'
                        name='city'
                        id='city-'
                        onChange={changeHandler}
                        value={formData.city} 
                        className='py-2 px-2 border-2 rounded-md border-t-[#337CCF]'/>
                </div>
                
                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold text-[#191D88]'>State</h4>

                    <input
                        type='text'
                        placeholder='Enter your state'
                        name='state'
                        id='state-'
                        onChange={changeHandler}
                        value={formData.state} 
                        className='py-2 px-2 border-2 rounded-md border-t-[#337CCF]'/>
                </div>
                
                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold text-[#191D88]'>Country</h4>

                    <select
                    name='country'
                    id='country-id'
                    value={formData.country}
                    onChange={changeHandler}
                    className='py-2 px-2 border-2 rounded-md border-t-[#337CCF]'>
                        <option value='india'>India</option>
                        <option value='england'>England</option>
                        <option value='dubai'>Dubai</option>
                    </select>
                </div>
              
              
             
            <h4 className='font-bold text-[#191D88] mt-5'>By Email</h4>
            <div className='flex flex-col gap-3 justify-center items-baseline'> 
                <div className='flex gap-3'>
                    <div>
                        <input
                            type='checkbox'
                            onChange={changeHandler}
                            name='comments'
                            id='comments'
                            checked={formData.comments}/>
                    </div>
                    <label htmlFor='comments' className='font-bold'>Comments <br/> <span className='text-slate-400 font-normal'>Get notified when someone posts a comment </span></label>
                </div>

                <div className='flex gap-3'>
                    <div>
                        <input
                            type='checkbox'
                            onChange={changeHandler}
                            name='candidates'
                            id='candidates'
                            checked={formData.candidates}/>
                    </div>
                    <label htmlFor='candidates' className='font-bold'>Candidates <br/> <span className='text-slate-400 font-normal'>Get notified when a candidate applies for a job </span></label>
                </div>
                
                <div className='flex gap-3'>
                    <div>
                        <input
                            type='checkbox'
                            onChange={changeHandler}
                            name='others'
                            id='others'
                            checked={formData.others}/>
                    </div>
                    <label htmlFor='others' className='font-bold'>Others <br/> <span className='text-slate-400 font-normal'>Get notified when a candidate accepts or rejects an offer </span></label>
                </div>    
            </div>

            <h4 className='font-bold text-[#191D88] mt-5'>Push Notifications</h4>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                    <input
                    type='radio'
                    onChange={changeHandler}
                    name='mode'
                    id='Everything'
                    value="Everything"
                    checked={formData.mode === 'Everything'}/>

                    <div className='font-bold'> Everything</div>
                </div>

                <div className='flex gap-3'>
                    <input
                    type='radio'
                    onChange={changeHandler}
                    name='mode'
                    id='Email'
                    value="Email"
                    checked={formData.mode === 'Email'}/>

                    <div className='font-bold'>Email</div>
                </div>

                <div className='flex gap-3'>
                    <input
                    type="radio"
                    onChange={changeHandler}
                    name="mode"
                    id="None"
                    value="None"
                    checked={formData.mode === "None"}/>

                    <div className='font-bold'>No Push Notifications</div>
                </div>
            </div>

             <button onClick={submitHandler} className='text-white font-bold bg-blue-400 rounded-md py-2 hover:bg-blue-600
             transition-all duration-300 mt-5 w-[150px]'>Save Responses</button>   
          </div>
        </div>
      );
  
}

export default Form;