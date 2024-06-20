import os

topics = [
    "Design YouTube Netflix Prime Video",
    "Design Twitter",
    "Design WhatsApp Telegram Snapchat",
    "Design Tinder",
    "Design Uber",
    "Design Fandango Ticketmaster Livenation",
    "IOT System Design",
    "Design Shopify",
    "Design URL Shortener TinyURL",
    "Design Parking Garage",
    "Design Amazon.com Flipcart",
    "Design Gen AI Systems",
    "reusable",
    "basics"
]

for topic in topics:
    os.mkdir(topic.replace(' ', '_').lower())
    with open(f"{topic.replace(' ', '_').lower()}/notes.txt", "w") as f:
        f.write(f"# {topic}\n\n")