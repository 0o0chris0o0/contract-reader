#!/bin/bash

touch .env.production

# CLIENT ENV VARIABLES
echo "GATSBY_ENV=production" >> .env.production

echo "GATSBY_API_KEY=$GATSBY_API_KEY" >> .env.production
echo "GATSBY_API_URL=$GATSBY_API_URL" >> .env.production
echo "GATSBY_DOMAIN_NAME=$GATSBY_DOMAIN_NAME" >> .env.production

echo "GATSBY_GA_ID=$GATSBY_GA_ID" >> .env.production

# PRISMIC
echo "PRISMIC_REPO_NAME=$PRISMIC_REPO_NAME" >> .env.production
echo "PRISMIC_ACCESS_TOKEN=$PRISMIC_ACCESS_TOKEN" >> .env.production

