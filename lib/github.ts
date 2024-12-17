export async function pushFile(
  category: string,
  data: string,
  filename: string,
) {
  try {
    const repoOwner = "TheoDerive";
    const repoName = "Marine-Portfolio";
    const branch = "dev";
    const githubToken = "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";

    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/public/images/${category}/${filename}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Ajout du fichier ${filename} dans ${category}`,
        content: data,
        branch,
      }),
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
