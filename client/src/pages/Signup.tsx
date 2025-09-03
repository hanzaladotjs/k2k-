import { Link, useNavigate } from "react-router-dom"
import { useSignUpStore } from "../zustand/userStore"
import BACKEND_URI from "../utils/backend"

export default function Signup() {

    const { signUpDetails, setSignUpDetails } = useSignUpStore()
    const navigate = useNavigate()

    const okaySetSignup = (e: any) => {
        const { name, value } = e.target;
        setSignUpDetails({ [name]: value })
    }

    const SignUpFetch = async () => {
       
        const signedUp = await fetch(`${BACKEND_URI}/users/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signUpDetails)
        })
     

        const response = await signedUp.json();
        const token = await response.token
        if (token) {
            localStorage.setItem('token', token);
            navigate("/")
        }
    }
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="flex flex-col space-y-4 font-mono w-80 md:w-110">
                <h1 className="text-3xl text-orange-500 font-bold mb-10">
                    {" "}
                    Yo! What's up?{" "}
                </h1>

                <input
                    name="name"
                    value={signUpDetails.name}
                    onChange={okaySetSignup}
                    type="text"
                    placeholder="Name"
                    className="p-3 border  border-black rounded placeholder-gray-400 text-black outline-none hover:border-2"
                />

                <input
                    name="username"
                    value={signUpDetails.username}
                    onChange={okaySetSignup}
                    type="text"
                    placeholder="Username"
                    className="p-3 border  border-black rounded placeholder-gray-400 text-black outline-none hover:border-2"
                />
                <input
                    name="email"
                    value={signUpDetails.email}
                    onChange={okaySetSignup}
                    type="text"
                    placeholder="Email address"
                    className="p-3 border rounded  border-black placeholder-gray-400 text-black outline-none hover:border-2"
                />

                <input
                    name="password"
                    value={signUpDetails.password}

                    type="text" onChange={okaySetSignup}
                    placeholder="Password"
                    className="p-3 border  border-black placeholder-gray-400 text-black rounded outline-none hover:border-2"
                />
                <button type="submit" onClick={SignUpFetch} className="p-3 text-white rounded-lg bg-orange-400 hover:bg-orange-500">
                    {" "}
                    Continue{" "}
                </button>

                <div className="text-md flex-wrap text-gray-400 px-10">
                    {" "}
                    Already an user?{" "}
                    <Link to={"/login"}> <span className=" font-semibold hover:underline">Login right now. </span></Link>{" "}
                </div>


            </div>
        </div>
    )
}