# build and push docker images to ECR
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 741963183445.dkr.ecr.us-east-2.amazonaws.com
aws s3 sync ./font/ s3://vectormind-editor-static/font/ --delete --acl public-read
aws s3 sync ./font-tmpl/ s3://vectormind-editor-static/font-tmpl/ --delete --acl public-read
aws s3 sync ./svg/ s3://vectormind-editor-static/svg/ --delete --acl public-read
aws s3 sync ./template/ s3://vectormind-editor-static/template/ --delete --acl public-read