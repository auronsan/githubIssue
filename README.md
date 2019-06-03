# githubIssue
React-challenge from QuodAI

### Requirement
```
yarn ~v1.12.3
```

### Initialization
```
git clone https://github.com/auronsan/githubIssue.git
yarn
cp .env.dist .env
yarn start
```

### Technical decision


 - How did you implement styling? What are the pros and cons? Why did you chose this approach?

``` 
I use BEM methodlogy with scss to make manageable styling 
and easy to read with clear naming of class
```

- How did you share state between components? What are the pros and cons? Why did you chose this approach?

```
as our component will become bigger and will have level-child component make state so hard to manage.
Using share state management like redux will make clear state and not make re-render component as many as possible
```
- Did you use React hooks? Why or why not?
```
For now I not using it, as they still new feature. React-hooks is simillar with react-redux but when I tried, if we have many state the useEffect() will become duplicate many times
```
- What would you improve?

```
In discussion
```