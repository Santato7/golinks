const urlForm = document.getElementById("urlForm") as HTMLFormElement;

urlForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { value } = urlForm.url;
  shortenUrl(value);
});

async function shortenUrl(_userUrl: string) {
  fetch("/api/shortenUrl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userUrl: _userUrl }),
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error("Erro na solicitação: " + response.status);
      }
      // Não analise a resposta como JSON aqui
      // return response.json();
    })
    .then(() => {
      // Manipule o sucesso aqui, pois a resposta não é um JSON
      console.log("Solicitação bem-sucedida");
    })
    .catch((error) => {
      // Manipule erros aqui
      console.error("Erro na solicitação Fetch:", error);
    });
}
