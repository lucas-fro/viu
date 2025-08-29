export function validateName(name: string): string {
  if (!name || name.trim().length === 0) {
    return "O nome não pode estar vazio.";
  }

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) {
    return "O nome deve conter apenas letras e espaços.";
  }

  return "";
}

export function validateEmail(email: string): string {
  if (!email) {
    return "O e-mail não pode estar vazio.";
  }

  if (email.includes(" ")) {
    return "O e-mail não pode conter espaços.";
  }

  const atIndex = email.indexOf('@');
  if (atIndex === -1) {
    return "O e-mail deve conter um caractere '@'.";
  }

  return "";
}

export function validatePassword(password: string): string {
  const passwordRegex = /^.{6,}$/;

  if (!passwordRegex.test(password)) {
    return "A senha deve ter no mínimo 6 dígitos.";
  }

  return "";
}