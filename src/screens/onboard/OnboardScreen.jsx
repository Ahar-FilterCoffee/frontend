// src/App.jsx
import { Button, Select, Spacer, SelectItem } from '@nextui-org/react';
import { onboardImgUrl } from '../../utils/constants';
import { useNavigate } from 'react-router';


function OnboardScreen() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-primary-100 p-5 flex">
            <div className="flex-1 hidden items-center  md:flex">
                <img
                    alt="Starvation"
                    src={onboardImgUrl}
                    className="h-full max-h-96   w-full object-cover rounded-lg"
                />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="font-semibold text-xl sm:text-2xl text-primary-200 cursor-pointer">Ahar</h1>
                <div className="flex my-10 gap-10 text-center">
                    <p>
                        Total food waste reduced: <br />
                        <b>5000kg</b>
                    </p>
                    <p>
                        Total Mouths fed:<br />
                        <b>1000</b>
                    </p>
                </div>
                <div className="w-3/4 mb-10">
                    <Select label="Select Language" className="w-full " variant='faded'>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Tamil</SelectItem>
                        <SelectItem value="spanish">Hindi</SelectItem>
                        <SelectItem value="spanish">Kannada</SelectItem>
                        <SelectItem value="spanish">Telugu</SelectItem>
                    </Select>
                </div>
                <div className='w-3/4 font-semibold'>
                    <Spacer y={2} />
                    <Button onClick={()=>navigate('/signup')}  className="w-full bg-primary-200 text-white font-semibold">SignUp</Button>
                    <Spacer y={2} />
                    <Button onClick={()=>navigate('/signup')} className="w-full border-primary-200 border-2 text-primary-200 font-semibold bg-transparent">Login</Button>
                </div>
            </div>
        </div>
    );
}

export default OnboardScreen;
