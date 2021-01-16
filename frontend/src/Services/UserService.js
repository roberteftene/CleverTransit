import axios from 'axios';
import cogoToast from 'cogo-toast';

export default class UserService {
    getUserByCredentials = function (mail, pass) {
        axios
            .post(
                'http://localhost:3000/users/credentials',
                {
                    email: mail,
                    password: pass,
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(res => {
                let user = res.data;
                localStorage.setItem('currentUser', user);
            })
            .catch(err => {
                console.log(err);
            });
    };

    checkUserByCredentials = function (mail, pass) {
        let check = false;
        axios
            .post(
                'http://localhost:3000/users/credentials',
                {
                    email: mail,
                    password: pass,
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(res => {
                if (JSON.parse(res.data)) {
                    cogoToast.warn('User not found :(');
                } else {
                    check = true;
                }
            })
            .catch(err => {
                console.log(err);
            });

        return check;
    };
}
