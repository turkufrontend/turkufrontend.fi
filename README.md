# Turku ❤️ Frontend

Welcome to our lovely community! We are a group of developers, students, hobbyists and curious who share an interest for frontend development.

## turkufrontend.fi

This project is the website for turkufrontend.fi, our home in the Internet.

## Content updates

### Add new event to front page

Edit `_data/events.json` in following format:

```json
[
  {
    "date": "", // in YYYY-MM-DD format
    "host": "", // name of the host
    "url": null // URL to event/registration page, eg. Meetabit
  }
]
```

If the season changes, also edit the `<h2>` in `_includes/events.njk` to match the season and the year.

### Add a new event to timeline/history

Edit `_data/history.json` and add a new object to the array:

```json
{
  "date": "", // YYYY-MM-DD
  "host": "", // Company name -> translates to [name].png to match with a sponsor logo in assets/img/sponsors/
  "talks": [
    {
      "title": "", // talk title
      "speaker": "", // speaker name
      "description": null, // talk description if available, currently not displayed
      "url": null // if there's a video, add link here. currently not displayed since we have so few
    }
  ]
}
```

### Add a new sponsor

Add a 240x150px image of the company logo to `assets/img/sponsors/` and then add the name of the company to `_data/sponsors.json`. Sort the list!

### Add a speaker

Add a speaker photo in 500x500px into `assets/img/speakers` and the name of the speaker into `_data/speakers.json`. Sort the list!

### Development

This website is built with Eleventy.

To run it locally, clone the project and then run

```
npx @11ty/eleventy --serve
```

to run the local server.

### Adding a new event

To add a new event, modify `_data/events.json`. The events are rendered in the order they are in the JSON file.

If the sponsor is not yet booked (or public), use `host: null`. If the event page is not yet available, use `url: null`.

## Our community & events

We host regular events in Turku, Finland, to which you can sign up for in [Meetabit](https://meetabit.com/communities/turku-3-frontend).

We also have [a Slack group](https://turkufrontend.fly.dev/) where you can chat with fellow developers, ask people to join for lunches or other gatherings between the events and get help for tech stuff.

In addition, we have a Mastodon account at [@turkufrontend@mastodo.fi](https://mastodo.fi/@turkufrontend) that you can follow to hear about what is happening.
