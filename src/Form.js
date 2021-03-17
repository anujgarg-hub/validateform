import React,{useState,useEffect} from 'react';
import './Form.css';
import {useDispatch,useSelector} from 'react-redux';
import shortid from 'shortid';

export default function Form() {

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [zip, setzip] = useState('');
    const [clasfname, setclasfname] = useState('');
    const [claslname, setclaslname] = useState('');
    const [clascity, setclascity] = useState('');
    const [classtate, setclasstate] = useState('');
    const [claszip, setclaszip] = useState('');
    const [claschk, setclaschk] = useState(false);


    const dispatch = useDispatch();

    const  validateFields=(txt)=>{
        if(txt.length==0)
        {
            return false
        }
        else{
            return true
        }
    } 

    var errorclass ='';

   const handleSubmit=()=>{
      
    var err = false;

    if(!validateFields(lname)){
     
      setclaslname(errorclass = 'errorclass')
        err = true
        setclaschk(true)
  
     }else{
      setclaslname(errorclass = 'fixclass')
      setclaschk(false)
     }

    if(!validateFields(fname)){
       
      setclasfname(errorclass = 'errorclass')
        err = true
        setclaschk(true)


    }else{
     
      setclasfname(errorclass = 'fixclass')
      setclaschk(false)

    }

    if(!validateFields(city)){
       
      setclasfname(errorclass = 'errorclass')
        err = true
        setclaschk(true)


    }else{
     
      setclasfname(errorclass = 'fixclass')
      setclaschk(false)

    }

    if(!validateFields(state)){
       
      setclasfname(errorclass = 'errorclass')
        err = true
        setclaschk(true)


    }else{
     
      setclasfname(errorclass = 'fixclass')
      setclaschk(false)

    }

    if(!validateFields(zip)){
       
      setclasfname(errorclass = 'errorclass')
        err = true
        setclaschk(true)


    }else{
     
      setclasfname(errorclass = 'fixclass')
      setclaschk(false)

    }
            var body={
                'id':shortid.generate(),
                'fname':fname,
                'lname':lname,
                'city':city,
                'state':state,
                'zip':zip
            }
            if(!err){
            dispatch({type:'Add_detail',payload:[body.id ,body]})
            console.log('body dispatched',body)
            }

        }    

    return (
        <div className="container">
            <center><h1>Form</h1></center>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      {/* <label for="validationCustom01">First name</label> */}
      <input type="text"  id="validationCustom01" style={{width:'70%'}}  required  className={clasfname}
      onChange={(e)=>setfname(e.target.value)} placeholder="First Name"
      />
      {claschk?(
     <p style={{color:'red'}}>Error</p>
       
    ):<></>}
    </div>
    <div class="col-md-6 mb-3">
      {/* <label for="validationCustom02">Last name</label> */}
      <input type="text" id="validationCustom02" style={{width:'70%'}} required  className={claslname}
      onChange={(e)=>setlname(e.target.value)} placeholder="Last Name"
      />
       {claschk?(
     <p style={{color:'red'}}>Error</p>
       
    ):<></>}
      
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      {/* <label for="validationCustom03">City</label> */}
      <input type="text" style={{width:'70%'}} id="validationCustom03" required
      onChange={(e)=>setcity(e.target.value)} placeholder="City"
      />
     {claschk?(
     <p style={{color:'red'}}>Error</p>
       
    ):<></>}
    </div>
    <div class="col-md-3 mb-3">
      {/* <label for="validationCustom04">State</label> */}
      <input type="text" style={{width:'70%'}} id="validationCustom03" required
            onChange={(e)=>setstate(e.target.value)} placeholder="State"

      />

{claschk?(
     <p style={{color:'red'}}>Error</p>
       
    ):<></>}
    </div>
    <div class="col-md-3 mb-3">
      {/* <label for="validationCustom05">Zip</label> */}
      <input type="text" style={{width:'70%'}} id="validationCustom05" required
            onChange={(e)=>setzip(e.target.value)} placeholder="Zip"

      />
       {claschk?(
     <p style={{color:'red'}}>Error</p>
       
    ):<></>}
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit" onClick={handleSubmit}>Submit form</button>
  
  {/* <div> {renderItem()} </div> */}
  
        </div>
    )
}
