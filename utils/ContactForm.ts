export function validateFormData(formData: FormDataI): boolean {
  for (const key in formData) {
    const value = formData[key as keyof FormDataI].trim();
    if (value.length === 0) {
      return false;
    }
  }
  return true;
}
