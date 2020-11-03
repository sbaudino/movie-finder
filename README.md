# Movie-finder

This is a demo of the company's internal webapp where the user can find movies by title and see them in a slider.

Mobile and desktop versions are available.

## Tech

The main purprose here is to write good code, and of course learn. You'll find

- Code written in **vue.js** with some usual good stuff.
- Tests: Added a bunch of tests to cover the basics of the app.

## Security

A little bit of attention to the security has been put on it. Of course, vue provides a bunch of features [out-of-the-box](https://vuejs.org/v2/guide/security.html):

- HTML content protection
- Attribute binding protection

Some attention has been put into:

- Not injecting html/styles provided by the user
- Sanitize movie title to avoid injecting XSS attacks
- Not rendering any `<script>` element in Vue

## Third-party libraries

This small app has integration with

- [OmdbApi](https://www.omdbapi.com/): To integrate the API you need to rename `.env.template` to `.env`and provide your API key.
- [Element UI](https://github.com/ElemeFE/element): A vue.js UI toolkit to avoid spending hours creating my custom components
- [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper): To display movies in a slider

## Testing

For this purpose and time-limitations, only **views** and **core-parts** of the app have been tested. That includes

## Project setup

```
yarn install
```

Compiles and hot-reloads for development

```
yarn serve
```

Compiles and minifies for production

```
yarn build
```

Run your unit tests

```
yarn test:unit
```
