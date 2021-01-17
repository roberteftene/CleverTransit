import axios from 'axios';
import cogoToast from 'cogo-toast';

export default class UserService {
    emptyLocalStorage = function () {
        localStorage.removeItem('currentUser');
    };

    getUserFromStorage = () => {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        return user;
    };

    getUserIdFromStorage = () => {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if(user) {
            return user.id;
        }
    };

    checkLoggedUser() {
        let check = false;
        if (localStorage.getItem('currentUser') !== null) {
            check = true;
        } else {
            check = false;
        }
        return check;
    }
}
