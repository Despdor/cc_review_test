# cc_review_test
## Claude PR Review

每个 PR 打开或更新时，`.github/workflows/claude-review.yml` 会调用 Claude Code 自动评审，并把结果发成 PR 评论。
需要在仓库 Secrets 里配置 `CLAUDE_CODE_OAUTH_TOKEN`，并安装 Claude GitHub App。
