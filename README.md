# Image Communication Backend

## Overview

This project is designed to serve as a centralized backend for handling image-related requests.  
It demonstrates architectural skills and is also built for personal use — making it easy to connect different projects (frontend or fullstack) to a single backend for image operations.

The main idea is to offload direct communication with the image service and ensure fast, scalable responses to multiple clients.

## Technologies Used

- **NestJS** (for both API and Worker)
- **Redis** (for fast in-memory caching)
- **RabbitMQ** (for asynchronous message brokering)
- **Cloudinary** (for image storage and management)
- **WebSocket** (for real-time communication)
- **Docker + Docker Compose** (for containerized development and deployment)

## Architecture

1. A client sends a request to the **API**.
2. The **API** first checks **Redis**:
   - If the cached result **exists**, it immediately returns it to the client without using RabbitMQ.
   - If there is **no cached result**, the API sends a message to the **RabbitMQ** queue.
3. The **Worker** listens to the RabbitMQ queue:
   - It processes incoming tasks by interacting with **Cloudinary** to retrieve or manipulate images.
4. After receiving a response from Cloudinary, the **Worker** sends the result back to the client through **WebSocket**.

> The Worker maintains a persistent WebSocket connection to the API.  
> This allows it to immediately push the processed image data back to the API once it is ready, ensuring real-time delivery to clients without polling.

This setup ensures:

- Fast responses for cached data.
- Non-blocking request processing for heavier operations.
- Scalability for handling multiple clients and projects concurrently.

## Notes

- Both the API and the Worker run as fully isolated services in separate Docker containers.
- CORS is enabled with a whitelist to restrict allowed origins.
- Docker Compose is used for orchestrating all services.
