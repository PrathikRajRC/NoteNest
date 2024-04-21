import React , {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Passwordinput from '../../components/input/Passwordinput';

const SignUp = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignup = () => {
        e.preventDefault();
    };

    return (
        <>
            <Navbar />
            <div className='flex items-centre justify-center mt-28'>
                <div className='w-96 border rounded bg-white px-7 py-10'>
                    <form onSubmit={handleSignup}>
                        <h4 className='text-2xl mb-7'>SignUp</h4>

                        <input 
                            type="text" 
                            placeholder='Name'
                            className='input-box' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input 
                            type="text" 
                            placeholder='Email'
                            className='input-box' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Passwordinput 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {
                            error && <p className='text-red-500 text-sh pb-1'>{error}</p>
                        }

                        <button type='submit' className='btn-primary'> 
                            Create Account
                        </button>

                        <p className='text-sm text-center mt-4'>
                            Already have an account? {""}
                            <Link to='/login' className='font-medium text-primary underline'>
                                Login
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
