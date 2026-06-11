# Hero Video Candidate Scorecard

Date: 2026-06-11

No real candidate video files were generated in this pass because verified generation routes spend USD or Picsart credits and explicit approval was not provided.

Scores below are pre-generation concept scores. Replace them with visual scores after actual candidates exist in `public/media/hero-video/candidates/`.

| Candidate | First 3s Impact | Luxury | Brand Fit | Emotional Clarity | Realism Risk | Flower Quality Risk | Hand Risk | Calm Behind Text | Loopability | Mobile | Desktop | Performance | Conversion | Total / 130 | Status |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| A Macro Bloom Opening | 9 | 9 | 8 | 8 | 6 | 6 | 10 | 8 | 8 | 9 | 8 | 9 | 7 | 105 | Prepare |
| B Florist Final Touch | 8 | 9 | 9 | 9 | 6 | 8 | 4 | 8 | 6 | 8 | 8 | 8 | 9 | 100 | Risky |
| C Luxury Arrangement Reveal | 9 | 9 | 9 | 8 | 8 | 8 | 10 | 9 | 8 | 9 | 10 | 8 | 10 | 115 | Preferred |
| D Soft Gold Packaging Ritual | 8 | 9 | 9 | 9 | 7 | 8 | 5 | 10 | 7 | 8 | 9 | 9 | 9 | 107 | Prepare |

## Automatic Rejection Rules

Reject a generated candidate if it is:

- blurry
- busy
- cheap-looking
- generic AI-looking
- visually noisy
- too dark
- too pink or saturated
- not loopable
- artifact-heavy
- bad with hands
- hard to read text over
- not premium in the first 3 seconds
- visually disconnected from Blush

## Current Recommendation

Generate at least these first:

1. Candidate C desktop and mobile.
2. Candidate A desktop and mobile.
3. Candidate D desktop and mobile.

Generate B only if the selected model is known to handle hands well or if image-to-video starts from a real reference frame.

## Visual QA Procedure After Generation

1. Save raw candidate files in `public/media/hero-video/candidates/`.
2. Inspect first frame, 3-second mark, final frame, and loop boundary.
3. Test each candidate behind live hero text in desktop and mobile.
4. Reject any candidate that fails automatic rejection rules.
5. Only then compress and move selected files to final paths.
