# Gatsby redirect with path prefix

## Reproduce

On GitHub Page

- open [https://kakusio.github.io/Millions-On-Mars/](https://kakusio.github.io/Millions-On-Mars/)
- click `Redirect-page to page 2` link
> ~~The redirect will not happen.~~  
> Update: After gatsby@^1.9.82, the redirect works fine.

develop on self host machine

- `yarn install`
- `yarn develop`
- open [http://localhost:8000](http://localhost:8000)
- click `Redirect-page to page 2` link
> The redirect will success.