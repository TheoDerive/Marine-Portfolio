import * as Git from "simple-git";

export async function Test() {
  try {
    await Git.simpleGit({
      baseDir: "/home/thyo/Marine-Portfolio/",
      binary: "git",
    })
      .init()
      .add("./*")
      .commit("first commit!")
      .push("website", "dev", [], () => console.log("done"))
      .exec(() => console.log("pass"));
  } catch (error) {
    console.log(error);
  }
}
