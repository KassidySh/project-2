**Project Overview**
-----------------------
**Project Description**

I would like to make a super hero website. I might use bootstrap for styling.

**Possible Problems**

PROBLEM:

I'm not sure I can call multiple items with this array

SOLUTION:

I can run a for loop to get 20 items per page


PROBLEM:

The css layout might change in between pages

SOLUTION:

If the index is greater than 19 subtract 20 and set it as the id


PROBLEM:

Picture might be sideways

SOLUTION:

Rotate the Picture


PROBLEM:

I'm TERRIBLE at Link and Route

SOLUTION:

Use a library or go to office hours


PROBLEM:

pictures might not look good stretched across the header

SOLUTION:

I can Tile them or put three instead of one


PROBLEM:

Background image(header) might be too dark or too light if picture changes

SOLUTION:

Change the Opacity at the top to be closer to white or nav bar has color of white and opacity of .5



**Project Links**

[git-hub repo](https://github.com/KassidySh/project-2/tree/master/project2)

[deployed site]()


**Wireframes**

[Main Page](https://res.cloudinary.com/dt5zs08ue/image/upload/v1578281708/GA%20project%202/wireframes_mockups_mfoyat.png)

[Hero Page](https://res.cloudinary.com/dt5zs08ue/image/upload/v1578319410/GA%20project%202/wireframes_mockups_1_etblon.png)

[Youtube](https://youtu.be/RVCJHQEXQ5g)

[Router Layout](https://docs.google.com/drawings/d/1FGeLe8REGUPs5DMqmKve7A0xI1Fhi1hu3nJzQf6ubrw/edit?usp=sharing)


**MVP**

- Call API and render Hero
- Buttons (previous and next) working
- Search sorts through list and displays results
- Upper left hand corner takes you home
- Link and Route for manageing pages
- Styled
- Deployed


**Post MVP**

- Add local storage
- Add a favorite button that adds object to fave array
- fave button takes you to favorite heros



**Time Frames**

|        Component        | Priority | Estimated Time | Time Invested | Actual Time |
| :---------------------: | :------: | :------------: | :-----------: | :---------: |
|    Create components    |    1     |    .5 (hrs)    |       1       |    :---:    |
|        API call         |    1     |     1 (hr)     |       1.5     |    :---:    |
|      Render 1 hero      |    1     |    4 (hrs)     |       7       |    :---:    |
|      Display heros      |    1     |     2 (hr)     |       1       |    :---:    |
|     Previous Button     |    1     |    .5 (hr)     |       2       |    :---:    |
|       Next Button       |    1     |    .5 (hr)     |       2       |    :---:    |
|     Display Page #      |    1     |     1 (hr)     |       1       |    :---:    |
|     Search function     |    1     |    5 (hrs)     |       5       |    :---:    |
|        Deployed         |    1     |    .5 (hr)     |       1.5     |    :---:    |
|         Styled          |    1     |    8 (hrs)     |       7       |    :---:    |
|     Link and Route      |    1     |    4 (hrs)     |       5       |    :---:    |
|  Changing header image  |    2     |    3 (hrs)     |       0       |    :---:    |
|    Add Local Storage    |    2     |    3 (hrs)     |       0       |    :---:    |
| Add to favorites button |    3     |    2 (hrs)     |       0       |    :---:    |
| favorites button (home) |    3     |    3 (hrs)     |       0       |    :---:    |
|    Display favorites    |    3     |    3 (hrs)     |       0       |    :---:    |
|  show 1 favorite hero   |    3     |    3 (hrs)     |       0       |    :---:    |
|       Total Time        |          |    44 (hrs)    |      39       |    :---:    |

**Additional Libraries**

**Code Snippet**

```  
let keys = (Object.keys(props.bio))

    let list = keys.map((item, index) => {

        return (
            <ol
                key={index}
            ><h5>{item}</h5>{values[index]}</ol>
        )
    })
  ```


**Issues and Resolutions**

**Problem:** image wouldn't show up, and when I put the exact path in the site errored out

**Solution:** I put the image url in state and passed it once fetch had been called

**Problem:** when I was autosaving my code was re-formating adding spaces in random places

**Solution:** I deleted the format doc with pretteir

**Problem:** the search button wouldn't return the correct results

**Solution:** I parseInt(id) the id returned so I wasn't adding a string to a number

**Problem:**  Pages won't render because props isn't defined on the first render

**Solution:** I put the function where props is called in if condtionals where if props wasn't defined it renders an empty div

**Problem:** Clicking on Home button wouldn't render home

**Solution:** Removed Router from around Switch

**Problem:** My css files were conflicting and fighting over components

**Solution:** I added an id to each main page and called most of my components from that