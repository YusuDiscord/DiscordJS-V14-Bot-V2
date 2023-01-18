const { EmbedBuilder } = require("discord.js");
require("dotenv").config();

module.exports = {
    name: "help",
    description: "Lista de comandos disponibles.",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
    },
    run: async (client, interaction, config) => {
        const embed = new EmbedBuilder()
            .setColor("#C28F2C")
            // .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`COMANDOS DISPONIBLES *${client.user.username.toUpperCase()}* \n`)
            .addFields(
                {
                    name: `*${process.env.PREFIX}play + canción*`,
                    value: "`Reproduce una canción.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}lol + Invocador*`,
                    value: "`Información Invocador.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}lolparche*`,
                    value: "`Notas parche Lol`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}akinator*`,
                    value: "`Jugar a Akinator.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}juegos*`,
                    value: "`Varios juegos disponibles.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}meme*`,
                    value: "`Meme random reddit.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}elrellano + página*`,
                    value: "`Vídeos elrellano.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}carteleracine*`,
                    value: "`Cartelera de cine.`",
                    inline: true,
                },
                // {
                //     name: `*${process.env.PREFIX}encuesta*`
                //     value: "`Crear una encuesta.`",
                //     inline: true,
                // },
                {
                    name: `*${process.env.PREFIX}google*`,
                    value: "`Búsqueda google`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}yt + texto*`,
                    value: "`Buscar video youtube.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}playlistyt + ID Canal*`,
                    value: "`Playlist de youtube.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}asci + texto*`,
                    value: "`Texto a ASCII.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}avatar + @usuario*`,
                    value: "`Avatar de un usuario.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}arder + @usuario*`,
                    value: "`Ardiendo en pasión.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}usuario + @usuario*`,
                    value: "`Información sobre un usuario.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}tiempo + ciudad*`,
                    value: "`Información del tiempo.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}bigtext + texto*`,
                    value: "`Texto grande con numeros y letras.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}morse + texto*`,
                    value: "`Convertir texto a morse.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}tts + texto*`,
                    value: "`Texto a voz.`",
                    inline: true,
                },
                // {
                //     name: `*${process.env.PREFIX}serverinfo*`,
                //     value: "`Información del servidor.`",
                //     inline: true,
                // },
                {
                    name: `*${process.env.PREFIX}traducir + texto*`,
                    value: "`Traducir texto a Ingles.`",
                    inline: true,
                },
                // {
                //     name: `*${process.env.PREFIX}corona + país*`,
                //     value: "`Información sobre el coronavirus.`",
                //     inline: true,
                // },
                {
                    name: `*${process.env.PREFIX}ping*`,
                    value: "`Ping del bot.`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}enviarmd + usuario*`,
                    value: "`Enviar mensajes privados. (Admin/Mods)`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}borrar + nº*`,
                    value: "`Borrar mensajes. (Admin/Mods)`",
                    inline: true,
                },
                {
                    name: `*${process.env.PREFIX}email*`,
                    value: "`Enviar email. (Admin)`",
                    inline: true,
                }
            )
            .setTimestamp()
            .setFooter({
                text: process.env.NAME_BOT,
                iconURL: client.user.displayAvatarURL(),
            });

        await interaction.reply({ embeds: [embed] });
    },
};
