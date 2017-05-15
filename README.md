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
