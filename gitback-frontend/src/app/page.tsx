import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <div className="absolute top-20 left-1/2 -translate-x-1/2 transform rounded-full"> 
          <div className="settingsBox">
            <text className = "settingsText">
            SETTINGS
            </text>
          </div>
        </div>
        <div className = "settingsContainer">
        <div className="changeUsername">
          <a
            //href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
              Change Username
            </a>
        </div>
        <div className="logOut">
          <a
            //href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
              Log Out
            </a>
        </div>
        <div className="deleteAccount">
          <a
            //href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
              Delete Account
            </a>
        </div>
        </div>
      </main>
    </div>
  );
}
