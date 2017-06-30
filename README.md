# zabbixSender

codepipeline stages:
- Source: add github repo as source
- Build: add codebuild as build server using buildspec.yml from this repo
- Staging: add cloudformation for deploying change set for review
- Beta: add cloudformation for deploying change set execution
