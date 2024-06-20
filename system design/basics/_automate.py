import os

topics = [
    "Monolith vs Microservices - What and Why",
    "Microservices on AWS",
    "Load Balancing with ALB Vs. NLB",
    "API and API Gateway - The Must Know for Every Design",
    "Load Balancer vs API",
    "Scaling - Vertical vs Horizontal",
    "VM, Serverless, Container Scaling",
    "Real World Scaling Interview Tips",
    "Synchronous vs Event Driven Architectures",
    "Queues Vs PubSub",
    "Streaming vs Messaging",
    "SQL vs NoSQL and Aurora vs DynamoDB",
    "Websockets for Server to Client Communication e.g. Chatbot",
    "Caching",
    "Redis Memcached Caching Strategies",
    "High Availability",
    "High Availability vs Fault Tolerance",
    "Distributed Computing",
    "Hashing",
    "Challenges of Hashing",
    "Consistent Hashing",
    "Database Sharding",
    "Disaster Recovery (DR) - RPO vs RTO",
    "Different Disaster Recovery (DR) Options",
    "CAP Theorem"
]

for topic in topics:
    with open(f"{topic.replace(' ', '_').lower()}.txt", "w") as f:
        f.write(f"# {topic}\n\n")