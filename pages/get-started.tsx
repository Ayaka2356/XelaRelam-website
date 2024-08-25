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
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C0%2C0%2C0%29&t=vscode&wt=none&l=application%2Fx-sh&width=646&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2524nomention%250A%2524title%255BPoll%2520Time%21%255D%250A%2524onlyAdmin%255BOnly%2520Admins%252FModerators%2520can%2520use%2520this%2520command%21%255D%250A%2524addReactions%255B%25F0%259F%2591%258D%253B%25F0%259F%2591%258E%255D%250A%2524description%255B%2524message%255D%250A%2524footer%255B%25F0%259F%2591%258D%2520You%2520like%2520it%2520-%2520%25F0%259F%2591%258E%2520You%2520dont%2520like%2520it%255D%250A%250A%250A&tb="
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
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C0%2C0%2C0%29&t=vscode&wt=none&l=auto&width=898&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520%257B%2520AoiClient%2520%257D%2520%253D%2520require%28%2522aoi.js%2522%29%253B%250Aconst%2520client%2520%253D%2520new%2520AoiClient%28%257B%250A%2520%2520token%253A%2520%2522xxxxxxxxxxxx.xxxxxx.xxxxxxxxxxxxxxxxxxx%2522%252C%250A%2520%2520prefix%253A%2520%2522%21%2522%252C%250A%2520%2520intents%253A%2520%255B%2522MessageContent%2522%252C%2520%2522Guilds%2522%252C%2520%2522GuildMessages%2522%255D%252C%250A%2520%2520events%253A%2520%255B%2522onMessage%2522%252C%2520%2522onInteractionCreate%2522%255D%252C%250A%2520%2520database%253A%2520%257B%250A%2520%2520%2520%2520type%253A%2520%2522aoi.db%2522%252C%250A%2520%2520%2520%2520db%253A%2520require%28%2522%2540akarui%252Faoi.db%2522%29%252C%250A%2520%2520%2520%2520dbType%253A%2520%2522KeyValue%2522%252C%250A%2520%2520%2520%2520tables%253A%2520%255B%2522main%2522%255D%252C%250A%2520%2520%2520%2520securityKey%253A%2520%2522a-32-characters-long-string-here%2522%250A%2520%2520%257D%250A%257D%29%253B%250A%250A%252F%252F%2520Ping%2520command%2520which%2520replies%2520when%2520using%2520%2522%21ping%2522%250Aclient.command%28%257B%250A%2520%2520name%253A%2520%2522ping%2522%252C%250A%2520%2520code%253A%2520%2560Pong%21%2520%2524pingms%2560%250A%257D%29&tb=index.js"
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
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C0%2C0%2C0%29&t=vscode&wt=none&l=javascript&width=850&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520%257B%2520Client%252C%2520Intents%2520%257D%2520%253D%2520require%28%27discord.js%27%29%253B%250Arequire%28%27dotenv%27%29.config%28%29%253B%250A%250Aconst%2520client%2520%253D%2520new%2520Client%28%257B%2520intents%253A%2520%255BIntents.FLAGS.GUILDS%252C%2520Intents.FLAGS.GUILD_MESSAGES%255D%2520%257D%29%253B%250A%250Aclient.once%28%27ready%27%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520console.log%28%27Logged%2520in%2520as%253A%27%29%253B%250A%2520%2520%2520%2520console.log%28client.user.tag%29%253B%250A%2520%2520%2520%2520console.log%28client.user.id%29%253B%250A%257D%29%253B%250A%250Aclient.on%28%27messageCreate%27%252C%2520async%2520%28message%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%252F%252F%2520Ignore%2520messages%2520from%2520the%2520bot%2520itself%250A%2520%2520%2520%2520if%2520%28message.author.bot%29%2520return%253B%250A%250A%2520%2520%2520%2520if%2520%28message.content.startsWith%28%27status%253E%27%29%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520await%2520message.channel.send%28%2522I%27m%2520doing%2520okay.%2522%29%253B%250A%2520%2520%2520%2520%257D%2520else%2520if%2520%28message.content.startsWith%28%27unspoil%253E%27%29%2520%257C%257C%2520message.content.startsWith%28%27us%253E%27%29%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520messages%2520%253D%2520await%2520message.channel.messages.fetch%28%257B%2520limit%253A%25202%2520%257D%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520previousMessage%2520%253D%2520messages.last%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28previousMessage%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520await%2520message.channel.send%28previousMessage.content.replace%28%252F%255C%257C%252Fg%252C%2520%2522%2522%29%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%257D%29%253B%250A%250Aclient.login%28process.env.TOKEN%29%253B%250A"
              className={`${styles.djs} ${styles.iframe}`}
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
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C0%2C0%2C0%29&t=vscode&wt=none&l=python&width=908&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=import%2520discord%250Aimport%2520okonfig%2520as%2520okonfig%250Aimport%2520numpy%250A%250ATOKEN%2520%253D%2520okonfig.getToken%28%29%250A%250Aclient%2520%253D%2520discord.Client%28%29%250A%250A%2540client.event%250Aasync%2520def%2520on_message%28message%29%253A%250A%2520%2520%2523%2520we%2520do%2520not%2520want%2520to%2520reply%2520to%2520itself%250A%2520%2520if%2520message.author%2520%253D%253D%2520client.user%253A%250A%2520%2520%2520%2520return%250A%2520%2520if%2520message.content.startswith%28%2522status%253E%2522%29%253A%250A%2520%2520%2520%2520await%2520message.channel.send%28%2522I%27m%2520doing%2520okay.%2522%29%250A%2520%2520elif%2520message.content.startwith%28%2522unspoil%253E%2522%29%2520%257C%2520message.content.startswith%28%2522us%253E%2522%29%253A%250A%2520%2520%2520%2520msg%2520%253D%2520await%2520message.channel.history%28limit%253D1%252C%2520before%253Dmessage%29.flatten%28%29%250A%2520%2520%2520%2520if%2520msg%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520await%2520message.channel.send%28msg%255B0%255D.content.replace%28%2522%257C%2522%252C%2520%2522%2522%29%29%250A%250A%2540client.event%250Aasync%2520def%2520on_ready%250A%2520%2520%2520%2520print%28%27Logged%2520in%2520as%253A%27%29%250A%2520%2520%2520%2520print%28client.user.name%29%250A%2520%2520%2520%2520print%28client.user.id%29%250A%2520%2520%2520%2520%250Aclient.run%28TOKEN%29&tb=index.py"
                className={`${styles.py} ${styles.iframe}`}
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