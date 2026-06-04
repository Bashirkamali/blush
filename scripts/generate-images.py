#!/usr/bin/env python3
"""Generate testimonial avatar images and hero poster for Blush landing page."""
import fal_client
import subprocess
import json
import os
import sys

# Read FAL key from .env
env_path = os.path.expanduser('/Users/nava/.hermes/.env')
with open(env_path) as f:
    for line in f:
        if line.startswith('FAL_KEY='):
            os.environ['FAL_KEY'] = line.strip().split('=', 1)[1]
            break

if not os.environ.get('FAL_KEY'):
    print("FAL_KEY not found in .env")
    sys.exit(1)

images_to_generate = [
    ("testimonial-2.jpg", "Professional portrait of a creative Persian woman in her 30s, warm smile, soft studio lighting, elegant artistic vibe, high quality photography, square format"),
    ("testimonial-3.jpg", "Professional portrait of a confident Persian businessman in his 40s, friendly expression, business casual attire, natural lighting, studio quality, square format"),
    ("testimonial-4.jpg", "Portrait of a happy young Persian woman, natural beauty, warm smile, casual elegant style, soft natural lighting, high quality photography, square format"),
]

for filename, prompt in images_to_generate:
    output_path = os.path.join('/Users/nava/Documents/GitHub/blush/public', filename)
    
    print(f"Generating {filename}...")
    try:
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
            subprocess.run(['curl', '-s', '-o', output_path, url], check=True)
            size = os.path.getsize(output_path)
            print(f"  ✅ {filename} saved ({size/1024:.0f} KB)")
        else:
            print(f"  ❌ No image returned for {filename}")
    except Exception as e:
        print(f"  ❌ Error generating {filename}: {e}")

# Also generate a new hero poster
hero_path = os.path.join('/Users/nava/Documents/GitHub/blush/public', 'generated-hero.png')
print("Generating hero poster...")
try:
    result = fal_client.subscribe(
        'fal-ai/flux/dev',
        arguments={
            'prompt': 'A single elegant white rose against a soft pink background, luxurious, minimalist, high-end floral photography, soft diffused lighting, cinematic quality',
            'image_size': 'landscape_16_9',
            'num_images': 1,
        },
    )
    images = result.get('images', [])
    if images:
        url = images[0].get('url', '')
        subprocess.run(['curl', '-s', '-o', hero_path, url], check=True)
        size = os.path.getsize(hero_path)
        print(f"  ✅ Hero poster saved ({size/1024:.0f} KB)")
    else:
        print(f"  ❌ No image returned for hero")
except Exception as e:
    print(f"  ❌ Error generating hero: {e}")

print("\nDone!")