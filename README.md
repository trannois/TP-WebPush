## Env de dev

Pour le serveur, on utilise le framework node Express, mais tout autre solution est viable

    $ docker build -t node/webpush .
Executer en prod, il vous faut faire un inspect pour connaître l'IP et un docker stop pour 
l'arrêter

    $ docker run --rm node/webpush
    
Pour le faire en dev, accecible sur localhost

    $ docker run -p 80:80 --rm --name test-webpush -v `pwd`:/opt/project node/webpush
    
