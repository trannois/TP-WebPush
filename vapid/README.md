## Création d'une clef VAPID
Permet de limiter les inconnues au niveau du Push Service. 
Les informations qui seront échangées doivent être privées entre 
 le push serveur et le user-agent ou application server, pour rendre privé les échanges
 le protocole utilise des clef de cryptage de type VAPID.

### Comment créer les clefs pour votre serveur

Vous pouvez créer un ensemble de clefs pour vos serveur d'application 
directement sur le site [web-push-codelab.glitch.me](https://web-push-codelab.glitch.me)
ou en utilisant web-push en ligne de commande pour le générer.

    $ npm install -g web-push
    $ web-push generate-vapid-keys

La création des clefs pour votre application n'est à faire qu'une seule fois, 
faites juste attention de garder vos clefs privées ... privée ;)

#### via docker & web-push
Ceci est une possibilité, il y en a bien sûr d'autre

Le Dockerfile
> FROM node:latest
>  
> RUN npm install -g web-push  
> CMD web-push generate-vapid-keys

Les commandes docker pour exécuter

    $ docker build -t node/vapid .
    $ docker run --rm node/vapid
    
