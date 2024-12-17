const toBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      const base64 = fileReader.result as string;
      if (base64) {
        const base64String = base64.split(",")[1];
        resolve(base64String);
      }
      reject(`Nous ne pouvons pas telecharger ce fichier`);
    };

    fileReader.onerror = (err) => {
      reject(`Il y a eu une erreur pendant le processus: ${err}`);
    };
  });
};

export default toBase64;
