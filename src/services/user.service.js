import Network from './network.service';

class UserService extends Network {

    register(user){
        return this.send('PUT', '/user', user)
    }

    me(){
        return this.send('GET', '/user/me')
    }

    login(email, password){
        return this.send('POST', '/user/login', {
            email, password
        });
    }
}

export default new UserService();