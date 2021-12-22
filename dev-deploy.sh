# Available ENV vars from Firstmate controller: DOCKER_USERNAME, PRIVATE_REPO_NAME, PRIVATE_SHA
# Namespace creation for case where cluster is not initialized beforehand

kubectl create namespace firstmate --dry-run=client -o yaml | kubectl apply -f -
kubectl apply -f dev-k8s --namespace="firstmate"
kubectl set image deployment/dev-website-basic-deployment dev-website-basic="$DOCKER_USERNAME"/dev-website-basic-image:"$PRIVATE_SHA" --namespace="firstmate"
