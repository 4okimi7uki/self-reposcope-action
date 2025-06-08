# Self-Reposcope-Action

A GitHub Action to visualize your GitHub language usage stats (including private repositories) as stylish SVGs — powered by [self-reposcope](https://github.com/4okimi7uki/self-reposcope).

## Quick Start

1. Add the following to your `.github/workflows/reposcope.yml`:

```yaml
name: Update Language Stats

on:
    schedule:
        - cron: "0 0 * * 1" # Every Monday
    workflow_dispatch:

jobs:
    update-stats:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v3

            - name: Run self-reposcope
              uses: 4okimi7uki/self-reposcope-action@v1
              with:
                  token: ${{ secrets.REPOSCOPE_TOKEN }}
```

2. Set your `REPOSCOPE_TOKEN` in **Settings > Secrets**
   (must be a personal access token with repo access)

3. Commit & watch the SVG update in `./output`

## Output Example

![Language Chart](./output/full_languages.svg)

---

Powered by [Self-Reposcope 🔍](https://github.com/4okimi7uki/self-reposcope)
