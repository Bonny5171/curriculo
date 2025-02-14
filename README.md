Currículo pessoal

Projeto em nodejs usando servidor Web Expressjs, rodando em docker.

### Prerequisites

```
docker -v
```

### Docker create image

```
docker build -t meu-app .
```


## Docker run usage dev
```
docker run -p 3000:3000 -v $(pwd):/app meu-app npm run dev
```
