import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/mainPage/navbar"
import Footer from "@/components/mainPage/footer"
import styles from "@/styles/started.module.css"

export default function GetStarted() {
  return(
    <>
      <Navbar/>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold font-mono text-center">Get Started with XelaRelam Coding Community</h1>
        <p className="text-lg font-sans text-center">Welcome to XelaRelam Coding Community! Here, you can get started with various programming languages.</p>

        <section className="mt-8 flex justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold font-mono">BDFD </h2>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C0%2C0%2C0%29&t=vscode&wt=none&l=text&width=850&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%2520%2509%2524title%255BPong%21%255D%250A%2520%2520%2520%2520%2524color%255B%2523ff47ff%255D%250A%2520%2520%2520%2520%2524desciption%255BPing%2520is%2520%2524pingms%255D%250A%2520%2520%2520%2520%2524footer%255BThis%2520command%2520replies%2520to%2520%2522%21ping%2522%255D%250A&tb="
              className={`${styles.bdfd} ${styles.iframe}`}
              scrolling="no"
              title="BDFD"
              sandbox="allow-scripts allow-same-origin">
            </iframe>
            <p className="text-md font-sans text-center mt-4">BDFD is a powerful developing Tool for Discord Bots for beginners.</p>
          </div>
        </section>

        <section className="mt-8 flex justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold font-mono">AOIJS</h2>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C0%2C0%2C0%29&t=vscode&wt=none&l=javascript&width=850&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520%257B%2520AoiClient%2520%257D%2520%253D%2520require%28%2522aoi.js%2522%29%253B%250Aconst%2520client%2520%253D%2520new%2520AoiClient%28%257B%250A%2520%2520token%253A%2520%2522xxxxxxxxxxxx.xxxxxx.xxxxxxxxxxxxxxxxxxx%2522%252C%250A%2520%2520prefix%253A%2520%2522%21%2522%252C%250A%2520%2520intents%253A%2520%255B%2522DirectMessages%2522%252C%2520%2522Guilds%2522%252C%2520%2522GuildMessages%2522%255D%252C%250A%2520%2520events%253A%2520%255B%2522onMessage%2522%252C%2520%2522onInteractionCreate%2522%255D%252C%250A%2520%2520database%253A%2520%257B%250A%2520%2520%2520%2520type%253A%2520%2522aoi.db%2522%252C%250A%2520%2520%2520%2520db%253A%2520require%28%2522%2540akarui%252Faoi.db%2522%29%252C%250A%2520%2520%2520%2520dbType%253A%2520%2522KeyValue%2522%252C%250A%2520%2520%2520%2520tables%253A%2520%255B%2522main%2522%255D%252C%250A%2520%2520%2520%2520securityKey%253A%2520%2522a-32-characters-long-string-here%2522%250A%2520%2520%257D%250A%257D%29%253B%250A%250Aclient.readyCommand%28%257B%250A%2520%2520name%253A%2520%2522ready%2522%252C%250A%2520%2520code%253A%2520%2560%250A%2509%2524log%255BReady%2520on%2520client%2520%2524username%255B%2524clientID%255D%21%255D%250A%2560%257D%29%253B%250A%250Aclient.command%28%257B%250A%2520%2520name%253A%2520%2522ping%2522%252C%250A%2520%2520code%253A%2520%2560%250A%2520%2520%2509%2524title%255BPong%21%255D%250A%2520%2520%2520%2520%2524color%255B%2523ff47ff%255D%250A%2520%2520%2520%2520%2524desciption%255BPing%2520is%2520%2524pingms%255D%250A%2520%2520%2520%2520%2524footer%255BThis%2520command%2520replies%2520to%2520%2522%21ping%2522%255D%250A%2560%257D%29&tb="
              className={`${styles.aoi} ${styles.iframe}`}
              title="AOI.JS"
              scrolling="no"
              sandbox="allow-scripts allow-same-origin">
            </iframe>
            <p className="text-md font-sans text-center mt-4">AOIJS is a powerful wrapper of Discord.js for building scaleable Discord Bots.</p>
          </div>
        </section>

        <section className="mt-8 flex justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold font-mono">ForgeScript</h2>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C0%2C0%2C0%29&t=vscode&wt=none&l=javascript&width=850&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520%257B%2520ForgeClient%2520%257D%2520%253D%2520require%28%2522%2540tryforge%252Fforgescript%2522%29%250Aconst%2520%257B%2520ForgeDB%2520%257D%2520%253D%2520require%28%2522%2540tryforge%252Fforge.db%2522%29%250A%2520%2520%2520%250Aconst%2520client%2520%253D%2520new%2520ForgeClient%28%257B%250A%2520%2520%2522intents%2522%253A%2520%255B%2522Guilds%2522%252C%2522GuildMessages%2522%252C%2522DirectMessages%2522%255D%252C%250A%2520%2520%2522prefixes%2522%253A%2520%255B%2522%21%2522%255D%252C%250A%2520%2520%2522events%2522%253A%2520%255B%2522messageCreate%2522%252C%2522ready%2522%255D%252C%250A%2520%2520%2522extensions%2522%253A%2520%255B%250A%2520%2520%2520%2520new%2520ForgeDB%28%29%250A%2520%2520%255D%250A%257D%29%250A%250Aclient.commands.add%28%257B%250A%2520%2520type%253A%2520%2522ready%2522%252C%250A%2520%2520code%253A%2520%2560%250A%2520%2520%2520%2520%2524log%255BReady%2520on%2520client%2520%2524username%255B%2524clientID%255D%21%255D%250A%2560%257D%29%250A%250Aclient.commands.add%28%257B%250A%2520%2520name%253A%2520%2522ping%2522%252C%250A%2520%2520type%253A%2520%2522messageCreate%2522%252C%250A%2520%2520code%253A%2520%2560%250A%2520%2520%2520%2520%2524title%255BPong%21%255D%250A%2520%2520%2520%2520%2524color%255B%2523ff47ff%255D%250A%2520%2520%2520%2520%2524desciption%255BPing%2520is%2520%2524pingms%255D%250A%2520%2520%2520%2520%2524footer%255BThis%2520command%2520replies%2520to%2520%2522%21ping%2522%255D%250A%2560%257D%29%250A%250Aclient.login%28%2522xxxxxxxxxxx.xxxxxxx.xxxxxxxxxxxxxxx%2522%29%253B"
              className={`${styles.fs} ${styles.iframe}`}
              sandbox="allow-scripts allow-same-origin"
              scrolling="no"
              title="ForgeScript">
            </iframe>
          <p className="text-md font-sans text-center mt-4">ForgeScript is a powerful wrapper of Discord.js for building scaleable Discord Bots.</p>
          </div>
        </section>

        <section className="mt-8 flex justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold font-mono">Discord.js</h2>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C0%2C0%2C0%29&t=vscode&wt=none&l=auto&width=850&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520%257B%2520Client%252C%2520GatewayIntentBits%252C%2520EmbedBuilder%2520%257D%2520%253D%2520require%28%27discord.js%27%29%253B%250Aconst%2520client%2520%253D%2520new%2520Client%28%257B%2520%250A%2520%2520%2520%2520intents%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520GatewayIntentBits.GuildMessages%252C%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520GatewayIntentBits.Guilds%252C%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520GatewayIntentBits.DirectMessages%250A%2520%2520%2520%2520%255D%250A%257D%29%253B%250A%250Aclient.once%28%27ready%27%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520console.log%28%2560ready%2520on%2520client%2520%2524%257Bclient.user.tag%257D%2560%29%253B%250A%257D%29%253B%250A%250Aclient.on%28%27messageCreate%27%252C%2520message%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520if%2520%28message.content%2520%253D%253D%253D%2520%27%21ping%27%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520embed%2520%253D%2520new%2520EmbedBuilder%28%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.setTitle%28%27Pong%21%27%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.setColor%28%27%2523ff47ff%27%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.setDescription%28%2560Ping%2520is%2520%2524%257Bclient.ws.ping%257Dms%2560%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520.setFooter%28%257B%2520text%253A%2520%27This%2520command%2520replies%2520to%2520%2522%21ping%2522%27%2520%257D%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520message.channel.send%28%257B%2520embeds%253A%2520%255Bembed%255D%2520%257D%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%29%253B%250A%250Aclient.login%28%27xxxxxxxxxxxx.xxxxxx.xxxxxxxxxxxxxxxxxxx%27%29%253B%250A&tb="              className={`${styles.djs} ${styles.iframe}`}
              sandbox="allow-scripts allow-same-origin"
              title="discord.js"
              scrolling="no">
            </iframe>
            <p className="text-md font-sans text-center mt-4">Discord.js is a powerful library for building Discord bots.</p>
          </div>
        </section>
        <section className="mt-8 flex justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold font-mono">Discord.py</h2>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C0%2C0%2C0%29&t=vscode&wt=none&l=auto&width=850&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=import%2520discord%250Afrom%2520discord.ext%2520import%2520commands%250A%250Aintents%2520%253D%2520discord.Intents.default%28%29%250Aintents.guilds%2520%253D%2520True%250Aintents.guild_messages%2520%253D%2520True%250Aintents.direct_messages%2520%253D%2520True%250A%250Abot%2520%253D%2520commands.Bot%28command_prefix%253D%27%21%27%252C%2520intents%253Dintents%29%250A%250A%2540bot.event%250Aasync%2520def%2520on_ready%28%29%253A%250A%2520%2520%2520%2520print%28f%27ready%2520on%2520client%2520%257Bbot.user.name%257D%27%29%250A%250A%2540bot.command%28%29%250Aasync%2520def%2520ping%28ctx%29%253A%250A%2520%2520%2520%2520embed%2520%253D%2520discord.Embed%28%250A%2520%2520%2520%2520%2520%2520%2520%2520title%253D%2522Pong%21%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520description%253Df%2522Ping%2520is%2520%257Bround%28bot.latency%2520*%25201000%29%257Dms%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520color%253D0xff47ff%250A%2520%2520%2520%2520%29%250A%2520%2520%2520%2520embed.set_footer%28text%253D%27This%2520command%2520replies%2520to%2520%2522%21ping%2522%27%29%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520await%2520ctx.send%28embed%253Dembed%29%250A%250Abot.run%28%27xxxxxxxxxxxx.xxxxxx.xxxxxxxxxxxxxxxxxxx%27%29%250A&tb="                className={`${styles.py} ${styles.iframe}`}
                title="Python"
                sandbox="allow-scripts allow-same-origin">
              </iframe>
            <p className="text-md font-sans text-center mt-4">Discord.py is a powerful library for building Discord bots.</p>
          </div>
        </section>

        <p className="text-lg font-sans text-center mt-8">Join our discord community today and start building amazing projects with these languages and more!</p>
      </main>
      <Footer/>
    </>
  )
}