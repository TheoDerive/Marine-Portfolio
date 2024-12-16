import * as Git from "simple-git";

export async function Test() {
  try {
    const git = await Git.simpleGit({
      baseDir: "/home/thyo/Marine-Portfolio/",
      binary: "git",
    });
    await git.init();

    const remotes = await git.getRemotes(true);
    let remote = "";

    if (remotes) {
      remotes.forEach((r) => {
        if (r.name === "website") {
          remote = r.refs.push.replace(
            "://",
            `"//${process.env.GITHUB_CONNECTION || "votre_tocken_secret"}"`,
          ) as string;
        }
      });
    }

    await git.add("./*").commit("Teste message").push(remote, "dev");
  } catch (error) {
    console.log(error);
  }
}
