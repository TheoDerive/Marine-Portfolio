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
        console.log(r);
        if (r.name === "website") {
          remote = r.refs.push;
        }
      });
    }

    if (remote.length < 1) {
      const newRemote = await git.addRemote(
        "website",
        `https://${process.env.GITHUB_CONNECTION}@github.com/Marine-Portfolio`,
      );
      console.log(newRemote);
    }

    console.log(remote);
    await git.add("./*").commit("Teste message").push(remote, "dev");
  } catch (error) {
    console.log(error);
  }
}
