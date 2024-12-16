import * as Git from "simple-git";

export async function Test() {
  try {
    Git.simpleGit({
      baseDir: "/home/thyo/Marine-Portfolio/",
      binary: "git",
    })
      .init()
      .add("./*")
      .commit("first commit!")
      .on("error", (err) => {
        console.error("Une erreur s'est produite:", err);
      })
      .addRemote("origin", "git@github.com:TheoDerive/Marine-Portfolio.git")

      .push("origin", "master", [], () => console.log("done"));
  } catch (error) {
    console.log(error);
  }
}
