
const UserController = {

    index: (req, res) => {

        res.send("user resource here");
    },

    createUser: (req, res) => {
        res.send("second route");
    },

    login: (req, res) => {
        res.status(200).json({
            message: "all good"
        });
    }
}

module.exports = UserController;