// HomeDeliveryPartner.tsx

import React from 'react';

const HomeDeliveryPartner = () => {
    const jobs = [
        { id: 1, name: 'Organization 1', quantity: '100kg', status: 'delivered' },
        { id: 2, name: 'Organization 2', quantity: '150kg', status: 'delivering' },
        // Add more jobs as needed
    ];

    return (
        <div className="min-h-screen bg-background-100 p-5">
            <div className="">
                <h1 className="text-3xl font-bold text-primary-200 mb-5 text-center">Ahar</h1>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-5">
                    <h2 className="text-2xl font-semibold text-primary-200 mb-4 text-center">JOBS</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {jobs.map(job => (
                            <div key={job.id} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex-shrink-0">
                                    <img
                                        src="/logo1.jpg"
                                        alt="Organization"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-textSecondary-100">Name: {job.name}</p>
                                    <p className="text-lg text-textSecondary-200">Quantity: {job.quantity}</p>
                                    <p className="text-lg text-textSecondary-300">Status: {job.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDeliveryPartner;
