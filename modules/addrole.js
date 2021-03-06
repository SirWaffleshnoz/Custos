module.exports = {
    name: 'addrole',
    permission: 1,
    main: function(bot, msg) {
        var numGiven = 0;
        var allowedRoles = ['Jade', 'Emerald', 'Pine', 'Sky', 'Sea', 'Purple', 'Pink', 'Yellow', 'Gold', 'Orange', 'Red'];
        var cmd = msg.content.split(" ")[0];

        if (cmd == "list" | cmd == "-l") {
            var list = "**__List of Allowed Roles:__**";
            for (var i = 0; i < allowedRoles.length; i++)
                list += "\n" + allowedRoles[i];
            msg.channel.send(list);
            return;
        }

        for (var i = 0; i < allowedRoles.length; i++) {
            if (msg.content.toLowerCase().indexOf(allowedRoles[i].toLowerCase()) > -1) {
                numGiven++;
                msg.member.roles.add(msg.guild.roles.cache.find(role => role.name === allowedRoles[i])).catch(console.error);
                msg.reply("you now have the " + allowedRoles[i] + " role!");
            }
        }

        if (numGiven == 0)
            msg.channel.send("No roles found. Check your message and try again!");
    }
};