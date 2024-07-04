import React from 'react';
import { Card } from "@nextui-org/react";

const DeliveryTracking = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-100 dark:bg-background-300">
      <div className="flex flex-col lg:flex-row justify-around w-full lg:w-2/3 gap-8 p-4">
        <Card className="w-full lg:w-1/2 bg-white dark:bg-background-200 p-6 shadow-md">
          <p className="text-lg font-sora text-primary-300 dark:text-primary-100">
            Waiting for delivery Agent
          </p>
          <div className="border rounded-lg p-4 mt-4">
            <p className="text-xl font-sora text-textSecondary-200 dark:text-textSecondary-100">
              Ahar
            </p>
            <div className="border mt-2 h-48 flex items-center justify-center">
              <p className="text-2xl font-sora text-textSecondary-300 dark:text-textSecondary-200">
                MAP
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <p className="text-lg font-sora text-textSecondary-300 dark:text-textSecondary-200">
                Finding delivery partner (loading screen)
              </p>
            </div>
          </div>
        </Card>
        <Card className="w-full lg:w-1/2 bg-white dark:bg-background-200 p-6 shadow-md">
          <p className="text-lg font-sora text-primary-300 dark:text-primary-100">
            Live tracking of delivery agent
          </p>
          <div className="border rounded-lg p-4 mt-4">
            <p className="text-xl font-sora text-textSecondary-200 dark:text-textSecondary-100">
              Ahar
            </p>
            <div className="border mt-2 h-48 flex items-center justify-center">
              <p className="text-2xl font-sora text-textSecondary-300 dark:text-textSecondary-200">
                MAP
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <p className="text-lg font-sora text-textSecondary-300 dark:text-textSecondary-200">
                Estimated time:
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DeliveryTracking;
