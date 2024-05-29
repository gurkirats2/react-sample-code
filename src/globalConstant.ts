export function createUrlWithParams(path: string, queryParams: any) {
  const encodedParams = new URLSearchParams(queryParams).toString();
  return `${path}?${encodedParams}`;
}

export const supportEmail = () => {
  const email = "";
  const subject = "This is the subject";
  const body = "This is the pre-filled body text";
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
};

export const formatDate = (date: Date | null | undefined): string => {
  if (date) {
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  return "";
};