import { Link, useNavigate } from "react-router-dom"
import { useLoginStore } from "../zustand/userStore"
import BACKEND_URI from "../utils/backend"


export default function Login() {

    const { loginDetails, setLoginDetails } = useLoginStore()
    const navigate = useNavigate()

    const okaySetLogin = (e: any) => {
        const { name, value } = e.target;
        setLoginDetails({ [name]: value })
    }

    const loginFetch = async () => {
        const response = await fetch(`${BACKEND_URI}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginDetails)
        })

        const data = await response.json()
        if (data.token) {
            localStorage.setItem("token", data.token)
            navigate("/")
        }

    }

    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="flex flex-col space-y-4 font-mono w-80 md:w-110">
                <h1 className="text-3xl text-orange-500 font-bold mb-10">
                    {" "}
                    Glad you're back!{" "}
                </h1>
                <input
                    value={loginDetails.identity}
                    onChange={okaySetLogin}
                    placeholder="Email address or username"
                    className="p-3 border rounded  border-black placeholder-gray-400  text-black outline-none hover:border-2"
                />

                <input
                    value={loginDetails.password}
                    onChange={okaySetLogin}
                    type="text"
                    placeholder="Password"
                    className="p-3 border  border-black placeholder-gray-400 text-black rounded outline-none hover:border-2"
                />
                <button type="submit" className="p-3 text-white rounded-lg bg-orange-400 hover:bg-orange-500">
                    {" "}
                    Continue{" "}
                </button>

                <p className="text-md  text-gray-400 px-10">
                    {" "}
                    Don't have an account?{" "}
                    <Link to={"/signup"}><span className=" font-semibold hover:underline">Sign up. </span>{" "}</Link>
                </p>



            </div>
        </div>
    )
}