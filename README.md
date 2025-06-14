*******************
***Initial Setup***
*******************

Getting setup locally only takes a few minutes!

1. Clone the repo

```
git clone https://github.com/ScriabinOp8No12/lesson-8-last-visited-page-11xdev.git
```

2. Navigate to the root of the project:

```
cd lesson-8-last-visited-page-11xdev
```

3. Install packages and start the frontend server:

```
yarn install && npm run dev
```

4. View the website in your browser

```
http://localhost:18888/
```

************************
***Estimated Time***
************************

Estimated time for this enhancement is 1 hour.

************************
***Hints and Solution***
************************

If you need a hint or want to see a possible solution, navigate to this document [here](/Hints-And-Solution.md)

************************
***Coding Challenge***
************************

The real codebase uses a submodule that is located at online-go.com, which includes another submodule at online-go.com/submodules/goban. To ensure nothing breaks when those submodules are updated, the code has been manually added. The main online-go.com submodule can be found at https://github.com/online-go/online-go.com

For lesson 8 only, we need to make sure the user is navigated to the last page they were on, when navigating from the "/learn-to-play" page.

**********************
**Requirements**
**********************

1. If a user changes pages within lesson 8, then navigates out of lesson 8, then navigates back to lesson 8, they return to the last page they were on.

For example, if the user is originally on this page: /learn-to-play/8/problems/capturing/1

then navigates to this page by clicking endgame from the left navigation: /learn-to-play/8/problems/endgame/1

then hits the back arrow in the top left, and clicks to go back to lesson 8, they will be shown this page: /learn-to-play/8/problems/endgame/1

This was a real enhancement request from a real production codebase!  Feel free to use any resources you want on this coding challenge, have fun!  

