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
                <input type="text" className="form-control" onChange={ (e) => setfirstName(e.target.value)}/>
                {firstName.length < 2 && firstName.length >0 ? <p>Must be at least 2 characters</p> : null}
                </div>
                <div className="form-group">
                <label htmlFor="">Last Name:</label>
                <input type="text" className="form-control" onChange={ (e) => setlastName(e.target.value)}/>
                {lastName.length < 2 && lastName.length >0 ? <p>Must be at least 2 characters</p> : null}
                </div>
                <div className="form-group">
                <label htmlFor="">Email:</label>
                <input type="text" className="form-control" onChange={ (e) => setemail(e.target.value)}/>
                {email.length < 2 && email.length >0 ? <p>Must be at least 2 characters</p> : null}
                </div>
                <div className="form-group">
                <label htmlFor="">Password:</label>
                <input type="password" className="form-control" onChange={ (e) => setpassword(e.target.value)}/>
                {password.length < 8 && password.length >0 ? <p>Must be at least 8 characters</p> : null}
                </div>
                <div className="form-group">
                <label htmlFor="">Confirm Password:</label>
                <input type="password" className="form-control" onChange={ (e) => setconfirmPassword(e.target.value)}/>
                {confirmPassword != password ? <p>Passwords must match</p> : null}
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

