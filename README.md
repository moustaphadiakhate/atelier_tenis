# ATELIER TENIS API (Mustafa Jaxateh)

[linkedIn](https://www.linkedin.com/in/mustafa-jaxateh-869214128/) 
---
## Requirements

For development, you will need MongoDB, Node.js, and NPM on your environement.

---

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.13.1

    $ npm --version
    8.3.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### NPM

Select the folder and run the below commands

  1. `$ git clone https://github.com/moustaphadiakhate/atelier_tenis.git`
  2. `$ cd atelier_tenis`
  3. Create a copy of `.env.template` and rename it `.env`.
  4. Remove the `#` from every line.
  5. `$ npm run keygen` to generate api key if need
  5. `$ npm run seed` put the data from /data/dataset.json to atelier_tenis mongoDB database

## To Run the project

  1. `$ npm start`
  2. Go to `localhost:3000` in a browser
    * Normal output looks like this:
    `{"status":200,"result":"atelier_tenis api server.. nothing to see here"}`

## Scripts

 * keygen.js - Gives an api key to be used by ClientApi for next communications with atelier_tenis API in secure mode.
```
usage: npm run keygen
```

 * databaeSeed.js - Put the data from /data/dataset.json to atelier_tenis mongoDB database
```
usage: npm run seed
```


## All Api endpoints

### Name: get_player
```

Method : GET
URL : http://localhost:3000/v0/players/get_player?id=52
Request : {}
```

### Name: get_players
```

Method : GET
URL :http://localhost:3000/v0/players/get_player
Request : {}
```
### Name: get_fav_contry
```

Method : GET
URL :http://localhost:3000/v0/players/get_fav_contry
Request : {}
```
### Name: get_player_imc_moyen
```

Method : GET
URL :http://localhost:3000/v0/players/get_player_imc_moyen
Request : {}
```
### Name: get_heigth_median
```

Method : GET
URL :http://localhost:3000/v0/players/get_heigth_median
Request : {}
```

