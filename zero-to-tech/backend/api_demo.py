import requests

# resp = requests.get("https://api.ipify.org?format=json")
# resp = requests.get("https://httpbin.org/get")
resp = requests.get("https://jsonplaceholder.typicode.com/posts/1")

print(resp.json())
