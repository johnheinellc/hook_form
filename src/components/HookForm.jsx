import React, {useState} from "react";


const HookForm = ()=> {

    let [firstName, setfirstName] = useState ("")
    let [lastName, setlastName] = useState ("")
    let [email, setemail] = useState ("")
    let [password, setpassword] = useState ("")
    let [confirmPassword, setconfirmPassword] = useState ("")


    return (
        <>
        <form>
            <div className="form-group">
                <label htmlFor="">First Name:</label>
                <input type="text" name="" id="" className="form-control" onChange={ (e) => setfirstName(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlFor="">Last Name:</label>
                <input type="text" name="" id="" className="form-control" onChange={ (e) => setlastName(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlFor="">Email:</label>
                <input type="text" name="" id="" className="form-control" onChange={ (e) => setemail(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlFor="">Password:</label>
                <input type="password" name="" id="" className="form-control" onChange={ (e) => setpassword(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlFor="">Confirm Password:</label>
                <input type="password" name="" id="" className="form-control" onChange={ (e) => setconfirmPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Register" className="btn btn-success" />
        </form>
        <p>Your Form Data, {firstName} {lastName}</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirmed Password: {confirmPassword}</p>
        </>
    )
}

export default HookForm;

//  onChange={ (e) => setFirstName(e.target.value)}