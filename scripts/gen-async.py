#!/usr/bin/env python3
"""Generate a single image using FAL queue API (async, then poll)."""
import requests
import time
import os
import sys
import json

# Read FAL key
env_path = os.path.expanduser('/Users/nava/.hermes/.env')
fal_key = None
with open(env_path) as f:
    for line in f:
        if line.startswith('FAL_KEY='):
            fal_key = line.strip().split('=', 1)[1]
            break

if not fal_key:
    print("FAL_KEY not found")
    sys.exit(1)

filename = sys.argv[1]
prompt = sys.argv[2]
output_path = os.path.join('/Users/nava/Documents/GitHub/blush/public', filename)

headers = {
    'Authorization': f'Key {fal_key}',
    'Content-Type': 'application/json',
}

# Submit async
print(f"Submitting {filename}...")
resp = requests.post(
    'https://api.fal.ai/fal-ai/flux-dev',
    headers=headers,
    json={'prompt': prompt, 'image_size': 'square_hd', 'num_images': 1},
)
if resp.status_code != 200:
    print(f"Submit failed: {resp.status_code} {resp.text[:300]}")
    sys.exit(1)

data = resp.json()
request_id = data['request_id']
status_url = data['status_url']
response_url = data['response_url']

# Poll until done
for attempt in range(60):
    time.sleep(3)
    status_resp = requests.get(status_url, headers=headers)
    if status_resp.status_code != 200:
        print(f"Status poll failed: {status_resp.status_code}")
        continue
    status_data = status_resp.json()
    status = status_data.get('status')
    print(f"  Poll {attempt+1}: {status}")
    if status == 'COMPLETED':
        # Fetch result
        result_resp = requests.get(response_url, headers=headers)
        result = result_resp.json()
        images = result.get('images', [])
        if images:
            url = images[0].get('url', '')
            img_resp = requests.get(url)
            with open(output_path, 'wb') as f:
                f.write(img_resp.content)
            size = os.path.getsize(output_path)
            print(f"✅ {filename} saved ({size/1024:.0f} KB)")
        else:
            print(f"No images: {json.dumps(result, indent=2)[:300]}")
        break
    elif status in ('FAILED', 'ERROR'):
        print(f"Failed: {json.dumps(status_data, indent=2)[:300]}")
        break
else:
    print("Timed out waiting for image")