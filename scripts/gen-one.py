#!/usr/bin/env python3
"""Generate image via FAL subscribe API."""
import fal_client
import os, sys, json

env_path = os.path.expanduser('/Users/nava/.hermes/.env')
with open(env_path) as f:
    for line in f:
        if line.startswith('FAL_KEY='):
            os.environ['FAL_KEY'] = line.strip().split('=', 1)[1]
            break

filename = sys.argv[1]
prompt = sys.argv[2]
output_path = os.path.join('/Users/nava/Documents/GitHub/blush/public', filename)

print(f"Generating {filename}...", flush=True)
result = fal_client.subscribe(
    'fal-ai/flux/dev',
    arguments={
        'prompt': prompt,
        'image_size': 'square_hd',
        'num_images': 1,
    },
)
images = result.get('images', [])
if images:
    url = images[0].get('url', '')
    # Download using requests
    import requests as req
    r = req.get(url)
    with open(output_path, 'wb') as f:
        f.write(r.content)
    print(f"✅ {filename} saved ({os.path.getsize(output_path)/1024:.0f} KB)")
else:
    print(f"No images: {json.dumps(result, indent=2)[:500]}")