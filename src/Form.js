import React,{useState,useEffect} from 'react';
import './Form.css';
import {useDispatch,useSelector} from 'react-redux';
import shortid from 'shortid';
import Badge from '@material-ui/core/Badge';
import AddAlertIcon from '@material-ui/icons/AddAlert';

export default function Form() {

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [zip, setzip] = useState('');
    /// for classes..
    const [clasfname, setclasfname] = useState('');
    const [claslname, setclaslname] = useState('');
    const [clascity, setclascity] = useState('');
    const [classtate, setclasstate] = useState('');
    const [claszip, setclaszip] = useState('');
    /// for errors..
    const [fnameErr, setfnameErr] = useState('');
    const [lnameErr,setlnameErr] = useState('');
    const [cityErr, setcityErr] = useState('');
    const [stateErr, setstateErr] = useState('');
    const [zipErr, setzipErr] = useState('');


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


    /// fetch data from redux...

    var cart = useSelector(state=>state.cart);
    var length = Object.keys(cart).length ;
    // console.log('from redux',cart);
    var cartItems  = Object.values(cart);

    // var count = useSelector(state=>state.count)
    // var countlength  = Object.values(count).length
    


    var errorclass ='';

   const handleSubmit=()=>{
      
    var err = false;
   

    if(!validateFields(fname)){
       
      setclasfname(errorclass = 'errorclass')
        err = true
        setfnameErr(true)


    }else{
     
      setclasfname(errorclass = 'fixclass')
      setfnameErr(false)

    }

    if(!validateFields(lname)){
     
      setclaslname(errorclass = 'errorclass')
        err = true
        setlnameErr(true)
  
     }else{
      setclaslname(errorclass = 'fixclass')
      setlnameErr(false)
     }

    if(!validateFields(city)){
       
      setclascity(errorclass = 'errorclass')
        err = true
        setcityErr(true)


    }else{
     
      setclascity(errorclass = 'fixclass')
      setcityErr(false)

    }

    if(!validateFields(state)){
       
      setclasstate(errorclass = 'errorclass')
        err = true
        setstateErr(true)


    }else{
     
      setclasstate(errorclass = 'fixclass')
      setstateErr(false)

    }

    if(!validateFields(zip)){
       
      setclaszip(errorclass = 'errorclass')
        err = true
        setzipErr(true)


    }else{
     
      setclaszip(errorclass = 'fixclass')
      setzipErr(false)

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
            // console.log('conunt length',countlength)
        }    

    return (
        <div className="container">
          <div style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
            <h1 style={{marginLeft:'500px'}}>Form</h1> 
            <Badge badgeContent={length} color="primary">
               <AddAlertIcon/>
           </Badge> 
         </div> 
  <div class="form-row">
    <div class="col-md-6 mb-3">
      {/* <label for="validationCustom01">First name</label> */}
      <input type="text"  id="validationCustom01" style={{width:'70%'}}  required  className={clasfname}
      onChange={(e)=>setfname(e.target.value)} placeholder="First Name"
      />
      {fnameErr?(
     <p style={{color:'red'}}>Error</p>
       
    ):<></>}
    </div>
    <div class="col-md-6 mb-3">
      {/* <label for="validationCustom02">Last name</label> */}
      <input type="text" id="validationCustom02" style={{width:'70%'}} required  className={claslname}
      onChange={(e)=>setlname(e.target.value)} placeholder="Last Name"
      />
       {lnameErr?(
     <p style={{color:'red'}}>Error</p>
       
    ):<></>}
      
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      {/* <label for="validationCustom03">City</label> */}
      <input type="text" style={{width:'70%'}} id="validationCustom03" required className={clascity}
      onChange={(e)=>setcity(e.target.value)} placeholder="City"
      />
     {cityErr?(
     <p style={{color:'red'}}>Error</p>
       
    ):<></>}
    </div>
    <div class="col-md-3 mb-3">
      {/* <label for="validationCustom04">State</label> */}
      <input type="text" style={{width:'70%'}} id="validationCustom03" required className={classtate}
            onChange={(e)=>setstate(e.target.value)} placeholder="State"

      />

{stateErr?(
     <p style={{color:'red'}}>Error</p>
       
    ):<></>}
    </div>
    <div class="col-md-3 mb-3">
      {/* <label for="validationCustom05">Zip</label> */}
      <input type="text" style={{width:'70%'}} id="validationCustom05" required className={claszip}
            onChange={(e)=>setzip(e.target.value)} placeholder="Zip"

      />
       {zipErr?(
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
