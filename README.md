# jobs-finder

react native app for finding local jobs

## outline

first screen user sees when they enter the app.

Only show it as they show up.
Each page should fill up entire screen.

## facebook authentication

one time shows, need to read from center. And some api to get back list of jobs.

## save jobs

has list of jobs as a card.

## Map Exported by Expo

- Facebook autetication
- show map
- push notifications
- app loading screen
- swipe deck
- indeed jobs api
- react navigation

## React Navigation

Why? When released we had NavigatorIOS for react native. Not immediate public support for android.

React Router Native put together by same poeple who did react router. Assumption still url in native apps.

## User entry points

1. welcome screen
2. auth screen
3. main flow
   a. map screen (tab)
   b. deck screen (tab)
   c. review flow (tab)
   - review screen (stack)
   - settings screen (stack)

## Navigation has 3 different basic types

Stack (If you want a header, forward / back)
Tab (when you want a bottom bar, want to show either view A, or B)
Drawer (good when you want sidebar)

## Figuring out navigation?

Tab navigation mutually exclusive screens

- stack navigator is things are closely related
