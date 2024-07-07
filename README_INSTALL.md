# CREATE MINIMAL ANGULAR APP

```bash
To create this basic angular app we need the angular_cli(ng)

# Install cli globally 
npm install -g @angular/cli
## usage
## ng new testciangular



# Install locally
npm install @angular/cli
## usage
## 
## Careful!!! cannot escape local directory
## yq -o json -i '.scripts.ng="ng"' package.json
## npm run ng -- new testciangular --directory /tmp/testciangular

```



# test with dockcer 

```bash
docker run -it --rm -v /tmp/created_apps:/var/app -v /tmp/created_apps/cache:/root/.npm/ -w /var/app node:20 bash
npm install -g @angular/cli

ng new testciangular
```