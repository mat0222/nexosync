export const LEGAL_IDS = ["terminos", "privacidad", "cookies"] as const;

export type LegalId = (typeof LEGAL_IDS)[number];

export function legalIdFromHash(hash: string): LegalId | null {
  const id = hash.replace(/^#/, "");
  return (LEGAL_IDS as readonly string[]).includes(id) ? (id as LegalId) : null;
}
