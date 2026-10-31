/** A corrected question is a new attempt; unrelated saved answers keep their old keys. */
export function questionIdentity(base: string, question?: { revision?: string }): string {
  return question?.revision ? `${base}_r${question.revision}` : base;
}
