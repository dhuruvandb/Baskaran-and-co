echo "Installing Frontend"
cd "./Front-end"
npm i &
cd ..
sleep 3


#!/bin/bash

# Start API Gateway
echo "Installing Backend"
cd Back-end
echo "Installing API Gateway Dependencies"
cd ./api-gateway  # Navigate to the API Gateway directory
npm i &  # Start the API Gateway service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Cart Service
echo "Installing Cart Service Dependencies"
cd ./cart-service  # Navigate to the cart-service directory
npm i &  # Start the Cart service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start User Service
echo "Installing User Service Dependencies"
cd ./user-service  # Navigate to the user-service directory
npm i &  # Start the User service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Notification Service
echo "Installing Notification Service Dependencies"
cd ./notification-service  # Navigate to the notification-service directory
npm i &  # Start the Notification service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Order Service
echo "Installing Order Service Dependencies"
cd ./order-service  # Navigate to the order-service directory
npm i &  # Start the Order service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Payment Service
echo "Installing Payment Service Dependencies"
cd ./payment-service  # Navigate to the payment-service directory
npm i &  # Start the Payment service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Product Service
echo "Installing Product Service Dependencies"
cd ./product-service  # Navigate to the product-service directory
npm i &  # Start the Product service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Wishlist Service
echo "Installing Wishlist Service Dependencies"
cd ./wishlist-service  # Navigate to the wishlist-service directory
npm i &  # Start the Wishlist service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Wait for all services to finish
wait
