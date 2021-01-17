import axios from 'axios';
import cogoToast from 'cogo-toast';

export default class UserService {
    emptyLocalStorage = function () {
        localStorage.removeItem('currentUser');
    };

    getUserIdFromStorage = () => {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        return user.id;
    };
}
