document.addEventListener("DOMContentLoaded", async () => {
    const servers = [
        { name: "Server1", ip: "play.magmamc.net" },
        { name: "Server2", ip: "donutsmp.net" },
        { name: "Server3", ip: "play.archonmc.net" },
        { name: "Server4", ip: "play.firemc.fun" },
        { name: "Server5", ip: "GommeHD.net" },
        { name: "Server6", ip: "play.minemalia.com" },
        { name: "Server7", ip: "us.mineplex.com" },
        { name: "Server8", ip: "cf.mccentral.org" }
    ];

    const serverElements = document.querySelectorAll(".server span");

    serverElements.forEach(span => {
        span.textContent = "Loading...";
    });

    const getMinecraftOnlinePlayers = async (serverIp) => {
        const apiUrl = `https://api.mcsrvstat.us/2/${serverIp}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) return "API Error";
            const data = await response.json();
            return data.players?.online !== undefined ? `${data.players.online} Online` : "0 Online";
        } catch (e) {
            console.error(`Error fetching data for ${serverIp}:`, e);
            return "Error";
        }
    };

    const updateServerStatuses = async () => {
        const fetchPromises = servers.map(server => getMinecraftOnlinePlayers(server.ip));

        const playerCounts = await Promise.all(fetchPromises);

        serverElements.forEach((span, index) => {
            span.textContent = playerCounts[index];
        });
    };

    updateServerStatuses();
});
