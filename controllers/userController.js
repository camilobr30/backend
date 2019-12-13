const { getSingleUser, newUser, updateUser, updateStatusEnrollment} = require('./resolvers/userResolver')

module.exports = {
    getUser: (req, res) => {
        const userid = req.params.userid;
        getSingleUser(userid)
            .then(user => {
                res.status(201).send(user);
            })
            .catch(err => {
                res.status(404).send(err)
            })
    },
    createUser: (req, res) => {
        newUser(req.body)
            .then((user) => {
                res.status(201).send(user);
            })
            .catch((err) => {
                res.status(409).send(err);
            })
    },
    updateThisUser: (req, res) => {
        const userid = req.params.userid;
        updateUser(userid, req.body)
            .then((user) => {
                res.status(201).send(user);
            })
            .catch((err) => {
                res.status(409).send(err);
            })
    },
    updatethisStatusEnrollment: (req, res) => {
        const userid = req.params.userid;
        updateStatusEnrollment(userid)
        .then((user) => {
            res.status(201).send(user);
        })
        .catch((err) => {
            res.status(409).send("yttufygiuhoi");
        })
    }

}