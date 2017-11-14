# Learn Google Analytics

## Why?

As a person *building* a web application,
you want to know how people are *using* your app.

The way *most* web apps track *usage* is using a 3rd party tool
and the

In most cases developers are *stingy* and don't want to *pay*
for *anything*. This is why most of the *alternatives* to GA

## How?

> The *easiest* way to learn how to use Google Analytics
is with the ***Official*** **Google Analytics Academy** online course:
https://analyticsacademy.withgoogle.com/




## Alternatives?

+ Mixpanel: https://mixpanel.com/
+ Keen.io: https://keen.io/ - great features. real-time. 50k events free tier.
+ Gauges: http://get.gaug.es - much simpler than GA but paid.
 worth it for real-time stats!
+ Comparison: http://www.sitepoint.com/5-great-google-analytics-alternatives/

## Google Analytics

The first thing you must do to get started with Google Analytics is to register your site/project:

1. You'll first need to sign in using an existing Google account. If you haven't
got one already you can sign up for one [here](https://accounts.google.com/SignUp?hl=en-GB)

2. Next you'll need to sign up at https://analytics.google.com. To do this click `Sign Up`, then create an account name, and add your projects website name and url. Once you've done this you can click `Get Tracking ID` to create your account.

3. You'll be taken through to your new project's dashboard, where you'll see your Tracking ID. This is what you'll use to link the services such as Google Tag Manager, so take note of it (you can find it later by clicking on your account name in the top left of the dashboard, or get back to this page by going to `Admin` > `Tracking Info`):
<img width="1058" alt="screen shot 2017-05-15 at 10 55 23" src="https://cloud.githubusercontent.com/assets/8939909/26052324/05bd6134-395d-11e7-8ddc-a6bd26c258a3.png">

4. You'll also see a block of code named `Website Tracking`. Take this and paste it somewhere on every page you want to track.

5. That's it! You can now visit the `Reports` section in the sidebar to see your active users, and you're ready to get started tracking your own custom events:
<img width="1219" alt="view users" src="https://cloud.githubusercontent.com/assets/8939909/26052239/b8d58ec8-395c-11e7-9570-814b17b6aef5.png">

## Google Tag Manager

In order to be able to update your analysis campaigns *quickly* **and** *easily*
you might want to use Google Tag Manager. It's a tool that allows you to edit
your analysis without touching the source code. It can save time and money by
providing an easy platform to test and publish your user behaviour tracking.

To get started with GTM follow these steps:

1. If you haven't already got a Google Analytics account (detailed in the 'Google Analytics' section above), make sure you sign up to that first.

2. Next you'll need to log in to the GTM dashboard. You do this by providing a
project name and a container (*web, app, amp specification*). You can create
your new project at https://tagmanager.google.com/?authuser=0#/admin/accounts/create

3. Once you've successfully logged in you should see a modal with some instructions
on how to get set up. It should look something like this:
![gtm](https://cloud.githubusercontent.com/assets/12450298/20275527/ca856540-aa90-11e6-8368-b713bd5c1be2.png)

4. To add a tag, click on the 'ADD A NEW TAG >' link:
![new tag](https://cloud.githubusercontent.com/assets/12450298/20275596/1b7eebc4-aa91-11e6-8a7e-972eb9b192ef.png)

5. Another modal will appear for the configuration of your tag. Click on the
tag configuration box and then select which tag type you want. We've selected
Universal Analytics:
![tag config](https://cloud.githubusercontent.com/assets/12450298/20275596/1b7eebc4-aa91-11e6-8a7e-972eb9b192ef.png)
![universal](https://cloud.githubusercontent.com/assets/12450298/20275699/7bed2408-aa91-11e6-8349-956882ceedb6.png)

6. Enter the tracking ID that you received when you registered your project for
Google Analytics. (See 'Google Analytics' above. It's the number that starts with `UA-`)
![tracking id](https://cloud.githubusercontent.com/assets/12450298/20275808/c273b928-aa91-11e6-801a-4f9a0e407d8a.png)

7. Next add details on when you would want the tag to be triggered. We've gone
with a simple example of when a user visits any page:
![trigger](https://cloud.githubusercontent.com/assets/12450298/20276062/a2e42b82-aa92-11e6-900c-5f6c3bceb7a2.png)

8. Once you've done this click save:
![save](https://cloud.githubusercontent.com/assets/12450298/20276139/f87ca204-aa92-11e6-82b5-3365a38263fb.png)

9. Finally click 'PUBLISH' to go live:
![publish](https://cloud.githubusercontent.com/assets/12450298/20276213/459404ec-aa93-11e6-8faf-4989cf683dad.png)

10. Once your update is live, you can go back to your Google Analytics dashboard, and see what pages your users are visiting:
<img width="1232" alt="pages visited" src="https://cloud.githubusercontent.com/assets/8939909/26052667/1b728076-395e-11e7-97a5-3e35a51a18cb.png">

### Event Tracking

Tracking Page Views is nice, but you'd probably like to know a little more about what users are doing on your site. For this we can track `events`. If you're familiar with javascript you probably have a good idea of what an `event` is, but if not, it's some kind of change happening on the page, usually in the form of user interaction.

1. To track an `event`, we first need to set up a `trigger`. Select `Triggers` from the sidebar, and click `New`.  
<img width="400" alt="screen shot 2017-06-01 at 10 24 51" src="https://cloud.githubusercontent.com/assets/8939909/26673381/9d9a94ea-46b4-11e7-9964-001efe768c35.png">

2. From here, click `Trigger Configuration` and you'll see the various types of triggers you can set. For this demo, we'll be using `Clicks -> All Elements`.  
<img width="600" alt="screen shot 2017-06-01 at 10 59 43" src="https://cloud.githubusercontent.com/assets/8939909/26674863/badb2de4-46b9-11e7-89f4-6a63089897b0.png">

3. Here is where you set up a trigger to occur in certain circumstances. In our case, let's say we want an event to trigger every time a user signs up to our newsletter, by clicking on a `Sign Up` button. If the HTML of our button looks like this:  
`<button type="submit" id="newsletter-signup">Sign Up</button>`  
Then we could use its unique `id` to reference it. We'd set up our trigger to fire on `Some Link Clicks`, with the condition of `Click ID -> equals -> newsletter-signup`. If you don't see `Click ID` in the first dropdown, you'll first need to configure Tag Manager's Built In Variables. See step 3.1 below.

<img width="600" alt="screen shot 2017-06-01 at 11 02 59" src="https://cloud.githubusercontent.com/assets/8939909/26674912/e6234d42-46b9-11e7-8809-22f49477ce3c.png">  

* 3.1. Go back to the dashboard and click on `Variables` in the sidebar, then `Configure`. You'll see the different kinds of built in variables Tag Manager has. For this demo we need `Click ID`, but you can select as many of them as you want. Once you've done this, go back to step 3.
<img width="600" alt="screen shot 2017-06-01 at 10 36 56" src="https://cloud.githubusercontent.com/assets/8939909/26673866/48948e2c-46b6-11e7-948b-373d8fb328df.png">

4. Now just change your trigger's name from `Untitled Trigger` on the top left to `Newsletter Signup`, and click `save`.

5. Now that we've set up a `trigger`, it's time to apply it to a `tag`. You create a tag in much the same way as we did in the previous section, with the only differences being the `Trigger`, the `Track Type`. For the trigger, we'll use our new `Newsletter Signup` trigger:
<img width="500" alt="screen shot 2017-06-01 at 11 07 19" src="https://cloud.githubusercontent.com/assets/8939909/26675183/d6209110-46ba-11e7-93ec-38c95b335e10.png">  

For the Track Type, we want to use `Event`. When we select this, we're given a number of options for `Event Tracking Parameters`. These can be used to group and give names to our events, which can make them easier to analyse. Our Newsletter Signup button will be on our homepage, so we'll use that as the category, which will group it together with any other homepage events we track on or Analytics dashboard. We'll also give it an action of `Newsletter Signup` so we can identify it. These values are entirely customisable, so feel free to group your events in any way you see fit. You can also use some of Tag Managers built in variables (see 3.1 above), for example, to automatically group all events on a particular page. This can be especially useful if you're using one trigger to track multiple items, that could all be on different pages (You'd most likely use `Click Classes` rather than `Click ID` for that when creating a trigger). Once you're done with your parameters, make sure you set your settings variable that you created earlier with your Tracking ID, name your tag, and click `save`.  
<img width="350" alt="screen shot 2017-06-01 at 11 23 34" src="https://cloud.githubusercontent.com/assets/8939909/26675743/f7092f52-46bc-11e7-8333-5ec51bdce2d6.png">

6. You're done! You can now preview or publish your changes, and view the results on your analytics dashboard, in the `events` tab.  
<img width="600" alt="screen shot 2017-06-01 at 11 27 17" src="https://cloud.githubusercontent.com/assets/8939909/26675852/4f779886-46bd-11e7-92b1-4318f18f0aae.png">

### Custom Reports

Now that you have some more detailed data, you might want to make it a little easier to view. Custom reports can be generated in Google analytics to group together key analytics you're interested in for quick and easy access.

To create a custom report, click on `Customization` > `Custom reports` in the sidebar, then `+ New Custom Report`.

<img width="600" alt="Custom Reports" src="https://user-images.githubusercontent.com/8939909/32664538-72b6533c-c629-11e7-83a5-8db0a16dc1a5.png">

Here you'll see a few different settings. The Metric Groups are the data you're interested in viewing together, and the Dimension drilldown will determine how the data is grouped.

So you can view all of your metrics (for example: page visits, avg. time on page, certain custom events), grouped by a particular dimension (browser, country, time of day etc).

<img width="400" alt="Report Metrics" src="https://user-images.githubusercontent.com/8939909/32664821-4a62469c-c62a-11e7-94ad-af90b3859789.png">

You can also add filters to your reports, to ensure you only see the data you're interested in, for example, you might only want to see data from users using a particular operating system.

<img width="600" alt="Report Filters" src="https://user-images.githubusercontent.com/8939909/32664925-94f8fb7e-c62a-11e7-8d7c-fd204b7c4a6c.png">

You can create more than one group of metrics to apply to the same dimension. You can also create multiple report tabs to keep related reports together.

### Data Layer

For more advanced analytics, you may want to use the `dataLayer`. This requires a bit more javascript knowledge, but can allow for very flexible implementations that give you much greater control over what you track.

The two uses of the data layer we're going to go through in this guide are custom variables, and custom events.

1. To get started, first you need to initialise the data layer. To do this, simply add the following code to your html, just above the Google Tag Manager script:
```
<script>
    dataLayer = [];
</script>
```

2. The data layer is useful if you want to store a number of variables. To do this, you push a key-value pair into the dataLayer as you would an array. The key being the variable name you'll use to access it later.
```
dataLayer.push({"key": "value"});
```
Each key that you push to the data layer is unique, so if you push a key that already exists, the key-value pair will be overwritten.

3. To trigger a custom event, you push to the data layer a key-value pair where the key is "event", and the value is the name of the event.
```
dataLayer.push({"event": "myCustomEvent"})
```

4. You must now configure these variables and events for use with Google Tag Manager.
    * To set a trigger to occur whenever your custom event is called, on the Tag Manager dashboard, go to `Variables` and click `new` under `User-Defined Variables`. Here, all you have to do is choose a variable type of `Custom Event`, and give it the same name as the event you're pushing to the data layer ("myCustomEvent", above). This is now available as a trigger you can add to any tag.
    * To configure a custom variable, do the same, but choose `Data Layer Variable`, giving it the name of your variable ("key", above). You can now access the value of this variable in the `Event Tracking Parameters` when you create a tag.

## How to set up Scroll Tracking with time on page
+ In order to see how much of your content users are actually seeing when they view your page it can be useful to track how far down the page they scroll. In order to give this context of how likely it is the user actually took any of this information in it is also useful to track the time they spent on the page. For example if they scrolled the whole length of the page but spent less than 10 seconds on the page, it's unlikely that they actually read any of the content.
+ The first thing we're going to be doing is setting up a custom HTML tag. This will allow us to put our own script into a tag.
+ Start by creating a new Tag, we can call it "Scroll tracking script"
+ Select Custom HTML for the tag type

![google tag manager - google chrome_030](https://user-images.githubusercontent.com/21139983/30919053-41733bb8-a398-11e7-903b-28693620174b.png)

+ Paste in this code to the HTML box.
```HTML
<script>
(function(){
  var pageLoad = Date.now()

  var scrollableHeight = document.body.scrollHeight - window.innerHeight;

  var scrollPercent = 0;

  var percentIncrement = 20;

  window.addEventListener('scroll', function() {
    var newScrollPercent = window.pageYOffset / scrollableHeight * 100;
    if (newScrollPercent > scrollPercent) {
      scrollPercent = newScrollPercent;
    }
  });

  window.addEventListener('resize', function() {
    scrollableHeight = document.body.scrollHeight - window.innerHeight;
  })

  window.addEventListener('beforeunload', function() {
    var roundedDownToTwenty = Math.floor(scrollPercent / percentIncrement) * percentIncrement;
    var timeOnPage = Date.now() - pageLoad;
    var readableTimeOnPage = new Date(timeOnPage).toISOString().substr(-12, 7);
    dataLayer.push({ event: 'scrollTracking', scrollDepth: roundedDownToTwenty, 'timeOnPage': readableTimeOnPage });
  });
})()
</script>
```
+ This code will keep track of how far down the page the user scrolls, rounded down to the nearest 20, if you want a different incrementaion then change the `percentIncrement` variable at the top of the script to your preferred incrementaion.

![google tag manager - google chrome_031](https://user-images.githubusercontent.com/21139983/30919054-418a5190-a398-11e7-8221-e3fe7130c0d0.png)

+  You're going to need to add a new trigger for this tag as well.
+ Click on the triggering section of the tag configuration window, then in the top right click the "+" symbol to add a new trigger.
+ We're going to set the trigger on the Window Loaded event, so that the tag only loads once everything else has, so we don't slow the page down. In the trigger set up select "Window Loaded", and leave "All Window Loaded Events" selected.
+ You can name this trigger whatever you want, we're going to go with "Load Google Tag Manager" as that's what it's triggering.

![google tag manager - google chrome_033](https://user-images.githubusercontent.com/21139983/30919055-41a4365a-a398-11e7-93ea-be4e1f29c764.png)

+ Save the trigger, and then save your tag.
+ Now we're going to need to create some Data Layer variables as a way to keep track of the scroll depth and time spent on page.
+ Click on Variables in the GTM sidebar, then under User-Define Variables click New.
+ Select "Data Layer Variable" under the Variable Configuration. Under "Data Layer Variable Name" type put `scrollDepth`. This has to match the stuff you put in the script, so it's important this is the same for the script we're using. You also need to give the data layer variable a name for GTM, I like to have the name at the top be the same as the Data Layer Variable name, for clarity's sake.

![google tag manager - google chrome_035](https://user-images.githubusercontent.com/21139983/30919216-a8a48f80-a398-11e7-885a-cdfc07cfefe1.png)

+ Check "Set Default Value" and type undefined.

![google tag manager - google chrome_036](https://user-images.githubusercontent.com/21139983/30919058-41c84266-a398-11e7-812b-db96f0ec7a5e.png)

+ Save the variable, then create another in the same way with the name `timeOnPage`
+ Now we need to create a trigger for the Event of the scroll tracking (in this case done when the user leaves the page, as defined by our script)
+ Go into triggers, click "New" and select "Custom Event".

![google tag manager - google chrome_038](https://user-images.githubusercontent.com/21139983/30919059-41d7b124-a398-11e7-8c3f-7cec4dd0e67d.png)

+ Give it the name "scrollTracking". This has to match the event in our script. If you want to change this you'll have to change it in the script as well. Do this and save the trigger.

![google tag manager - google chrome_039](https://user-images.githubusercontent.com/21139983/30919062-41f18c66-a398-11e7-8037-f4a673bf183e.png)

+ Finally we have to set up a tag to send this information to google analytics.
+ Create a new tag, configure it as Universal Analytics, and then select "Event" as the track type.
+ You can give any of these the names you want, and use the data layer variables as you please.
+ Our set up is:
  + Category: Page Scroll tracking
  + Action: {{scrollDepth}}%
  + Label: URL: {{Page URL}}, Time on page: {{timeOnPage}}
+ You will also need to set "Non-Interaction Hit" to True. It will mess with your bounce rate if set to false.
+ Add the scrollTracking trigger as the trigger for this tag

![google tag manager - google chrome_042](https://user-images.githubusercontent.com/21139983/30919061-41f01160-a398-11e7-9665-dd6accb25869.png)

+ All done! You can now preview, and publish your tags, and you'll be able to track how far people scroll, and how long they spend in your page on Google Analytics!
+ You can see this information in Google Analytics under "Real Time" and then "Events"

## Recommended Reading

### Books

+ **Web Analytics: An Hour a Day** by [Avinash Kaushik](https://twitter.com/avinash)
http://www.amazon.com/Web-Analytics-An-Hour-Day/dp/0470130652
(*gentle introduction. GA UI has changed. but concepts are the same*)
+ **Web Analytics 2.0**: The Art of Online Accountability
and Science of Customer Centricity
by [Avinash Kaushik](https://twitter.com/avinash)
http://www.amazon.com/Web-Analytics-2-0-Accountability-Centricity/dp/0470529393
(*the sequel to "Web Analytics: An Hour a Day" but can be read independently*)
+ **Advanced Web Metrics** with Google Analytics
by [Brian Clifton](https://brianclifton.com/)
http://www.amazon.com/Advanced-Web-Metrics-Google-Analytics/dp/1118168445
(*as its title implies, this is the advanced text, so read this once you
  already have some basic experience with Analytics*...)

> ***Note***: DWYL has *physical copies* of all these books in London.
If you want to borrow any of them, ask!
They can also be found by googling for "name of the book" + "pdf"...
but we *highly* recommended buying a copy as they are all excellent!
