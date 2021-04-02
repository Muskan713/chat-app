const users = []


//AddUser
const addUser = ({id, username, room}) => {

    //Clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate Data
    if(!username || !room)
    {
        return {
            error: 'Username and Room must be provided!'
        }
    }

    //Check for existing user
    const existingUser = users.find((user) => {
        return user.username === username && user.room === room
    })

    if(existingUser) {
        return {
            error: 'Username already taken!'
        }
    }

    //Store User
    const user = {id, username, room}
    users.push(user)
    return {user}
}


//RemoveUser
const removeUser = (id) => {
   
    const index = users.findIndex((user) => user.id === id)

    if(index != -1){
        return users.splice(index, 1)[0]
    }

}


//GetUsers
const getUser = (id) => {
    
    return users.find((user) => user.id === id)
}


//GetUsers
const getUsersInRoom = (room) => {

    return users.filter((user) => user.room === room)
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}