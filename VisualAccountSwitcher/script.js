/******
Set variable for the function. The base url is: 

https://files.jcink.net/uploads2/sitenamefromurl/filename.extension

The only part you have to change is the uploads2/sitenamefromurl part. In most instances, just updating the site name will be sufficient. So, if your site URL is https://testname.jcink.net, you would update to uploads2/testname.

If images still don't load, double check the images uploaded and check if they use uploads2 or just uploads. If the latter, remove the 2. Variables are best set in the <head> tags, but doing this anywhere before the third part (the function) below is best!
******/
const siteString = `uploads2/sitenamefromurl`;


/* Click to change subaccounts script, with a call to the function. Should not need to change. Must be placed AFTER the account switcher to work, but exact placement beyond that is flexible. */
let switcher = document.querySelector('#account-switch #subaccounts_menu select');
if(switcher !== null) {
    document.querySelectorAll('select[name="sub_id"] option').forEach(account => {
        account.innerHTML = account.innerHTML.replace(/&nbsp;&nbsp;»/g,'');
    });
    initSwitcher(switcher);
}

/* This is just a function; you shouldn't need to update it at all unless you want to remove the image. Can be placed absolutely anywhere; I tend to keep my functions in my <head> tags. */
function initSwitcher() {
    let characters = switcher.querySelectorAll('option');
    let newSwitch = `<div class="switch" data-type="grid" data-columns="5" data-gap="sm">`;
    characters.forEach((character, i) => {
        if(i !== 0) {
            let characterName = character.innerText.trim();
            let characterId = character.value;
            let siteString = `uploads2/godlybehaviour`;
            newSwitch += `<label class="switch-block">
                <input type="checkbox" value="${characterId}" onchange="this.form.submit()" name="sub_id" />
                <div style="background-image: url(https://files.jcink.net/${siteString}/av-${characterId}.png), url(https://files.jcink.net/${siteString}/av-${characterId}.gif), url(https://files.jcink.net/${siteString}/av-${characterId}.jpg), url(https://files.jcink.net/${siteString}/av-${characterId}.jpeg), url(https://picsum.photos/250);"></div>
                <b>${characterName}</b>
            </label>`;
        }
    });
    newSwitch += `</div>`;
    switcher.insertAdjacentHTML('afterend', newSwitch);
    switcher.remove();
}