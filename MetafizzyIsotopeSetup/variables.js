//set variables
let accounts = [];
let filters = {};
let containerClass = '.isotope-container';
let $container = $(containerClass);
let typeSearch = `.type-search`;
let memName = `.character-name`;
let visible = `is-visible`;
let filterGroup = `.filter-group`;
let filterOptions = `.filter-group input`;
let aliasList = `.member-list`;
let sorts = `.sort-button`;
let gridItem = `.grid-item`;

//set up member row template
function formatMemberRow(data) {
    let html = `<div class="grid-item g-${data.groupId} ${data.aliasClass}">
        <img src="${data.image}" />
        <div><b>Alias:</b> <span class="member-alias">${data.alias}</span></div>
        <div><b>Character:</b> <span class="character-name">${data.character}</span></div>
        <div><b>Age:</b> ${data.age}</div>
        <div><b>Group:</b> ${data.group}</div>
        <div><b>Posts:</b> <span class="post-count">${data.posts}</span></div>
    </div>`;
    return html;
}