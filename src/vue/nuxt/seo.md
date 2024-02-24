# SEO nuxt

with vue-meta - vue meta can also be used without nuxt

Each page in our application needs a **title** tag, which will be used in search engine results:

```html
    <title>Event Listing - Real World Events</title>
```

They also need their own **description** which will be used in search results:

```
<meta name="description" content="Where you can find all the events taking place in your neighborhood">
```

add the meta-data:

```vue
<script>
export default {
  head() {
    return {
      title: 'Event Listing - Real World Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'This is the text that will appear unter the google search result',
        },
      ],
    }
  },
}
</script>
```

 two more things we can do to simplify and future proof this code: 

1. **Eliminate duplication**
2. **Add a default description** 

add to default layout:

```vue
<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Real World Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'This is the text that will appear unter the google search result',
        },
      ],
    }
  },
}
</script>
```

hid - makes sure that there will only be one description for each page



vue meta documentation

[https://github.com/nuxt/vue-meta](https://github.com/nuxt/vue-meta)

> metaInfo in vue meta is called head() in nuxt

------

