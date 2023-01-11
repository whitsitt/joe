---
title: "Contact"
aliases: ["contact"]
---

{{< rawhtml >}}
<div class="content">
    <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
    <div class="mb-4">
         <input type=text placeholder="Your Name" name="name" class="w-full p-4 bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-warmgray-700 dark:border-warmgray-700 dark:focus:bg-warmgray-800" required>
    </div>
    <div class="mb-4">
        <input type=text placeholder="Email Address" name="mail" class="w-full p-4 bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-warmgray-700 dark:border-warmgray-700 dark:focus:bg-warmgray-800" required>
    </div>
    <div class="mb-4">
        <textarea rows=5 cols=30 placeholder="Message" name="message" class="w-full p-4 bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-warmgray-700 dark:border-warmgray-700 dark:focus:bg-warmgray-800" required></textarea>
    </div>
    <div data-netlify-recaptcha="true"></div>
    <input type=submit value="Submit" class="w-full button duration-100 py-2 bg-zinc-500 text-white cursor-pointer transition-colors hover:bg-black">
    </form>
</div>
{{< /rawhtml >}}
