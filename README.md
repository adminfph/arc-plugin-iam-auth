# arc-plugin-iam-auth
ARC Plugin for adding IAM Authentication

> AWS _"IAM Authentication"_ for API Endpoints deployed with [Architect](https://arc.codes).

## Usage

```sh
npm i arc-plugin-iam-auth
```

```sh
# ... in your app.arc

@plugins
arc-plugin-iam-auth


#list the paths that you want to protect with IAM_AUTH. You can copy the @http items and remove what you don't need
@arc-plugin-iam-auth
get /a/path
post /b/path
