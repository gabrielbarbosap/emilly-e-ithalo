import { NextResponse } from "next/server";

// Recebe o recado do convidado e repassa para o Web3Forms, que envia por e-mail
// para o endereço cadastrado na chave (os noivos). A chave fica só no servidor.
export async function POST(request: Request) {
  try {
    const { gift, name, message, email, botcheck } = await request.json();

    // Honeypot: se o campo escondido veio preenchido, é bot. Finge sucesso.
    if (botcheck) {
      return NextResponse.json({ success: true });
    }

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return NextResponse.json(
        { success: false, error: "Preencha seu nome e o recado." },
        { status: 400 },
      );
    }

    const key = process.env.WEB3FORMS_ACCESS_KEY;
    if (!key) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Envio ainda não configurado. Falta a chave WEB3FORMS_ACCESS_KEY.",
        },
        { status: 500 },
      );
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: key,
        subject: `💌 Recado no site do casamento — de ${name.trim()}`,
        from_name: "Site do Casamento Ithalo & Emilly",
        name: name.trim(),
        email: typeof email === "string" && email.trim() ? email.trim() : undefined,
        message: `Presente escolhido: ${gift || "—"}\n\nRecado:\n${message.trim()}`,
      }),
    });

    const data = await res.json();
    if (data?.success) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json(
      { success: false, error: data?.message || "Não foi possível enviar." },
      { status: 502 },
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Erro inesperado ao enviar o recado." },
      { status: 500 },
    );
  }
}
