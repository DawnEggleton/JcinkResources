populatePage(accounts);

//initialize isotope
// quick search regex
let qsRegex;
let elements = document.querySelectorAll(gridItem);

// init Isotope
$(window).on('load', function() {
    $container.isotope({
        itemSelector: gridItem,
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: 30
        },
        sortBy: 'name',
        getSortData: {
            name: '.character-name',
            posts: '.post-count parseInt',
        },
        sortAscending: {
            name: true,
            posts: false,
        }
    });

    //handle filter storage
    let queryParamsArray = window.location.search.split('&').map(param => param.split('='));
    let queryParams = {};
    queryParamsArray.forEach(param => {
        queryParams[param[0]] = param[1];
    });
    for (const param in queryParams) {
        if(param !== '') {
            let key = param;
            let values = queryParams[param].split('_');

            if(document.querySelector(`[data-filter-group="${key}"]`) && values.length > 0) {
                document.querySelector(`[data-filter-group="${key}"] .all`).classList.remove('is-checked');
                values.forEach(value => {
                    document.querySelector(`[data-filter-group="${key}"] [value="${value}"]`)
                    .closest('label')
                    .classList.add('is-checked');
                });
                setCustomFilter();
            }
        }
    }

    if(window.location.search.split('typesearch=')[1]) {
        document.querySelector(typeSearch).value = window.location.search.split('typesearch=')[1].split('&')[0];
        setCustomFilter();
    }
});

//use value of input select to filter
let checkboxes = document.querySelectorAll(filterOptions);
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', e => {
        if(e.currentTarget.classList.contains('all')) {
            e.currentTarget.checked = true;
            e.currentTarget.parentElement.classList.add('is-checked');
            e.currentTarget.parentElement.parentElement.querySelectorAll('input:not(.all)').forEach(input => {
                input.checked = false;
                input.parentElement.classList.remove('is-checked');
            });
        } else {
            if(e.currentTarget.parentElement.classList.contains('is-checked')) {
                e.currentTarget.checked = false;
                e.currentTarget.parentElement.classList.remove('is-checked');
            } else {
                e.currentTarget.checked = true;
                e.currentTarget.parentElement.classList.add('is-checked');
                e.currentTarget.parentElement.parentElement.querySelector('input.all').checked = false;
                e.currentTarget.parentElement.parentElement.querySelector('input.all').parentElement.classList.remove('is-checked');
            }
        }
        let labels = e.currentTarget.parentElement.parentElement.querySelectorAll('label');
        let checked = 0;
        labels.forEach(label => {
            if(label.classList.contains('is-checked')) {
                checked++;
            }
        });
        if(checked === 0) {
            e.currentTarget.parentElement.parentElement.querySelector('input.all').checked = true;
            e.currentTarget.parentElement.parentElement.querySelector('input.all').parentElement.classList.add('is-checked');
        }
        //set filters
        setCustomFilter();
    });
});

// use value of search field to filter
document.querySelector(typeSearch).addEventListener('keyup', e => {
appendSearchQuery('typesearch', e.currentTarget.value);
    setCustomFilter();
});

// bind sort button click
let sortButtons = document.querySelectorAll(sorts);
sortButtons.forEach(button => {
    button.addEventListener('click', e => {
        let sortValue = e.currentTarget.dataset.sort;
        $container.isotope({ sortBy: sortValue });
        sortButtons.forEach(button => {
            button.classList.remove('is-checked');
        });
        e.currentTarget.classList.add('is-checked');
    });
});