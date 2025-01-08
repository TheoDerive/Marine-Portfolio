export async function pushFile(
  category: string,
  data: string,
  filename: string,
) {
  try {
    const repoOwner = "TheoDerive";
    const repoName = "Marine-Portfolio";
    const branch = "dev";
    const githubToken = process.env.GITHUB_CONNECTION;

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

    const isOk = response.ok;

    if (isOk) {
      return await response.json();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFile(
  category: string,
  filepath?: string,
  filename?: string
) {
    const repoOwner = "TheoDerive";
    const repoName = "Marine-Portfolio";
    const branch = "dev";
    const githubToken = process.env.GITHUB_CONNECTION;
    let url = ""
    let name = ""

    if(filepath){
    const filepathSplit = filepath.split("/")
    const filename = filepathSplit[filepathSplit.length - 1]
    name = filename

     url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/public/images/${category}/${filename}`;

    }else if(filename){
     name = filename
     url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/public/images/${category}/${filename}`;
    }


    console.log(url)

  // Obtenez le SHA du fichier à supprimer
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if(response.status === 404){
    console.log("le fichier a deja ete supprimer")
    return
  }

  if (!response.ok) {
    throw new Error(`Erreur lors de la récupération du fichier : ${response.statusText}`);
  }

  const fileData = await response.json();

  // Supprimez le fichier
  const deleteResponse = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github.v3+json",
    },
    body: JSON.stringify({
        message: `Suppression du fichier ${name} dans ${category}`,
      sha: fileData.sha, // Utilisez le SHA du fichier
    }),
  });

  if (!deleteResponse.ok) {
    throw new Error(`Erreur lors de la suppression : ${deleteResponse.statusText}`);
  }

  console.log(`Fichier supprimé : ${name}`);
}
