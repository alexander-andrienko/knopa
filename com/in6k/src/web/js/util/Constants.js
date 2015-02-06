var Constants = {
    Status: {
        NONE: {id: 0, name: 'None', label: 'label-default', button: 'btn-default'},
        NOT_STARTED: {id: 1, name: 'Not Started', label: 'label-default', button: 'btn-default'},
        IN_PROGRESS: {id: 2, name: 'In Progress', label: 'label-warning', button: 'btn-warning'},
        COMPLETED: {id: 3, name: 'Completed', label: 'label-success', buuton: 'btn-success'},
        REJECTED: {id: 3, name: 'Rejected', label: 'label-danger', buuton: 'btn-danger'},
        getStatusById: function (statusId) {
            switch (parseInt(statusId)) {
                case Constants.Status.NOT_STARTED.id:
                    return Constants.Status.NOT_STARTED;
                case Constants.Status.IN_PROGRESS.id:
                    return Constants.Status.IN_PROGRESS;
                case Constants.Status.COMPLETED.id:
                    return Constants.Status.COMPLETED;
                default:
                    return Constants.Status.NONE;
            }
        }
    }
};