# Ghost Writer

## React Router V6 🧭

Since the course was released [React Router](https://reactrouter.com) has been updated to version 6
which includes some breaking changes.
You can see the official migration guide from version 5 [ here ](https://reactrouter.com/docs/en/v6/upgrading/v5).

### To summarize the changes to the course code

Instead of a `<Switch />` we now use a [ `<Routes />` ](https://reactrouter.com/docs/en/v6/api#routes-and-route) component.

The [ `<Route />` ](https://reactrouter.com/docs/en/v6/api#routes-and-route) component no longer receives a **_component_** prop, instead we
pass a **_element_** prop which should be a React element i.e. JSX. Routing is
also now relative to the component.

For redirection and Private routing we can no longer use `<Redirect />`, we now
have available a [ `<Navigate />` ](https://reactrouter.com/docs/en/v6/api#navigate) component.

We no longer have access to the **_match_** and **_history_** objects in our
component props. Instead of the match object for routing parameters we can use
the [**useParams**](https://reactrouter.com/docs/en/v6/api#useparams) hook, and in place of using the history object to _push_
onto the router we can use the [**useNavigate**](https://reactrouter.com/docs/en/v6/api#usenavigate) hook.

The above changes do actually clean up the routing considerably with all
application routing in one place in [App.js](client/src/App.js).
Our [PrivateRoute](client/src/components/routing/PrivateRoute.js) is a good deal
simpler now and no longer needs to use a render prop.

With moving all of the routing to App.js this did affect the styling as all
routes needed to be inside the original `<section className="container">`.
To solve this each page component in App.js (any child of a `<Route />`) gets
wrapped in it's own `<section className="container">`, So we no longer need that
in App.js. In most cases this just replaces the outer `<Fragment />` in the
component.

The styling also affected the [ `<Alert />`
](client/src/components/layout/Alert.js) component as this will show in
addition to other page components adding it's own `<section>` would mean extra
content shift when the alerts show. To solve this the alerts have been given
their [ own styling ](https://github.com/bradtraversy/devconnector_2.0/blob/c5b1fc48ccfecf30b6ed85f228a337f82d93e3f9/client/src/App.css#L579) so they are `position: fixed;` and we get no content shift,
which additionally makes for a smoother UI with the alerts popping up in the top
right of the screen.

---

# Quick Start 🚀

### Add a default.json file in config folder with the following

```json
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

After running a build in the client 👆, cd into the root of the project.  
And run...

Linux/Unix

```bash
NODE_ENV=production node server.js
```

Windows Cmd Prompt or Powershell

```bash
$env:NODE_ENV="production"
node server.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)

### Deploy to Heroku

If you followed the sensible advice above and included `config/default.json` and `config/production.json` in your .gitignore file, then pushing to Heroku will omit your config files from the push.  
However, Heroku needs these files for a successful build.  
So how to get them to Heroku without commiting them to GitHub?

What I suggest you do is create a local only branch, lets call it _production_.

```bash
git checkout -b production
```

We can use this branch to deploy from, with our config files.

Add the config file...

```bash
git add -f config/production.json
```

This will track the file in git on this branch only. **DON'T PUSH THE PRODUCTION BRANCH TO GITHUB**

Commit...

```bash
git commit -m 'ready to deploy'
```

Create your Heroku project

```bash
heroku create
```

And push the local production branch to the remote heroku main branch.

```bash
git push heroku production:main
```

Now Heroku will have the config it needs to build the project.

> **Don't forget to make sure your production database is not whitelisted in MongoDB Atlas, otherwise the database connection will fail and your app will crash.**

After deployment you can delete the production branch if you like.

```bash
git checkout main
git branch -D production
```

Or you can leave it to merge and push updates from another branch.  
Make any changes you need on your main branch and merge those into your production branch.

```bash
git checkout production
git merge main
```

Once merged you can push to heroku as above and your site will rebuild and be updated.

---

## App Info

### Author

Brad Traversy
[Traversy Media](http://www.traversymedia.com)

### Version

2.0.0

### License

This project is licensed under the MIT License
