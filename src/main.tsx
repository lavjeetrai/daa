import CasaAlberoPage from "./index";
import { render } from "@hyper-elements/react";

async function start() {
  const result = await render(<CasaAlberoPage />, { pretty: true });
  document.open();
  document.write(result.html);
  document.close();
}

start().catch((error) => {
  console.error(error);
  document.body.innerHTML = `<pre style="font-family: sans-serif; color: #b00020; white-space: pre-wrap;">${String(error)}</pre>`;
});
