# Self-Reposcope-Action

[![CI](https://github.com/4okimi7uki/self-reposcope-action/actions/workflows/test.yml/badge.svg)](https://github.com/4okimi7uki/self-reposcope-action/actions/workflows/test.yml)
[![Version](https://img.shields.io/github/v/release/4okimi7uki/self-reposcope-action?include_prereleases)](https://github.com/4okimi7uki/self-reposcope-action/releases)
[![License](https://img.shields.io/github/license/4okimi7uki/self-reposcope)](https://github.com/4okimi7uki/self-reposcope/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/4okimi7uki/self-reposcope-action?style=social)](https://github.com/4okimi7uki/self-reposcope-action/stargazers)

A GitHub Action to visualize your GitHub language usage stats (including private repositories) as stylish SVGs — powered by [self-reposcope](https://github.com/4okimi7uki/self-reposcope).

---

⚠️ This Action is currently under maintenance / adjustment.  
Feel free to explore, but we do not recommend using it in production yet.

---

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
        permissions:
            contents: write
        steps:
            - name: Checkout (with submodules)
              uses: actions/checkout@v3
              with:
                  submodules: recursive

            - name: Run self-reposcope
              uses: 4okimi7uki/self-reposcope-action@v1.0.1
              with:
                  github_token: ${{ secrets.REPOSCOPE_TOKEN }}

            - name: Commit and Push updated SVGs
              shell: bash
              env:
                  GH_PAT: ${{ secrets.REPOSCOPE_TOKEN }}
              run: |
                  echo "::group::Git Commit and Push"
                  git config --global user.name 'github-actions[bot]'
                  git config --global user.email 'github-actions[bot]@users.noreply.github.com'
                  git add output/
                  if git diff --cached --quiet; then
                    echo "No changes to commit"
                  else
                    git commit -m "chore: update language stats SVG"
                    git push https://x-access-token:${GH_PAT}@github.com/${{ github.repository }} HEAD:main
                  fi
                  echo "::endgroup::"
```

2. Set your `REPOSCOPE_TOKEN` in **Settings > Secrets and variables > Actions > [Repository secrets]**
   (must be a personal access token with repo access)

3. Add submodule:

```bash
git submodule add https://github.com/4okimi7uki/self-reposcope tools/self-reposcope
```

4. Commit & watch the SVG update in `./output`

## Output Example

<p align="center">
<img src="https://raw.githubusercontent.com/4okimi7uki/self-reposcope/4e3092bbb4cf4a31b8551fdf1b8c86434ea4a9a3/output/full_languages.svg" alt="Language Chart"/>
</p>

---

[![Powered by self-reposcope](https://img.shields.io/badge/Powered%20by-self--reposcope-2f2f2f?style=for-the-badge&logo=rust&logoColor=orange)](https://github.com/4okimi7uki/self-reposcope)

<small>2025 [Aoki Mizuki](https://github.com/4okimi7uki) – Developed with 🍭 and a sense of fun.</small>
