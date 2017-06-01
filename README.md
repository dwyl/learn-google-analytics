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
