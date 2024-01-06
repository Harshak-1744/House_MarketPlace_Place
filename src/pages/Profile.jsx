import {useState, useEffect } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { useNavigate,Link } from "react-router-dom"
import { updateDoc } from 'firebase/firestore'
import {db} from '../firebase.config'


function Profile(){

    const auth = getAuth()
    const {changeDetails, setChangeDetails} = useState(false)
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email  
      
    })

    const {name,email} = formData

    const navigate = useNavigate()

   const onLogout = () => {
    auth.signOut()
    navigate('/')
   }

   const onSubmit = () => {
    console.log(123);
   }
    return <div className='profile'>
        
        <header className="profileHeader">
            <p className="pageHeader">
                My Profile
            </p>
            <button className="logOut" type= 'button' onClick={onLogout}>
                Logout
            </button>
        </header>

        <main>
            <div className="profileDetailsHeader">
                <p className="profileDetailsText">
                    Personal Details
                </p>
                <p className="changePersonalDetails" onClick={() => {
                    changeDetails && onSubmit()
                    setChangeDetails((prevState) => !prevState)
                }}>
                    {changeDetails ? 'done' : 'change'}
                </p>
            </div>
        </main>
        <form>
            <input type="text" id="name" className={!changeDetails ? "profileName" : "profileNameActive"}/>
        </form>
        </div>
}

export default Profile