import React, { useState } from 'react'
import { axiosShopkeeperInstance } from '../../Instance/Axios';
import { useNavigate } from 'react-router-dom'

function ShopkeeperLogin() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const response = await axiosShopkeeperInstance.post("/login", { username, password });
            if (response.data.loggedIn) {
                const token = response.data.token
                localStorage.setItem("token-shopkeeper-login", token)
                navigate('/shopkeeper-home')
            } else if (response.data.passErr) {
                setError("Please check the password you have entered")
            } else if (response.data.invalidShopkeeper) {
                setError("Please enter a valid username")

            }

            console.log("response", response);

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <section className="min-h-screen flex items-stretch text-white ">
                <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" >
                    <div className="absolute bg-green-500 opacity-60 inset-0 z-0"></div>
                    <div className="w-full px-24 z-10">
                        <h1 className="text-5xl font-bold text-left font-sans tracking-wide">Shopkeeper</h1>
                        <p className="text-3xl my-4">Login </p>
                    </div>

                </div>
                <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" >
                    <div className="absolute lg:hidden z-10 inset-0 bg-green-500 bg-no-repeat bg-cover items-center">
                        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    </div>
                    <div className="w-full py-6 z-20">
                        <h1 className="my-6 text-black text-4xl">

                            Please enter the details

                        </h1>


                        <form onSubmit={handleSubmit} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">

                            <div className="pb-2 pt-4">
                                <input type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                    className="block w-full p-4 text-lg rounded-sm bg-black border-2" />


                            </div>
                            <div className="pb-2 pt-4">
                                <input type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="block w-full p-4 text-lg rounded-sm bg-black border-2" />

                                {error ? <p className='text-orange-600'>{error}</p> : null}
                            </div>

                            <div className="px-4 pb-2 pt-4">
                                <button className="uppercase block w-full p-4 text-lg rounded-full bg-green-400 hover:bg-green-600 focus:outline-none" type='submit'>  {isLoading ? "Loading..." : "Login"}</button>
                            </div>



                        </form>
                    </div>
                </div >
            </section >
        </>
    )
}

export default ShopkeeperLogin