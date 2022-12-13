We are doing Role/Task based proj dev, not feature based (In the latter we could have seperate folders for flights, search etc. and each folder can then have models, controllers, services etc.)

/
    -src/
        index.js //server
        models/
        controllers/
        services/
        repositories/
        utils/  //for any extra utility functions or constants which is going to be
                //common throughout the codebase. It is kind of like a helper
                //file or helper function
        config/ //to store our DB configurations or any other config we need later on
        middlewares/
    
    -tests/ [later]