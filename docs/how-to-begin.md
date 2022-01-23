# How To Set Up a New Namespace (website)

## 1 Create new folder in /sites
  The name of this folder will be used as NAMESPACE environment variable and be aliased by webpack as such
  and the same will be referred to as namespace in the following steps
## 2. Create .env file based off of .env.example
  You're most probably not going to be able to run the environment successfully without almost all of them in place.
  Environment variables (config vars in Heroku), provide a way for there to be (usually: sensitive, otherwise just critical-for-build) variables available to the nodejs environment. However, our front-end web app is running on client environment (the browser). These env vars need to be made available to the rest of our app's code for things to work. Next provides for this by default, you can add values to 'publicRuntimeConfig' in next.config.js and they'll be made available throughout. Be sure to remember this is information that would be available in the browser end, sensitive API keys left in publicRuntimeConfig is a recipe for disaster.
  Our implementation dictates that you also add these to 'config/env.js' so that we can import these variables in any file as need be without having to use 'next/config' redundantly eveytime. Instead we import from config/env wherever we need these variables.

## 3. Create namespace/router/index.js, define routes using next-routes
3. Create namespace/components/PageLayout (for every created file in this process, if you're feeling stuck, just take cue from some other namespace and reproduct)

4. PageLayout, Header, Footer

5. namespace/theme, and namespace/theme/styles e e

6. namespace/modules/Home

7. nameSpace/utils/appScripts.js to be made with 3 exported vars: headerScripts, bodyScripts, footerScripts

8. nameSpace/components/styles.js