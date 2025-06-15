*******************
***Solution***
*******************

You can view the exact code changes needed to solve this coding challenge here: https://github.com/ScriabinOp8No12/lesson-8-last-visited-page-11xdev/pull/1/files#diff-b1d807d78a9570aab1a6460c61463ac56400bd81c156e08d151f459a4af411e6

This branch contains the lesson 8 last visited page enhancement - you can test that the functionality works as intended in your browser.   

1. We'll want to use local storage for storing the last visited lesson 8 page the user was on.  We can use React's useEffect and useLocation to track changes in the url.

We'll want to add code in the following file:

```
src/views/Lessons/Puzzles.tsx
```

The added code should look something like this:

import { useLocation } from "react-router-dom";

Inside the component:

const location = useLocation();

```
useEffect(() => {
    if (location.pathname.startsWith("/learn-to-play/8/problems/")) {
        localStorage.setItem("last-visited-lesson-8-page", location.pathname);
    }
}, [location.pathname]);
```

2. Next, we need to ensure that when we are on the "/learn-to-play" page, and clicking the 8 or problems below the 8 navigates us to the page specified in local storage (if it exists).  Don't forget that you'll need to add logic to both navigateToChapter and ChapterButton.  We can check local storage for the key we stored in the above Puzzles.tsx file, then navigate there if it exists.

Your code should look something similar to this:

```
const last_visited_lesson_8_page = localStorage.getItem("last-visited-lesson-8-page");
```

```
else if (chapter === 8 && last_visited_lesson_8_page != null) {
    navigate(last_visited_lesson_8_page);
}
```

*******************
***Conclusion***
*******************

Using local storage to store the user's last visited page is a common approach, although this enhancement won't work if a user changes devices.  Storing the last visited page in the database is an option, but it's often overkill.  When I initially worked on this enhancement, I was a bit worried that the useEffect would fire too many times, but it's only firing once on mount, and again after each time the url changes within lesson 8.  

