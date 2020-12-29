# Copy all files within ./docker to the project directory
Copy-Item -Path ".\docker\*" -Destination $PSScriptRoot -Recurse

# Start docker-compose to bring up environment
docker-compose -f docker-compose.yml up -d --build