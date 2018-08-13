export default {
    hcore: {
        action: {
            delete: 'Delete',
            show: 'Show',
            list: 'List',
            save: 'Save',
            create: 'Create',
            edit: 'Edit',
            retrieve: 'Retrieve',
            cancel: 'Cancel',
            refresh: 'Refresh',
            add_filter: 'Add filter',
            remove_filter: 'Remove this filter',
        },
        boolean: {
            true: 'Yes',
            false: 'No',
        },
        page: {
            list: '%{name} List',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Create %{name}',
            delete: 'Delete %{name} #%{id}',
            retrieve: 'Delete %{name} #%{id}',
            dashboard: 'Dashboard',
        },
        input: {
            file: {
                upload_several: 'Drop some files to upload, or click to select one.',
                upload_single: 'Drop a file to upload, or click to select it.',
            },
            image: {
                upload_several: 'Drop some pictures to upload, or click to select one.',
                upload_single: 'Drop a picture to upload, or click to select it.',
            },
        },
        message: {
            yes: 'Yes',
            no: 'No',
            are_you_sure_delete: 'Are you sure you want to delete this item ?',
            are_you_sure_retrieve: 'Are you sure you want to retrieve this item ?',
            about: 'About',
        },
        navigation: {
            no_results: 'No results found',
            page_out_of_boundaries: 'Page number %{page} out of boundaries',
            page_out_from_end: 'Cannot go after last page',
            page_out_from_begin: 'Cannot go before page 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
            next: 'Next',
            prev: 'Prev',
        },
        auth: {
            username: 'Username',
            password: 'Password',
            sign_in: 'Sign in',
            sign_in_error: 'Authentication failed, please retry',
            logout: 'Logout',
        },
        permission: {
            read: 'reading %{resource}',
            update: 'inserting / updating %{resource}',
            delete: 'deleting %{resource}',
        },
        notification: {
            updated: 'Element updated',
            created: 'Element created',
            deleted: 'Element deleted',
            retrieved: 'Element retrieved',
            item_doesnt_exist: 'Element does not exist',
            http_error: 'Server communication error',
        },
        validation: {
            required: 'Required',
            minLength: 'Must be %{min} characters at least',
            maxLength: 'Must be %{max} characters or less',
            minValue: 'Must be at least %{min}',
            maxValue: 'Must be %{max} or less',
            number: 'Must be a number',
            email: 'Must be a valid email',
        },
        error: {
            load: {
                models: 'Load models failed',
            },
        },
    },
};
