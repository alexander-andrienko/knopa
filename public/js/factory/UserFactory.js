App.factory('UserFactory', function() {
    users = [
        {
            name: 'Vasya Pupkin',
            email: 'pupkin@mail.ru'
        },
        {
            name: 'Petro Ivanov',
            email: 'ivanov@gmail.com'
        }
    ];

    function _list() {
        return [
            {
                name: 'Vasya Pupkin'
            },
            {
                name: 'Terminator'
            }
        ]
    }
    return {
        list: users
    };
});
