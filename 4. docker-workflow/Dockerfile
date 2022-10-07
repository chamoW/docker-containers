# ---------------------------------
# FIRST BLOCK AS A BUILDER PHASE
# ---------------------------------
FROM node:16-alpine as builder
WORKDIR /usr/app
COPY ./frontend/package.json .
RUN yarn install
COPY ./frontend .
RUN yarn run build

# Default commando for the image, no es necesario
#CMD [ ]

# ---------------------------------
# SECOND BLOCK AS A RUN PHASE
# ---------------------------------
FROM nginx
COPY --from=builder /usr/app/build /usr/share/nginx/html

# Default commando for the image, no es necesario ya que nginx inicia automaticamente
#CMD [ ]