import React, { useEffect, useState } from 'react';
import { onboardImgUrl } from '../../utils/constants';
import { Select, SelectItem, Input, Button, RadioGroup, Radio, user } from '@nextui-org/react';
import { useNavigate } from 'react-router';
import cloudinaryUpload from '../../utils/cloudinary';
import { setOrgName, setUserId } from '../../utils/handleCookie';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUpScreen = () => {
    const navigate = useNavigate();
    const [selectedOrganization, setSelectedOrganization] = useState('');
    const [newOrganization, setNewOrganization] = useState('');
    const [isNewOrganization, setIsNewOrganization] = useState(true);
    const [imgFile, setImgFile] = useState(null)
    const [location, setLocation] = useState('');
    const [userType, setUserType] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [organizationImage, setOrganizationImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // const handleIsNewOrganization = () => {
    //     if (selectedOrganization === "new_organization") {
    //         setIsNewOrganization(true);
    //     } else {
    //         setIsNewOrganization(false);
    //     }
    // };

    // useEffect(() => {
    //     handleIsNewOrganization();
    // }, [selectedOrganization]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setImgFile(file)
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setOrganizationImage(imageUrl);
        }
    };

    const handleSubmit = async () => {
        
        // Add your sign-up logic here (e.g., API call)
        const organizationImageUrl = await cloudinaryUpload(imgFile);
        // Navigate to the appropriate home page based on user type
        const payload = {
            username:userName,
            password:password,
            orgName: newOrganization,
            pic: organizationImageUrl,
            location: location,
            userType: userType
        }
        try {
            setIsLoading(true)
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_SIGNUP}`, payload);
            //console.log('Signup successful:', response.data);
            setIsLoading(true)
            if (response.data.message == "success") {
                // Navigate to the appropriate home page based on user type
                setUserName(userName)
                setOrgName(newOrganization),
                setOrganizationImage(organizationImageUrl)
                setLocation(location)
                setUserType(userType)
                setUserId(response.data.id);
                toast.success("Successfully created account")
                if (userType === 'Producers') {
                    navigate('/producer');
                    location.reload()
                } else if (userType === 'Consumers') {
                    navigate('/consumer');
                    location.reload()
                } else {
                    navigate('/')
                    location.reload()
                }
            }
        } catch (error) {
            toast.error("Error creating account")
            console.error('Error during signup:', error);
        }
        

    };

    return (
        <div className="h-screen bg-primary-100 p-5 flex">
            <div className="flex-1 hidden md:block">
                <img
                    alt="Starvation"
                    src={onboardImgUrl}
                    className="h-full w-full object-cover rounded-lg"
                />
            </div>
            <div className='flex-1 flex flex-col items-center justify-center overflow-y-auto'>
                <h1 className="font-semibold text-xl sm:text-2xl text-primary-200 cursor-pointer">Ahar</h1>
                <div className='w-3/4 my-10'>
                    {/* <Select value={selectedOrganization} onSelectionChange={(e) => setSelectedOrganization(e.anchorKey)} label="Your Organization" size='sm' variant='faded' className='my-2'>
                        <SelectItem>A</SelectItem>
                        <SelectItem>BAC</SelectItem>
                        <SelectItem>XYZ</SelectItem>
                        <SelectItem key="new_organization">New Organization</SelectItem>
                    </Select> */}
                    <div className='my-5'>
                        <Input value={newOrganization} onValueChange={setNewOrganization} label="Organization Name" size='sm' variant='faded' className='my-3' />
                        <Button as="label" htmlFor="uploadImage" variant='faded' className='border-2 border-primary-200 text-primary-200 bg-transparent'>
                            Upload Organization Profile Picture
                        </Button>
                        <input
                            id="uploadImage"
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleFileUpload}
                        />
                        {organizationImage && (
                            <img src={organizationImage} alt="Organization" style={{ height: '48px', marginTop: '10px' }} />
                        )}
                        <Input value={location} onValueChange={setLocation} label="Location" size='sm' variant='faded' className='my-3' />
                    </div>

                    <RadioGroup
                        label="Who are you?"
                        value={userType}
                        onValueChange={setUserType}
                        className='my-2'
                    >
                        <Radio value="Producers">Food Producers</Radio>
                        <Radio value="Consumers">Food Consumers</Radio>
                        <Radio value="Delivery Partner">Delivery Partner</Radio>
                    </RadioGroup>
                    <Input value={userName} onValueChange={setUserName} label="Username" size='sm' variant='faded' className='my-3' />
                    <Input value={password} onValueChange={setPassword} label="Password" type='password' size='sm' variant='faded' className='my-3' />
                    <Button isLoading={isLoading} onClick={handleSubmit} className='w-full bg-primary-200 text-white font-semibold mt-10'>Create Account</Button>
                    <p onClick={() => navigate('/login')} className='cursor-pointer text-center mt-5 text-sm'>Already have an account? <span className='font-semibold text-primary-200'>Login</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignUpScreen;
