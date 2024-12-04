FROM node:22-slim

WORKDIR /app
RUN npm install -g webpack webpack-cli rollup 

CMD ["bash"]