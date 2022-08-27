import React, { useState } from 'react'
import axios from 'axios'

function multiplefields() {

        const [values, setvalues] = useState({
            name:"",
            username: "amanpareek",
            poster: [],
            email: "",
            another:[]
        });     

        const handlesubmit = (e) => {
            const name = e.target.name;
            const value = e.target.value;

            if (e.target.type === 'file') {
                setvalues({ ...values, [name]: e.target.files[0] });
                
                console.log(values)
            } else {
                setvalues({ ...values, [name]: value });
            } 
        }

        const submitdata = (e) => {
            e.preventDefault();
            
            // Handle File Data from the state Before Sending
            const form = document.getElementById("myform");
            const data = new FormData(form);
            

            //const { name, username, youtube } = values;    
            const options = {method: 'POST', url: 'http://localhost:7000/single', data: data};

            axios.request(options).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
            }

    return (
        <>

            <div>
                <form method='post' onSubmit={submitdata} encType="multipart/form-data" id='myform' >
                    <div className='ffg'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" name='name' value={values.name} onChange={handlesubmit}/>
                    </div>
                     <input type='file' name='poster' defaultValue={values.poster} onChange={ handlesubmit }  accept="image/*" multiple />
                    <input type='file' name='another' defaultValue={values.another} onChange={ handlesubmit }  accept="image/*" multiple />

                    <div className='ffg'>
                        <label htmlFor='username'>Username</label>
                        <input type="text" name='username' value={values.username} onChange={handlesubmit} />
                    </div>
                    <div className='ffg'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" name='email' value={values.email} onChange={handlesubmit} />
                    </div>                
                    
                    <div className='ffg'>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
  )
}

export default multiplefields;
