# Self-Reposcope-Action

[![CI](https://github.com/4okimi7uki/self-reposcope-action/actions/workflows/test.yml/badge.svg)](https://github.com/4okimi7uki/self-reposcope-action/actions/workflows/test.yml)
[![Version](https://img.shields.io/github/v/release/4okimi7uki/self-reposcope-action?include_prereleases)](https://github.com/4okimi7uki/self-reposcope-action/releases)
[![License](https://img.shields.io/github/license/4okimi7uki/self-reposcope-action)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/4okimi7uki/self-reposcope-action?style=social)](https://github.com/4okimi7uki/self-reposcope-action/stargazers)

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

2. Set your `REPOSCOPE_TOKEN` in **Settings > Secrets and variables > Actions > [Repository secrets]**
   (must be a personal access token with repo access)

3. Commit & watch the SVG update in `./output`

## Output Example

<p align="center">
<img src="https://raw.githubusercontent.com/4okimi7uki/self-reposcope/4e3092bbb4cf4a31b8551fdf1b8c86434ea4a9a3/output/full_languages.svg" alt="Language Chart"/>
</p>

---

[![Powered by self-reposcope](https://img.shields.io/badge/Powered%20by-self--reposcope-2f2f2f?style=for-the-badge&logo=rust&logoColor=orange)](https://github.com/4okimi7uki/self-reposcope)

<small>2025 [Aoki Mizuki](https://github.com/4okimi7uki) – Developed with 🍭 and a sense of fun.</small>
