**NOTE: This is the Metafizzy Isotope (https://isotope.metafizzy.co/). It has a strict set of licenses for use. Please use within licensing terms.**
If you are only planning to install on your own site, or your code is otherwise OpenSource (meaning *free*), then no license purchase is required.

If you are planning on selling skins with this in it, you *must* purchase a personal developer license. It is a one-time fee of $25 USD and can be purchased on the site linked above.

Again, *while I have altered the script for a specific set of features, it is almost exclusively using the Metafizzy base, I do not own it, I cannot give you permission for commerical use.* I, myself, have a personal developer commercial license and can include the scripting in my skins as a result. This does not extend to anyone finding it here, in this reference repo.

**Instructions**
(in the loosest sense of the word)
1) The order of the scripts should match the order they are used in the HTML sample: functions, then variables, then insert your memberlist rows, then scripts.
2) Update your variables as needed while referencing the HTML structure you're using and the CSS classes you use in that strucutre.
3) In the variables, you'll see a function: `formatMemberRows()`. This takes member row data and formats it into HTML. This means your member list row template is, in fact, just an object being pushed to the `accounts` array. The `tempMemberListRows.js` file has *three* samples of a member list row. That is all you would put in that "HTML" template in Jcink. Feel free to add/remove values as you see fit, following the patterns you see there. This means you need to make sure the Member List Rows are called within `<script></script>` tags within your Member List Headers. If you need help understanding how to add or change a member list row object, I recommend looking up javascript objects on W3Schools or MDN docs. If having this with an HTML template export where it's "in use" would help, let me know and I can add that to the repo!