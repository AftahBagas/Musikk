const { Composer, InlineKeyboard } = require("grammy");
const { escape } = require("html-escaper");

const composer = new Composer();

composer.command("start", async (ctx) => {
  await ctx.reply(
    `<b>halo ${escape(ctx.from.first_name)}!</b>

Saya adalah Alpha Bot, saya mengizinkan Anda memutar musik dalam voice chat grup.

Perintah yang saat ini saya dukung adalah:

/play - putar file audio yang dijawab atau video YouTube
/pause - jeda streaming audio
/resume - lanjutkan streaming audio
/skip - lewati streaming audio saat ini
/stop - bersihkan antrian dan hapus bot pengguna dari panggilan`,
    {
      reply_markup: new InlineKeyboard()
        .url("👤 Pemilik", "https://t.me/kanjengingsun")
        .url("Group 🗣️", "https://t.me/musikalpha"),
    }
  );
});

module.exports = composer;
