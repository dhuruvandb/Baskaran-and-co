echo "Frontend starting"
cd "./Front-end"
npm start &
cd ..
echo "Backend Starting"
cd "./Back-end"
sh start-services.sh