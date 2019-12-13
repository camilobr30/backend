const {User} = require("../../modules")

module.exports = {
    getSingleUser: userid => {
        return new Promise((resolve, reject) => {
            User.findById(userid, (err, user) => {
                !err ? resolve(user) : reject(err)
            })
        })
    },
    newUser: userData => {
        return new Promise((resolve, reject) => {
            const {
                name,
                age,
                last_name,
                gender,
                is_active,
                enrollment,
                hostess
            } = userData

            const newUser = User({
                name,
                last_name,
                age,
                is_active,
                gender,
                enrollment,
                hostess
            })

            newUser.save((err, user) => {
                err ? reject(err) : resolve(user)
            })
        })
    },
    updateUser: (userid, userData) => {
        return new Promise((resolve, reject) => {
            const id = userid
            const {name, last_name, age, gender, hostess} = userData
            const newData = {
                name,
                last_name,
                age,
                hostess,
                gender
            }
            User.findByIdAndUpdate(id, {
                $set: newData
            }, {
                new: true
            }, (err, user) => {
                !err ? resolve(user) : reject(err)
            })
        })
    },
    updateStatusEnrollment: (userid) =>{
        return new Promise ((resolve, reject) =>{
            const id = userid
            User.findById(id, (error, user) => {
                if(!error && user !== null){
                    const statusEnrollment = user.enrollment
                    User.findByIdAndUpdate(id, {
                        $set: {
                            enrollment: !statusEnrollment
                        }
                    }, {
                        new: true
                    }, (err) => {
                        !err ? resolve("the enrollment Update") : reject(err)
                    })
                }else{
                    reject(error)
                }
                // !err? resolve(user) : reject(err)
            })

        })
    }
}
