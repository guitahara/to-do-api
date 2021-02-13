class UserSchema {
    constructor(){
        this.name
        this.userName
    }

    buildWithDatabase(data) {
        this.name = data.name
        this.userName = data.userName
    }

    buildWithCreateRequestData(data) {
        this.name = data.name
        this.userName = data.userName
        this.password = data.password
    }
}