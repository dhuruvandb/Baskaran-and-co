#!/bin/bash

# Start API Gateway
echo "Starting API Gateway..."
cd ./api-gateway  # Navigate to the API Gateway directory
npm start &  # Start the API Gateway service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Cart Service
echo "Starting Cart Service..."
cd ./cart-service  # Navigate to the cart-service directory
npm start &  # Start the Cart service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start User Service
echo "Starting User Service..."
cd ./user-service  # Navigate to the user-service directory
npm start &  # Start the User service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Notification Service
echo "Starting Notification Service..."
cd ./notification-service  # Navigate to the notification-service directory
npm start &  # Start the Notification service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Order Service
echo "Starting Order Service..."
cd ./order-service  # Navigate to the order-service directory
npm start &  # Start the Order service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Payment Service
echo "Starting Payment Service..."
cd ./payment-service  # Navigate to the payment-service directory
npm start &  # Start the Payment service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Product Service
echo "Starting Product Service..."
cd ./product-service  # Navigate to the product-service directory
npm start &  # Start the Product service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Start Wishlist Service
echo "Starting Wishlist Service..."
cd ./wishlist-service  # Navigate to the wishlist-service directory
npm start &  # Start the Wishlist service in the background
cd ..  # Navigate back to the starting directory
sleep 3  # Wait for 3 seconds before starting the next service

# Wait for all services to finish
wait
