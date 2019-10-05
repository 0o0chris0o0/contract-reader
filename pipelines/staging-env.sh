#!/bin/bash

touch .env.staging

# CLIENT ENV VARIABLES
echo "GATSBY_ENV=staging" >> .env.staging

echo "GATSBY_API_KEY=$GATSBY_API_KEY" >> .env.staging
echo "GATSBY_API_URL=$GATSBY_API_URL" >> .env.staging
echo "GATSBY_DOMAIN_NAME=$GATSBY_DOMAIN_NAME" >> .env.staging

echo "GATSBY_GA_ID=$GATSBY_GA_ID" >> .env.staging

# PRISMIC
echo "PRISMIC_REPO_NAME=$PRISMIC_REPO_NAME" >> .env.staging
echo "PRISMIC_ACCESS_TOKEN=$PRISMIC_ACCESS_TOKEN" >> .env.staging
