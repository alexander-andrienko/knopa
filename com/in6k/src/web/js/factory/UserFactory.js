App.factory('UserFactory', function() {
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
        list: _list
    };
});
