// Employee-related utilities
export interface ParsedEmployee {
  employee_id: string
  name: string
  skills: Array<{ name: string; recency: number }>
  experiences: ParsedExperience[]
  totalRelevantExperience: number
}

export interface ParsedExperience {
  role: string
  company: string
  startDate: Date
  endDate?: Date
  description: string
  yearsWorked: number
}

export function calculateYearsWorked(startDate: Date, endDate?: Date): number {
  const end = endDate || new Date()
  const diff = end.getTime() - startDate.getTime()
  return diff / (1000 * 60 * 60 * 24 * 365.25)
}

export function calculateSkillRecency(lastUsedDate: Date): number {
  const now = new Date()
  const yearsAgo = (now.getTime() - lastUsedDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  
  // Exponential decay: 100 at current, decays to 50 after 5 years
  return Math.max(0, 100 * Math.exp(-yearsAgo / 5))
}

export function calculateRelevantExperience(experiences: ParsedExperience[], relevantRoles: string[]): number {
  return experiences
    .filter(exp => relevantRoles.some(role => exp.role.toLowerCase().includes(role.toLowerCase())))
    .reduce((total, exp) => total + exp.yearsWorked, 0)
}
