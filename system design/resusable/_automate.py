topics = [
    "AWS Well Architected Framework",
    "Important - Three-Tier Architecture",
    "Three-Tier Architecture on Serverless and Kubernetes",
    "Content Based Messaging System",
    "Store and Retrieve Images",
    "High Priority Queuing Messaging System",
    "Data Analytics & Big Data Design Patterns",
    "Performance and Cost Optimization",
    "Security - Authentication (Log In) & Authorization",
    "Security - Encryption at Rest Client Server Side Encryption",
    "Security - Encryption In Transit with SSL TLS MTLS",
    "TLS Vs MTLS",
    "IDS Vs IPS Vs Security Group NACLs",
    "Optional - Security using IAM User, Role, Group",
    "Twelve Factor App",
    "Quick Note about 12 Factor App Interview QA"
]

for topic in topics:
    with open(f"{topic.replace(' ', '_').lower()}.txt", "w") as f:
        f.write(f"# {topic}\n\n")